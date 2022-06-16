import { makeStyles, ThemeInput } from '@mui/material';
import { theme } from '../shared/themes';

export const useStyles = makeStyles((theme: ThemeInput) => ({
  ...theme.mixins?.toolbar,
  navBar: {
    marginLeft: 'auto',
    padding: '6px',
  },
  navTab: {
    fontWeight: 500,
    fontSize: '1rem',
    margin: '6px',
  },
  tabIcon: {
    width: '2rem',
    height: '2rem',
    minWidth: '10px',
    minHeight: '6px',
  },
}));
