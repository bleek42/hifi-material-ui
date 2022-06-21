import * as React from 'react';
import { Box, Typography } from '@mui/material';

import type { NextPage } from 'next';

import Meta from '../components/Meta.component';

const Services: NextPage = () => {
  return (
    <>
      <Meta>
        <Box>
          <Typography variant="h4">Services Page</Typography>
        </Box>
      </Meta>
    </>
  );
};

export default Services;
