import type { AppProps } from 'next/app';
import * as React from 'react';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

import { emotionCache } from '../shared/emotionCache';
import { theme } from '../shared/themes';

import * as robotoFont from '@fontsource/roboto';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

interface EmotionAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideCache = emotionCache();
const currentTheme = createTheme(theme);

function MyApp({ Component, pageProps, emotionCache = clientSideCache }: EmotionAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline enableColorScheme />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
