import { AppBar, Toolbar } from '@mui/material';

import { ElevationScroll } from '../utils/ElevationScroll';

const NavHeader = () => {
  return (
    <ElevationScroll>
      <AppBar position="fixed">
        <Toolbar>BLeek.Tech Consulting</Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default NavHeader;
