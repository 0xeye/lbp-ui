import { FC } from 'react';
import { Box, Stack, styled, Typography } from '@mui/material';
import { PhaseStatus } from './PhaseStatus';

interface Props {
  title?: string;
  subtitle?: string;
  startTime?: number;
  endTime?: number;
  href?: string;
  token?: {
    address: string;
    symbol: string;
  };
}

const Heading = styled(Typography)`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.text.primary};

  p {
    height: inherit;
  }

  > span {
    color: ${({ theme }) => theme.appColors.slate[400]};
  }
`;

const Header = styled(Box)`
  display: flex;
  padding: 1rem 0.25rem;
`;

const Container = styled(Box)`
  background: ${({ theme }) => theme.appColors.slate[800]};
  padding: 0 1rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 0px 1px ${({ theme }) => theme.appColors.slate[700]};
`;

export const PhaseCard: FC<Props> = ({
  children,
  title,
  subtitle,
  startTime,
  endTime,
  href,
  token,
}) => (
  <Container>
    <Header>
      <Stack justifyContent="space-between" alignItems="center" direction="row" flex={1}>
        <Stack direction="row">
          <Heading>
            {!!title && title} {!!subtitle && <span>{subtitle}</span>}
          </Heading>
        </Stack>
        <Stack direction={'row'} alignItems={'center'} justifyContent="center">
          {!!startTime && !!endTime && (
            <PhaseStatus startTime={startTime} endTime={endTime} href={href} />
          )}
        </Stack>
      </Stack>
    </Header>
    {children}
  </Container>
);
