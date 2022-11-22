import { useCallback, useEffect, useMemo } from 'react';
import { LbpInfo, LBP_PARAMS } from '../../../../constants/lbp';
import { useApolloClients } from '../../../../context/ApolloProvider';
import {
  BalancerLbpQuery,
  useBalancerLbpQuery,
  useBalancerLbpSwapsQuery,
} from '../../../../graphql/balancer/codegen';
import { useValidChainId } from '../../../../hooks/useValidChainId';

export interface Swap {
  timestamp: number;
  id: string;
  tokenIn: string;
  tokenInSym: string;
  tokenAmountIn: string;
  tokenOut: string;
  tokenOutSym: string;
  tokenAmountOut: string;
  userAddress: { id: string };
  price?: number;
  deltas?: number[];
}

interface Result {
  pool?: BalancerLbpQuery['pools'][0];
  latestPrice?: BalancerLbpQuery['latestPrice'];
  swaps?: Swap[];
  info: LbpInfo;
}

export const useAuraLBP = (): Result => {
  const clients = useApolloClients();
  const { chainId } = useValidChainId();

  const poolInfo = LBP_PARAMS[chainId as number];

  const poolQuery = useBalancerLbpQuery({
    variables: { address: poolInfo.pool, pairId: poolInfo.pairId },
    client: clients.balancer,
    fetchPolicy: 'cache-and-network',
  });

  const swapsQuery = useBalancerLbpSwapsQuery({
    variables: { address: poolInfo.pool, lastTimestamp: 0 },
    client: clients.balancer,
    fetchPolicy: 'cache-and-network',
  });

  const fetchMore = useCallback(
    (timestamp: number) => {
      swapsQuery.fetchMore({
        variables: {
          address: poolInfo.pool,
          lastTimestamp: timestamp,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          if (prev.pools?.[0].id === fetchMoreResult.pools?.[0].id) {
            return {
              ...prev,
              pools: [
                {
                  ...prev.pools?.[0],
                  swaps: [
                    ...(prev.pools?.[0].swaps ?? []),
                    ...(fetchMoreResult.pools[0].swaps ?? []),
                  ],
                },
              ],
            };
          }
          return fetchMoreResult;
        },
      });
    },
    [swapsQuery, poolInfo],
  );

  const calculateSwap = useCallback(
    (swap: Swap) => {
      const tokenAmountIn = Number(swap.tokenAmountIn);
      const tokenAmountOut = Number(swap.tokenAmountOut);
      let price, deltas;
      if (swap.tokenInSym === poolInfo.pricingAsset) {
        price = tokenAmountIn / tokenAmountOut;
        deltas = [-tokenAmountOut, tokenAmountIn];
      } else {
        price = tokenAmountOut / tokenAmountIn;
        deltas = [tokenAmountIn, -tokenAmountOut];
      }
      return { ...swap, price, deltas };
    },
    [poolInfo],
  );

  // FIXME: - This is buggy, potentially because of this:
  // https://github.com/apollographql/apollo-client/issues/6916
  const swapsQueryPoolsResult = swapsQuery?.data?.pools;
  useEffect(() => {
    if (!swapsQueryPoolsResult?.length) return;

    const swaps = swapsQueryPoolsResult?.[0]?.swaps ?? [];
    if (!swaps.length || swaps.length % 1000 !== 0) return;

    const lastTimestamp = swaps[swaps.length - 1].timestamp;
    fetchMore(lastTimestamp);
  }, [swapsQueryPoolsResult, fetchMore, poolInfo, chainId]);

  return useMemo(
    () =>
      !!poolQuery.data?.pools?.length && !!swapsQuery.data?.pools?.length
        ? {
            pool: poolQuery.data.pools[0],
            swaps: swapsQuery.data.pools[0].swaps!.map(calculateSwap),
            latestPrice: poolQuery.data.latestPrice,
            info: poolInfo,
          }
        : {
            info: poolInfo,
          },
    [swapsQuery.data, poolQuery.data, poolInfo, calculateSwap],
  );
};
