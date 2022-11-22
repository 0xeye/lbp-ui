import { useRef, FC } from 'react';
import { Box, BoxProps } from '@mui/system';
import { useClickAway } from 'react-use';

export const PointerContainer: FC<BoxProps & { onOutside: () => void }> = ({
  children,
  onOutside,
  zIndex,
  ...props
}) => {
  const wrapperRef = useRef(null);
  useClickAway(wrapperRef, onOutside);
  return (
    <Box sx={props.sx} ref={wrapperRef} position="relative" zIndex={zIndex ?? 3}>
      {children}
    </Box>
  );
};
