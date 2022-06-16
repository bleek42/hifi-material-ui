import type { ReactNode } from 'react';
import type { SvgIconComponent } from '@mui/icons-material';

export interface MetaProps {
  readonly children: ReactNode;
  readonly title?: string;
  readonly description?: string;
  readonly keywords?: string[] | string;
  readonly siteUrl?: URL | string;
  readonly imgUrl?: URL | string;
}
