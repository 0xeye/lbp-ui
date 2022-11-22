import { Stack, styled, Typography } from '@mui/material';
import React, { FC } from 'react';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { formatValue } from '../../../utils';

const SwitchIcon = styled(ChangeCircleIcon)<{ selected: number }>(({ selected, theme }) => ({
  width: 22,
  height: 22,
  transform: selected ? 'rotate(180deg)' : 'rotate(0deg)',
  fill: theme.appColors.slate[400],
  transition: 'transform 0.4s ease',
  cursor: 'pointer',
}));

export const AuraValue: FC<{
  valueUsd?: number;
  valueWeth: number;
  showWeth: boolean;
  onSwitch: () => void;
}> = ({ valueUsd, valueWeth, showWeth, onSwitch }) => {
  const formattedWeth = formatValue(valueWeth, { mantissa: 6, postfix: ' WETH' });
  const formattedUsd =
    valueUsd && formatValue(valueUsd, { average: false, mantissa: 2, prefix: '$ ' });

  return (
    <Stack position={'relative'} direction={'row'} spacing={0.5}>
      <Typography fontSize={16} fontWeight={500}>
        {!!formattedUsd ? (showWeth ? formattedWeth : formattedUsd) : formattedWeth}
      </Typography>
      {!!valueUsd && (
        <SwitchIcon
          selected={+showWeth}
          onClick={() => {
            onSwitch();
          }}
        />
      )}
    </Stack>
  );
};
