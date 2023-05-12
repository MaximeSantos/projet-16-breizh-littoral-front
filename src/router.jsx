import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Test from './pages/Test';
import Error404 from './pages/Error404';
import HomeSport from './components/HomeSport';
import SecurityPage from './pages/SecurityPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/test',
    element: <Test />,
  },
  {
    path: '/sports',
    element: <HomeSport />,
  },
  {
    path: '/conseils',
    element: <SecurityPage />,
  },
  {
    path: '*',
    element: <Error404 />,
  },
]);

export default router;
