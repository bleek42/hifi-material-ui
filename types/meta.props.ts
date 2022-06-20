import type { ReactNode } from 'react';

export interface MetaProps {
  readonly children: ReactNode;
  readonly title?: string;
  readonly description?: string;
  readonly keywords?: string[] | string;
  readonly siteUrl?: string;
  readonly imgUrl?: string;
}
