import type { AppProps } from 'next/app';
import * as React from 'react';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { TssCacheProvider } from 'tss-react';

import { createMuiCache, createTssCache } from '../shared/stylesCache';
import { theme } from '../shared/themes';

import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

interface EmotionAppProps extends AppProps {
  muiCache?: EmotionCache;
  tssCache?: EmotionCache;
}

const muiClientCache = createMuiCache();
const tssClientCache = createTssCache();
const currentTheme = createTheme(theme);

function MyApp({
  Component,
  pageProps,
  muiCache = muiClientCache,
  tssCache = tssClientCache,
}: EmotionAppProps) {
  return (
    <CacheProvider value={muiClientCache}>
      <ThemeProvider theme={currentTheme}>
        <TssCacheProvider value={tssClientCache}>
          <CssBaseline enableColorScheme />
          <Component {...pageProps} />
        </TssCacheProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
