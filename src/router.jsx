import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Test from './pages/Test';
import Error404 from './pages/Error404';
import Sports from './pages/Sports';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Sport from './pages/Sport';
import AddSpot from './pages/AddSpot';
import SpotPage from './pages/Spot';
import PrivateRoutes from './utils/PrivateRoutes';
import UserProfile from './pages/UserProfile';
import Favorites from './pages/Favorites';
import Nous from './pages/Nous';
import Advices from './pages/Advices';
import ScrollToTop from './utils/ScrollToTop';

const router = createBrowserRouter([
  {
    element: <ScrollToTop />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/sports',
        element: <Sports />,
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
        element: <Sport />,
      },
      {
        path: '/spot/:spotId',
        element: <SpotPage />,
      },
      {
        path: '/nous',
        element: <Nous />,
      },
      {
        path: '/conseils',
        element: <Advices />,
      },
      {
        path: '*',
        element: <Error404 />,
      },
      // On ne pourra accéder à ces routes que si l'on est connecté,
      // Sinon on est renvoyé vers une page de connexion
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: '/test',
            element: <Test />,
          },
          {
            path: '/ajouter',
            element: <AddSpot />,
          },
          {
            path: '/profil',
            element: <UserProfile />,
          },
          {
            path: '/favoris',
            element: <Favorites />,
          },
        ],
      },
    ],
  },
]);

export default router;
