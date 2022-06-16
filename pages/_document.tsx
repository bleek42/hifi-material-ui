import * as React from 'react';
import { NextPageContext } from 'next';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import {
  AppType,
  DocumentContext,
  DocumentInitialProps,
  DocumentProps,
} from 'next/dist/shared/lib/utils';
import { EmotionCache } from '@emotion/cache';

import { emotionCache } from '../shared/emotionCache';
import { theme } from '../shared/themes';

export default class CustomNextDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps | DocumentProps> {
    const origRenderPage = ctx?.renderPage;
    const cache = emotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);
    const initialProps = await Document.getInitialProps(ctx);

    try {
      ctx.renderPage = () =>
        origRenderPage({
          // eslint-disable-next-line react/display-name
          enhanceApp:
            // eslint-disable-next-line react/display-name
            (App: AppType | React.ComponentType<{ emotionCache: EmotionCache }>) => (props) =>
              (
                <App
                  emotionCache={cache}
                  {...props}
                />
              ),
        });

      const emotionStyles = extractCriticalToChunks(initialProps.html);
      const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
          key={style.key}
          data-emotion={`${style.key} ${style.ids.join(' ')}`}
          dangerouslySetInnerHTML={{ __html: style.css }}
        />
      ));

      return {
        ...initialProps,
        styles: [...React.Children.toArray(initialProps.styles), ...emotionStyleTags],
      };
    } catch (err: unknown) {
      return {
        ...initialProps,
        // error: err ? err : 'Error rendering custom styles...'
      };
    } finally {
      console.log(initialProps);
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="theme"
            content={theme.palette?.mode}
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
