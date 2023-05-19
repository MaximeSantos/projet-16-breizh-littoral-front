import { Navigate, Outlet } from 'react-router-dom';
import { checkIfLoggedIn } from './JWT';

function PrivateRoutes() {
  if (checkIfLoggedIn()) {
    return <Outlet />;
  }
  return <Navigate to="/connexion" />;
}

export default PrivateRoutes;
