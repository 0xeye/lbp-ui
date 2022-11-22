import { FC } from 'react';
import { Box, styled, Typography } from '@mui/material';

export const RainbowTypographyBase = styled(Typography)(({ theme }) => ({
  position: 'relative',
  background: theme.isDarkMode
    ? theme.palette.rainbow.main
    : (theme.appColors.rainbowDark as string),
  backgroundSize: '150% 150%',
  backgroundClip: 'text',
  textFillColor: 'transparent',
}));

const RainbowTextGlow = styled(RainbowTypographyBase)({
  position: 'absolute',
  top: 0,
  backgroundClip: 'text',
  textFillColor: 'solid',
  filter: 'blur(12px)',
});

export const RainbowTypography: FC<{
  fontSize: number;
  fontWeight?: number;
  noGlow?: boolean;
}> = ({ children, noGlow, fontSize, fontWeight = 500 }) => {
  const style = { fontSize, fontWeight };
  return (
    <Box position={'relative'}>
      <RainbowTypographyBase zIndex={1} {...style}>
        {children}
      </RainbowTypographyBase>
      {!noGlow && <RainbowTextGlow {...style}>{children}</RainbowTextGlow>}
    </Box>
  );
};
