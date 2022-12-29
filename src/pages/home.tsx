import React, { Fragment } from 'react';
import { Box, Button, Typography } from '@material-ui/core';

const Home = () => {
  return (
    <Fragment>
      <Box>
        <Typography variant="h4">Powered by </Typography>
        <Button
          variant="contained"
          color="secondary"
        >
          Vercel
        </Button>
      </Box>
      <Box>
        {[...new Array(120)].map((elem, idx: number) => (
          // eslint-disable-next-line react/jsx-no-comment-textnodes
          <Typography key={idx}>
            `Lorem ipsum seit amit mattis consectur fermentum, Cras justo odio, dapbius ac
            facilisis. Lorem ipsum seit amit mattis consectur fermentum, Cras justo odio, dapbius ac
            facilisis. Lorem ipsum seit amit mattis consectur fermentum, Cras justo odio, dapbius ac
            facilisis. Lorem ipsum seit amit mattis consectur fermentum, Cras justo odio, dapbius ac
            facilisis. Lorem ipsum seit amit mattis consectur fermentum, Cras justo odio, dapbius ac
            facilisis. Lorem ipsum seit amit mattis consectur fermentum, Cras justo odio, dapbius ac
            facilisis`
          </Typography>
        ))}
      </Box>
    </Fragment>
  );
};

export default Home;
