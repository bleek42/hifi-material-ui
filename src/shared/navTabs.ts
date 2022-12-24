import { HrefEnum, NavigationTab } from '../../types/nav.props';

export const navTabs: NavigationTab[] = [
  {
    idx: HrefEnum['/'],
    href: '/',
    name: 'home',
  },
  {
    idx: HrefEnum['/about'],
    href: '/about',
    name: 'about',
  },
  {
    idx: HrefEnum['/services'],
    href: '/services',
    name: 'services',
  },
  {
    idx: HrefEnum['/contact'],
    href: '/contact',
    name: 'contact',
  },
];
