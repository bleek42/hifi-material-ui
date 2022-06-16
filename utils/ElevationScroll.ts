import * as React from 'react';
import { useScrollTrigger } from '@mui/material';

interface ElevationScrollProps {
  children: React.ReactElement;
  window?: Window;
}

export const ElevationScroll = ({ children, window }: ElevationScrollProps) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};
