import { createBrowserRouter } from 'react-router-dom';

import ScrollToTop from './utils/ScrollToTop';
import PrivateRoutes from './utils/PrivateRoutes';
import Error404 from './pages/Error404';
import Test from './pages/Test';
import Home from './pages/Home';
import Sports from './pages/Sports';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Sport from './pages/Sport';
import AddSpot from './pages/AddSpot';
import SpotPage from './pages/Spot';
import UserProfile from './pages/UserProfile';
import Favorites from './pages/Favorites';
import Nous from './pages/Nous';
import Advices from './pages/Advices';
import ContactPage from './pages/ContactPage';
import Admin from './pages/Admin';

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
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/admin',
        element: <Admin />,
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
