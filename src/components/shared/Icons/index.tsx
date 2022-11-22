import { FC } from 'react';
import { styled } from '@mui/material';
import { ReactComponent as IconError } from '../../../assets/icons/IconError.svg';
import { ReactComponent as IconPending } from '../../../assets/icons/IconPending.svg';
import { ReactComponent as IconSuccess } from '../../../assets/icons/IconSuccess.svg';
import { ReactComponent as IconClose } from '../../../assets/icons/IconClose.svg';
import { ReactComponent as IconInfo } from '../../../assets/icons/IconInfo.svg';
import { ReactComponent as IconExternal } from '../../../assets/icons/IconExternal.svg';
import { ReactComponent as IconChevron } from '../../../assets/icons/IconChevron.svg';
import { ReactComponent as IconMissing } from '../../../assets/icons/IconMissing.svg';
import { ReactComponent as IconLoading } from '../../../assets/icons/IconLoading.svg';
import { ReactComponent as SpyIcon } from '../../../assets/icons/IconSpy.svg';

export const SuccessIcon = styled(IconSuccess)(({ theme }) => ({
  background: theme.palette.success.main,
  border: `3px solid ${theme.palette.success.main}`,
  borderRadius: `0.75rem`,
  width: `1.5rem`,
  height: `1.5rem`,
}));

export const PendingIcon = styled(IconPending)(({ theme }) => ({
  background: theme.palette.info.main,
  border: `3px solid ${theme.palette.info.main}`,
  borderRadius: `0.75rem`,
  width: `1.5rem`,
  height: `1.5rem`,
}));

export const ErrorIcon = styled(IconError)(({ theme }) => ({
  background: theme.palette.error.main,
  border: `3px solid ${theme.palette.error.main}`,
  borderRadius: `0.75rem`,
  width: `1.5rem`,
  height: `1.5rem`,
}));

export const CloseIcon = styled(IconClose)(({ theme }) => ({
  cursor: 'pointer',
  ' &:hover': {
    opacity: '0.5',
  },
}));

export const ExternalIcon = styled(IconExternal)(({ theme }) => ({
  cursor: 'pointer',
  path: {
    fill: theme.appColors.slate[400],
  },
}));

export const TokenMissingIcon = styled(IconMissing)(({ theme }) => ({
  position: 'relative',
  right: 2,
  bottom: 2,
  background: theme.isDarkMode ? theme.appColors.slate[700] : theme.appColors.gray[200],
  borderRadius: `1rem`,
}));

export const TokenLoadingIcon = styled(IconLoading)(({ theme }) => ({
  background: theme.palette.background.default,
  border: `2px solid ${theme.appColors.slate[600]}`,
  borderRadius: `1rem`,
}));

export const InfoIcon = styled(IconInfo)(({ theme, fill }) => ({
  width: '1rem',
  height: '1rem',
  marginleft: '0.5rem',
  borderRadius: '2rem',
  transition: 'ease-out box-shadow 0.25s',
  fill: fill ?? theme.palette.text.primary,
}));

export const DisconnectIcon = styled(CloseIcon)(({ theme }) => ({
  fill: theme.appColors.slate[400],
  marginRight: '-0.35rem',
  marginLeft: '0.5rem',
  cursor: 'pointer',

  ':hover': {
    fill: theme.appColors.slate[500],
  },
}));

export const ImpersonateIcon = styled(SpyIcon)<{ active: number }>(({ active, theme }) => ({
  fill: theme.appColors.slate[active ? 50 : 400],
  marginRight: '-0.35rem',
  marginLeft: '0.5rem',
  cursor: 'pointer',

  ':hover': {
    fill: theme.appColors.slate[500],
  },
}));

export const StyledChevronIcon = styled(IconChevron)<{ rotate: number }>(({ rotate, theme }) => ({
  width: `1.5rem`,
  height: `1.5rem`,
  transform: `rotate(${rotate}deg)`,
  path: {
    fill: theme.palette.text.primary,
  },
}));

export const ChevronIcon: FC<{ direction?: 'up' | 'down' | 'left' | 'right'; fill?: string }> = ({
  direction = 'right',
  fill,
}) => {
  const rotate = {
    up: -180,
    down: 0,
    right: -90,
    left: 90,
  }[direction];
  return <StyledChevronIcon rotate={rotate} sx={{ fill }} />;
};
