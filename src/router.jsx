import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Test from './pages/Test';
import Error404 from './pages/Error404';
import HomeSport from './components/HomeSport';
import Signup from './pages/Signup';
import Login from './pages/Login';

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
    path: '/connexion',
    element: <Login />,
  },
  {
    path: '*',
    element: <Error404 />,
  },
]);

export default router;
