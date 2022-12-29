import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Tabs, Tab } from '@material-ui/core';
import { DeveloperMode } from '@material-ui/icons';

import { navTabs } from '../shared/navTabs';
import { NavigationTab } from '../types/nav.props';

import { ElevationScroll } from '../utils/ElevationScroll';

import { useStyles } from '../styles/NavHeader.styles';

const NavHeader = () => {
  const tabIdx = 0;
  const initialState = {
    currentTab: navTabs[tabIdx],
    tabCount: navTabs.length,
  };
  const [currentTab, setCurrentTab] = React.useState(initialState);
  const { classes, cx } = useStyles();

  const changeTab = async (ev: React.SyntheticEvent): Promise<void> => {
    const { key, path, name } = ev.target;
    try {
      await setCurrentTab({ path, name });
      /* eslint-disable */
    } catch {
      console.error('error changing tab...');
    } finally {
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
