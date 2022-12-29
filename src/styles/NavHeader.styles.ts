import { theme } from '../shared/themes';
import NavHeader from '../components/NavHeader.component';

export const useStyles = makeStyles({ name: { NavHeader } })(
  (theme: Theme, _params: void, _classes: Record<never, string>) => ({
    navBar: {
      marginLeft: 'auto',
      padding: '6px',
    },
    navTabContainer: {
      fontWeight: 500,
      fontSize: '1rem',
      margin: '6px',
    },
    navTabItem: {
      width: '1rem',
      height: '1rem',
    },
    tabIcon: {
      width: '2rem',
      height: '2rem',
      minWidth: '10px',
      minHeight: '6px',
    },
  })
);
