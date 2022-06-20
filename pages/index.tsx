import type { NextPage } from 'next';

import Link from 'next/link';
import Image from 'next/image';
import { Button, Typography } from '@mui/material';

import Meta from '../components/Meta';

const Home: NextPage = () => {
  return (
    <>
      <Meta
        title="Next/TS/matUI App Home"
        description="Home section of my Next.js, TypeScript, Material UI app"
        keywords={[
          'Brandon',
          'Leek',
          'bleek',
          'Web',
          'Developer',
          'Salesman',
          'Wireless',
          'Consumer Electronics',
          'Verizon',
          'Manahawkin',
          'New Jersey',
          'Philadelphia',
          'Philly',
          'North Carolina',
          'HTML',
          'CSS',
          'JavaScript',
          'NodeJS',
          'React',
          'React Native',
          'TypeScript',
          'NextJS',
          'Material UI',
          'matUI',
          'UI',
          'user interfaces',
          'web apps',
          'mobile apps',
          'programming',
        ]}
      >
        <Typography variant="h4">Powered by </Typography>
        <Button
          variant="contained"
          color="secondary"
        >
          <Link
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={72}
              height={16}
            />
          </Link>
        </Button>
        <div>
          {[...new Array(120)].map((elem, idx: number) => (
            // eslint-disable-next-line react/jsx-no-comment-textnodes
            <Typography key={idx}>
              `Lorem ipsum seit amit mattis consectur fermentum, Cras justo odio, dapbius ac
              facilisis. Lorem ipsum seit amit mattis consectur fermentum, Cras justo odio, dapbius
              ac facilisis. Lorem ipsum seit amit mattis consectur fermentum, Cras justo odio,
              dapbius ac facilisis. Lorem ipsum seit amit mattis consectur fermentum, Cras justo
              odio, dapbius ac facilisis. Lorem ipsum seit amit mattis consectur fermentum, Cras
              justo odio, dapbius ac facilisis. Lorem ipsum seit amit mattis consectur fermentum,
              Cras justo odio, dapbius ac facilisis`
            </Typography>
          ))}
        </div>
      </Meta>
    </>
  );
};

export default Home;
