import { FC } from 'react';
import Countdown from 'react-countdown';
import { Link, Stack, styled, Typography } from '@mui/material';

import { getNowUnix } from '../../../utils';
import { ExternalIcon } from '../Icons';

interface Props {
  startTime: number;
  endTime: number;
  href?: string;
}

const Text = styled(Typography)<{ active?: number }>`
  color: ${({ active, theme }) =>
    active ? theme.appColors.emerald[400] : theme.appColors.slate[300]};
  font-weight: bold;
  font-size: 1.25rem;
  position: relative;

  @keyframes blink {
    0% {
      background-color: ${({ theme }) => theme.appColors.emerald[400]};
    }
    50% {
      background-color: ${({ theme }) => theme.appColors.emerald[300]};
    }
    100% {
      background-color: ${({ theme }) => theme.appColors.emerald[400]};
    }
  }

  &::before {
    display: ${({ active }) => (active ? 'block' : 'none')};
    content: '';
    position: absolute;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 0.25rem;
    left: -1rem;
    top: calc(50% - 0.25rem);
    animation-name: blink;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
`;

const Container = styled(Stack)`
  background: ${({ theme }) => theme.appColors.slate[700]};
  position: relative;
  border-radius: 1.5rem;
  padding: 0.25rem 0.75rem 0.25rem 1.75rem;
`;

export const PhaseStatus: FC<Props> = ({ startTime, endTime, href }) => {
  const renderer = ({ hours, days, minutes, completed }: any) => {
    const isLbdDone = getNowUnix() > endTime;
    if (completed)
      return (
        <Text active={!isLbdDone ? 1 : 0} display="flex">
          {!isLbdDone ? 'Live' : 'Ended'}
        </Text>
      );
    return (
      <Text active={0}>
        In {days}d {hours}h {minutes}m
      </Text>
    );
  };

  return (
    <Container direction="row" alignItems={'center'} spacing={0.5}>
      <Countdown date={startTime} renderer={renderer} />
      {href && (
        <Link target="_blank" rel="noopener noreferrer" href={href} sx={{ lineHeight: '0.5rem' }}>
          <ExternalIcon />
        </Link>
      )}
    </Container>
  );
};
