import * as Routes from 'pages';
import URLS from './urls';

const routes: {path: string; component: React.ReactNode; exact: Boolean}[] = [
  {
    path: URLS.ROUTE_HOME,
    component: Routes.Home,
    exact: true,
  },
];

export default routes;
