import { useMedia } from 'react-use';
import { defaultTheme } from '../styles/defaultTheme';

export const useIsMinWidth = (minWidth = defaultTheme.breakpoints.values.lg) =>
  useMedia(`(min-width: ${minWidth}px)`);
