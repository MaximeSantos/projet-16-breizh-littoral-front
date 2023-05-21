import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Test from './pages/Test';
import Error404 from './pages/Error404';
import HomeSport from './components/HomeSport';
import Signup from './pages/Signup';
import Login from './pages/Login';
import SportPage from './pages/SportPage';
import AddNewSpot from './pages/AddNewSpot';
import SpotPage from './pages/SpotPage';
import PrivateRoutes from './utils/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
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
    path: '/sports/:sportId',
    element: <SportPage />,
  },
  {
    path: '/spot/:spotId',
    element: <SpotPage />,
  },
  {
    path: '/ajouter',
    element: <AddNewSpot />,
  },
  {
    path: '*',
    element: <Error404 />,
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: '/test',
        element: <Test />,
      },
    ],
  },
]);

export default router;
