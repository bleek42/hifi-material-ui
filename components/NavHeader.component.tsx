import * as React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Tabs, Tab } from '@mui/material';
import { DeveloperMode } from '@mui/icons-material';

import { navTabs } from '../shared/navTabs';
import { HrefEnum, NavigationTab } from '../types/nav.props';

import { ElevationScroll } from '../utils/ElevationScroll';

import { useStyles } from '../styles/NavHeader.styles';

const NavHeader = () => {
  const initialState = navTabs[0];
  const [currentTab, setCurrentTab] = React.useState(initialState);
  const { classes, cx } = useStyles();

  const changeTab = async (ev: React.SyntheticEvent, newTab: NavigationTab): Promise<void> => {
    const { idx, href, name } = newTab;
    try {
      await setCurrentTab({ idx, href, name });
      /* eslint-disable */
    } 
    catch {
      console.error('error changing tab...');
    } 
    finally {
      console.info(ev);
    }
    /* eslint-enable */
  };

  return (
    <ElevationScroll>
      <AppBar
        className={classes.navBar}
        position="fixed"
      >
        <Toolbar>
          <DeveloperMode /> BLeek.Tech Consulting
        </Toolbar>
        <Tabs
          variant="fullWidth"
          className={classes.navTabContainer}
          value={currentTab.idx}
          onChange={changeTab}
          aria-label="navigation header bar tabs"
        >
          {navTabs.map((navTab) => (
            <Link
              key={navTab.idx}
              href={navTab.href}
              passHref={true}
            >
              <Tab
                className={classes.navTabItem}
                label={navTab.name}
                href={navTab.href}
              />
            </Link>
          ))}
        </Tabs>
      </AppBar>
    </ElevationScroll>
  );
};

export default NavHeader;
