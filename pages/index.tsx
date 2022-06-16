import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Button, Typography } from '@mui/material';

import Heading from '../components/Heading';

const Home: NextPage = () => {
  return (
    <div>
      <Heading />
      {[...new Array(120)]
        .map(
          () =>
            'Lorem ipsum seit amit mattis consectur fermentum, Cras justo odio, dapbius ac facilisis. Lorem ipsum seit amit mattis consectur fermentum, Cras justo odio, dapbius ac facilisis. Lorem ipsum seit amit mattis consectur fermentum, Cras justo odio, dapbius ac facilisis. Lorem ipsum seit amit mattis consectur fermentum, Cras justo odio, dapbius ac facilisis. Lorem ipsum seit amit mattis consectur fermentum, Cras justo odio, dapbius ac facilisis. Lorem ipsum seit amit mattis consectur fermentum, Cras justo odio, dapbius ac facilisis.'
        )
        .join('\n')}
      <main>
        {/* <Typography variant="h3">
          Welcome to <a href="https://nextjs.org">Next.js with Material UI & TypeScript!</a>
        </Typography>

        <Typography variant="subtitle1">Get started by editing pages/index.tsx</Typography> */}

        {/* <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs"
            className={styles.card}
          >
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className={styles.card}
          >
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div> */}
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Button variant="contained">
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={72}
              height={16}
            />
          </Button>
        </a>
      </footer>
    </div>
  );
};

export default Home;
