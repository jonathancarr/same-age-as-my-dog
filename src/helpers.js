import { useMedia } from './hooks'
import { SMALL_SCREEN } from './constants';

export const isMobile = () => useMedia(
  [`(max-width: ${SMALL_SCREEN})`],
  [true],
  false
);