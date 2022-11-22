import { Stack, StackProps, styled, Typography } from '@mui/material';
import { FC } from 'react';

interface Props extends StackProps {
  title: string;
  value?: string;
}

const Title = styled(Typography)`
  font-weight: 400;
  font-size: 1rem;
  color: ${({ theme }) => theme.appColors.slate[400]};
`;

const Value = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: 500;
  font-size: 1rem;
`;

export const PhaseStat: FC<Props> = ({ title, value, children, ...props }) => (
  <Stack {...props}>
    <Title>{title}</Title>
    {!!value && <Value>{value}</Value>}
    {children}
  </Stack>
);
