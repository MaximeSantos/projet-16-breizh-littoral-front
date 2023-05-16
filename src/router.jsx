import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Test from './pages/Test';
import Error404 from './pages/Error404';
import HomeSport from './components/HomeSport';
import Signup from './pages/Signup';

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
    path: '/inscription',
    element: <Signup />,
  },
  {
    path: '*',
    element: <Error404 />,
  },
]);

export default router;
