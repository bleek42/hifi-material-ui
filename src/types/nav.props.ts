export enum HrefEnum {
  '/' = 0,
  '/about' = 1,
  '/services' = 2,
  '/contact' = 3
}

export interface NavigationTab {
  idx: typeof HrefEnum[keyof typeof HrefEnum];
  href: keyof typeof HrefEnum;
  name: 'home' | 'about' | 'services' | 'contact';
}