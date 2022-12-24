import Head from 'next/head';

import type { MetaProps } from '../../types/meta.props';

import NavHeader from './NavHeader.component';
import Footer from './Footer.component';

const Meta = ({ children, title, description, keywords, siteUrl, imgUrl }: MetaProps) => {
  console.log({ metaProps: { title, description, keywords, siteUrl, imgUrl } });
  return (
    <>
      <Head>
        <title>{title || 'MyReactNextTSmUIapp'}</title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
        <meta
          name="author"
          content="bleek42"
        />
        <meta
          name="description"
          content={
            description ||
            'This is my web application that I made with React, NextJS, TypeScript, Material UI, and Emotion'
          }
        />
        <meta
          name="keywords"
          content={keywords?.toString()}
        />
        <meta
          name="subtitle"
          content="some subtitle"
        />
        <meta
          name="og:title"
          content={title || 'og:title goes here'}
        />
        <meta
          name="og:type"
          content="admin"
        />
        <meta
          name="og:url"
          content={siteUrl || 'http://localhost:3000'}
        />
        <meta
          property="og:image"
          content={imgUrl || 'http://localhost:3000/path/to/img.png'}
        />
        <meta
          name="og:site_name"
          content="mynexttsmuiapp.dev"
        />
        <meta
          name="og:description"
          content={description}
        />
      </Head>
      <header>
        <NavHeader />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Meta;
