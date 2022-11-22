import { FC, MouseEvent } from 'react';
import { Button, styled, SxProps, Theme, Typography } from '@mui/material';

type ButtonColors = 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';

export interface Props {
  className?: any;
  fontSize?: number | string;
  fontWeight?: number | string;
  fontColor?: string;
  color?: string;
  variant?: 'text' | 'contained' | 'outlined';
  disabled?: boolean;
  sx?: SxProps<Theme>;
  rainbow?: boolean;
  onClick?: () => void;
}

const StyledButton = styled(Button)<{ rainbow: number }>(({ rainbow, theme, disabled }) => ({
  background: rainbow ? theme.palette.rainbow.dark : undefined,
  backgroundSize: '250% 250%',
  height: '2.5rem',
  opacity: disabled ? 0.5 : 1,
  cursor: disabled ? 'not-allowed' : 'pointer',
  color: rainbow ? `${theme.appColors.white}` : `${theme.palette.text.primary}`,
  ':hover': {
    opacity: rainbow ? 0.9 : 1,
  },
}));

export const BaseButton: FC<Props> = ({
  className,
  fontSize,
  fontWeight,
  fontColor,
  color,
  sx,
  disabled: _disabled = false,
  rainbow = false,
  variant = 'contained',
  children,
  onClick,
}) => {
  const handleAction = async (event?: MouseEvent<HTMLButtonElement | undefined>) => {
    event?.stopPropagation();
    onClick?.();
  };

  return (
    <StyledButton
      onClick={handleAction}
      color={(color ?? 'primary') as ButtonColors}
      sx={sx}
      variant={variant}
      disabled={_disabled}
      className={className}
      rainbow={+rainbow}
    >
      <Typography
        fontSize={fontSize ?? 16}
        fontWeight={fontWeight ?? 500}
        sx={{ color: theme => `${fontColor ?? theme.palette.text.primary}` }}
      >
        {children}
      </Typography>
    </StyledButton>
  );
};
