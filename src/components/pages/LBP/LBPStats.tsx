import { FC, ReactElement, useState } from 'react';
import { Box, Tooltip, Stack, styled, Typography, Grid } from '@mui/material';
import { useCoingeckoTokenPrice } from '@usedapp/coingecko';

import { PhaseCard } from '../../shared/PhaseCard';
import { PhaseStat } from '../../shared/PhaseStat';
import { LBPChart } from './LBPChart';
import { useAuraLBP } from './hooks/useAuraLBP';
import Countdown from 'react-countdown';
import { formatValue, fromUnixTime } from '../../../utils';
import { AuraValue } from '../../shared/AuraValue';
import { ADDRESS } from '../../../constants/contracts';
import { useBalancerPoolLink } from '../../../hooks/useBalancerPoolLink';
import { StyledLink } from '../../shared/Link';
import { format } from 'date-fns';
import { ExternalLink } from '../../shared/ExternalLink';
import { Mainnet } from '@usedapp/core';

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: 500;
  font-size: 1rem;
`;

const Stat: FC<{ title: string; content: string | ReactElement; border?: number }> = ({
  title,
  content,
  border,
}) => (
  <Stack
    direction="row"
    spacing={0.5}
    justifyContent="space-between"
    alignItems="center"
    py={0.5}
    pb={border === 0 ? 0 : 0.5}
    borderBottom={border ?? 1}
    borderColor={theme => theme.appColors.slate[700]}
  >
    <Typography pr={4} color={theme => theme.appColors.slate[300]}>
      {title}
    </Typography>
    {/* @ts-ignore */}
    <Typography
      pl={4}
      color={theme => theme.palette.text.primary}
      textAlign="right"
      component="div"
    >
      {content}
    </Typography>
  </Stack>
);

const formatter = { mantissa: 0, average: false, thousandSeparated: true };

export const LBPStats: FC = () => {
  const poolData = useAuraLBP();
  const poolInfo = poolData.info;
  const [showValuesInEther, setShowValuesInEther] = useState<boolean>(false);
  const balancerLink = useBalancerPoolLink(poolInfo.poolId);

  const auraAddress = ADDRESS[Mainnet.chainId].cvx;
  const auraPrice = useCoingeckoTokenPrice(auraAddress, 'usd');
  const auraPriceWeth = parseFloat(poolData?.latestPrice?.price ?? '0');

  const endTime = poolInfo.end.time;

  const renderer = ({ hours, days, minutes, seconds, completed }: any) => {
    if (completed) return <Text>Ended</Text>;
    return (
      <Text>
        {days}d {hours}h {minutes}m {seconds}s
      </Text>
    );
  };

  return (
    <Stack spacing={2}>
      <PhaseCard
        startTime={poolInfo.start.time}
        endTime={poolInfo.end.time}
        href={balancerLink}
        token={{
          symbol: 'aura',
          address: auraAddress,
        }}
      >
        <LBPChart />
        <Stack
          spacing={2}
          sx={{ mt: 2, px: 1, pr: 4 }}
          justifyContent="space-between"
          direction="row"
        >
          <PhaseStat title="Current price:">
            {!!auraPriceWeth && (
              <AuraValue
                showWeth={showValuesInEther}
                onSwitch={() => setShowValuesInEther(!showValuesInEther)}
                valueUsd={parseFloat(auraPrice ?? '0')}
                valueWeth={auraPriceWeth}
              />
            )}
          </PhaseStat>
          <PhaseStat title="Ends in:">
            {!!endTime && <Countdown date={fromUnixTime(poolInfo.end.time)} renderer={renderer} />}
          </PhaseStat>
        </Stack>
      </PhaseCard>
      <Stack sx={{ div: { flex: 1 } }} spacing={2}>
        <Box border={theme => `1px solid ${theme.appColors.slate[800]}`} p={2.5} borderRadius={2}>
          <Box>
            <Typography color={theme => theme.appColors.slate[200]} mb={2}>
              This Balancer LBP is not a regular Balancer Pool. Learn more about how LBPs work by
              viewing Balancer’s documentation{' '}
              <StyledLink href="https://docs.balancer.fi/products/balancer-pools/liquidity-bootstrapping-pools-lbps">
                <u>Liquidity Bootstrapping Pools (LBPs)</u>
              </StyledLink>
            </Typography>
          </Box>
          <Stat title="Pool Tokens:" content="AURA and ETH" />
          <Stat title="Total Supply:" content="100,000,000 AURA" />
          <Stat
            title="Start Balances:"
            content={`${formatValue(poolInfo.start.balances[0], formatter)} AURA, ${formatValue(
              poolInfo.start.balances[1],
              formatter,
            )} ETH`}
          />
          <Stat
            title="Current Balances:"
            content={`${formatValue(
              parseFloat(poolData.pool?.tokens?.[1]?.balance ?? '0'),
              formatter,
            )} AURA, ${formatValue(
              parseFloat(poolData.pool?.tokens?.[0]?.balance ?? '0'),
              formatter,
            )} ETH`}
          />
          <Stat
            title="Start Weights:"
            content={`${poolInfo.start.weights[0]}%, ${poolInfo.start.weights[1]}%`}
          />
          <Stat
            title="Current Weights:"
            content={
              <Tooltip title="Weights update on new swaps">
                {/* @ts-ignore */}
                <Typography component="span">
                  {formatValue(
                    parseFloat(poolData.pool?.tokens?.[1].weight ?? '0') * 100,
                    formatter,
                  )}
                  %,{' '}
                  {formatValue(
                    parseFloat(poolData.pool?.tokens?.[0].weight ?? '0') * 100,
                    formatter,
                  )}
                  %
                </Typography>
              </Tooltip>
            }
          />
          <Stat
            title="End Weights:"
            content={`${poolInfo.end.weights[0]}%, ${poolInfo.end.weights[1]}%`}
          />
          <Stat
            title="Start Time:"
            content={format(fromUnixTime(poolInfo.start.time), 'dd MMMM yyyy, HH:mm')}
          />
          <Stat
            title="End Time:"
            content={format(fromUnixTime(poolInfo.end.time), 'dd MMMM yyyy, HH:mm')}
          />
          <Stat
            title="Swaps:"
            content={
              <Grid container justifyContent="flex-end">
                <ExternalLink href={balancerLink}>Recent swap history </ExternalLink>
              </Grid>
            }
          />
          <Stat title="Swap Fee:" content="2%" />
        </Box>
      </Stack>
    </Stack>
  );
};
