import type { ThemeOptions } from '@mui/material';

export const theme: ThemeOptions = {
  // components: {
  //   MuiCssBaseline: {

  //   }
  // }
  palette: {
    mode: 'light',
    primary: {
      main: 'rgb(35, 35, 35)',
    },
    secondary: {
      main: 'rgb(0, 90, 50)',
    },
    info: {
      main: 'rgb(0, 0, 235)',
    },
  },
  mixins: {
    toolbar: {
      display: 'flex',
      justifyContent: 'flex-start',
    },
  },
};
