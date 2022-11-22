import { FC, MutableRefObject, useEffect, useMemo, useRef } from 'react';
import {
  CandlestickData,
  createChart,
  IChartApi,
  ISeriesApi,
  UTCTimestamp,
} from 'lightweight-charts';
import { format } from 'date-fns';
import { useAuraLBP } from './hooks/useAuraLBP';
import { CircularProgress, styled } from '@mui/material';
import { fromUnixTime } from '../../../utils';
import { useMuiTheme } from '../../../hooks/useMuiTheme';
import { AppColors } from '../../../styles/colors';
import { MainnetContracts } from '../../../constants/contracts';
import { useCoingeckoTokenPrice } from '@usedapp/coingecko';

const ProgressContainer = styled('div')`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled('div')`
  position: relative;
  background: ${({ theme }) => theme.appColors.slate[900]};
  border-radius: 0.5rem;
  padding: 1rem;
`;

interface ChartSeries {
  chart?: IChartApi;
  candle?: ISeriesApi<'Candlestick'>;
  worstCase?: ISeriesApi<'Line'>;
}

const formatPrice = (price: number, wethPrice?: number) => {
  if (price === 0) return '';
  if (!wethPrice) return price.toFixed(8);
  return `$${(price * wethPrice).toFixed(2)}`;
};

export const LBPChart: FC = () => {
  const chartContainerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const series = useRef<ChartSeries>({});
  const poolData = useAuraLBP();
  const { info: poolInfo } = poolData;
  const { bucketSize } = poolInfo;
  const theme = useMuiTheme();
  const wethPrice = useCoingeckoTokenPrice(MainnetContracts.weth);

  const calcSpotPrice = (balances: number[], w: number[], lotSize = 2000, fee = 2 / 100) => {
    const [weightA, weightB] = w;
    const [balanceA, balanceB] = balances;
    return (
      (balanceB * (Math.pow(balanceA / (balanceA - lotSize), weightA / weightB) - 1)) /
      (1 - fee) /
      lotSize
    );
  };

  const weights = useMemo(() => {
    const start = poolInfo.start.weights;
    const end = poolInfo.end.weights;
    const step = Math.ceil((poolInfo.end.time - poolInfo.start.time) / bucketSize);

    const buckets = Array.from(Array(step).keys()).map(i => [
      start[0] - (i / step) * (start[0] - end[0]),
      start[1] + (i / step) * (end[1] - start[1]),
    ]);

    return buckets;
  }, [bucketSize, poolInfo]);

  const lineData = useMemo(() => {
    if (!weights || !poolData?.swaps?.length) return;

    const past = poolData.swaps;
    const ordered = past.sort((a, b) => (a.timestamp > b.timestamp ? 1 : -1));
    const lastSwapTimestamp = ordered[ordered.length - 1]?.timestamp ?? 0;

    const startBalance = poolInfo.start.balances;
    const startTime = poolInfo.start.time;
    const endTime = poolInfo.end.time;
    const rawDeltas = ordered.map(v => v.deltas!);

    const step = Math.ceil((endTime - startTime) / weights.length);

    const lastBalance = rawDeltas.reduce(
      (prev, curr) => [prev[0] + curr[0], prev[1] + curr[1]],
      startBalance,
    );

    const future = weights.map((weight, i) => ({
      time: (startTime + i * step) as UTCTimestamp,
      value: calcSpotPrice(lastBalance, weight),
    }));

    const filtered = future.filter(v => v.time > lastSwapTimestamp);
    return filtered;
  }, [weights, poolData?.swaps, poolInfo]);

  const candleData = useMemo(() => {
    if (!poolData?.swaps?.length) return;

    const past = poolData.swaps.filter(s => s.timestamp >= poolInfo.start.time);
    const ordered = past.sort((a, b) => (a.timestamp > b.timestamp ? 1 : -1));

    const startTime = ordered[0]?.timestamp ?? 0;
    const endTimestamp = ordered[ordered.length - 1]?.timestamp ?? 0;
    const step = Math.ceil((endTimestamp - startTime) / bucketSize);

    const buckets = Array.from(Array(step).keys()).map((i): CandlestickData | undefined => {
      const currTimestamp = startTime + i * bucketSize;
      const nextTimestamp = startTime + (i + 1) * bucketSize;
      const range = ordered.filter(
        v => v.timestamp >= currTimestamp && v.timestamp < nextTimestamp,
      );
      if (!range.length) return undefined;
      const startIndex = ordered.findIndex(v => v.id === range[0].id);
      const prices = range.map(v => v.price!);
      const open = startIndex === 0 ? prices[0] : ordered[startIndex - 1].price!;
      const close = prices[prices.length - 1];
      const time = currTimestamp as UTCTimestamp;
      const low = Math.min(...prices);
      const high = Math.max(...prices);
      return { open, close, low, high, time };
    });
    const filtered = buckets.map((v, i) => {
      if (!!v) return v;
      const last = buckets
        .slice(0, i)
        .reverse()
        .find(v => !!v);
      return {
        open: last?.close,
        close: last?.close,
        low: last?.close,
        high: last?.close,
        time: startTime + i * bucketSize,
      };
    }) as CandlestickData[];
    return filtered;
  }, [poolData?.swaps, poolInfo, bucketSize]);

  useEffect(() => {
    const handleResize = () => chart.applyOptions({ width: chartContainerRef.current.clientWidth });

    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth - 32,
      height: 275,
      handleScroll: true,
      handleScale: true,
      localization: {
        priceFormatter: (price: number) => formatPrice(price, parseFloat(wethPrice ?? '0')),
        timeFormatter: (timestamp: number) =>
          format(fromUnixTime(timestamp), 'dd MMMM yyyy, HH:mm'),
      },
      layout: {
        textColor: theme.appColors.slate[400],
        backgroundColor: 'transparent',
      },
      rightPriceScale: {
        scaleMargins: { top: 0.075, bottom: 0.05 },
      },
      timeScale: {
        lockVisibleTimeRangeOnResize: true,
        timeVisible: false,
        barSpacing: 50,
        tickMarkFormatter: (timestamp: number) =>
          timestamp % 86400 === 0 ? format(fromUnixTime(timestamp), 'dd MMMM') : '',
      },
      grid: {
        vertLines: { color: 'transparent' },
        horzLines: { color: 'transparent' },
      },
    });

    series.current.chart = chart;

    series.current.candle = chart.addCandlestickSeries({
      wickUpColor: AppColors.violet[300],
      wickDownColor: AppColors.violet[400],
      upColor: AppColors.violet[300],
      downColor: AppColors.violet[400],
      borderVisible: false,
      wickVisible: true,
      priceFormat: {
        type: 'custom',
        minMove: 0.000001,
        formatter: (price: any) => parseFloat(price).toFixed(8),
      },
    });

    series.current.worstCase = chart.addLineSeries({
      lineStyle: 1,
      priceLineVisible: false,
      lastValueVisible: false,
      color: theme.appColors.slate[300],
      lineWidth: 1,
    });

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, [theme, wethPrice]);

  useEffect(() => {
    if (candleData?.length) series.current.candle?.setData(candleData);
    if (lineData?.length) series.current.worstCase?.setData(lineData);
    if (!lineData || !candleData || !poolInfo?.start?.time || !poolInfo?.end?.time) return;

    try {
      series.current.chart?.timeScale().setVisibleRange({
        from: poolInfo.start.time as UTCTimestamp,
        to: poolInfo.end.time as UTCTimestamp,
      });
    } catch (error) {
      console.log(error);
    }
  }, [candleData, weights, lineData, poolInfo]);

  return (
    <Container ref={chartContainerRef}>
      {!lineData && (
        <ProgressContainer>
          <CircularProgress size={'3rem'} />
        </ProgressContainer>
      )}
    </Container>
  );
};
