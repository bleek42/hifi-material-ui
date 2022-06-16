import type { AppProps } from 'next/app';
import * as React from 'react';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

import { emotionCache } from '../shared/emotionCache';
import { theme } from '../shared/themes';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../styles/globals.css';

interface EmotionAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideCache = emotionCache();
const currentTheme = createTheme(theme);

function MyApp({ Component, pageProps, emotionCache = clientSideCache }: EmotionAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
