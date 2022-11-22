import { FC } from 'react';
import { CircularProgress, Stack, StackProps, Typography } from '@mui/material';
import { formatValue } from '../../../utils';
import { InfoIcon } from '../Icons';

interface Props extends StackProps {
  rate?: number;
  mantissa?: number;
  symbols: (string | undefined)[];
}

export const ExchangeRate: FC<Props> = ({
  rate,
  mantissa = 4,
  symbols,
  color,
  fontSize,
  ...props
}) => {
  const [inSymbol, outSymbol] = symbols;
  const isFetching = inSymbol && outSymbol && !rate;
  const formatted =
    (rate &&
      formatValue(rate, {
        mantissa,
        postfix: ` ${inSymbol}`,
        prefix: `1 ${outSymbol} = `,
        average: false,
        thousandSeparated: true,
      })) ||
    undefined;
  return (
    <Stack {...props} direction="row" spacing={1} alignItems="center" justifyContent="center">
      {isFetching ? <CircularProgress size={'1rem'} /> : <InfoIcon sx={{ fill: color }} />}
      <Typography fontSize={fontSize ?? '0.875rem'} color={color}>
        {isFetching ? `Fetching exchange rate…` : formatted}
      </Typography>
    </Stack>
  );
};
