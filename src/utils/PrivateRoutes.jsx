import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoutes() {
  let auth = { userJWToken: '' };
  if (localStorage.getItem('userJWToken')) {
    auth = { userJWToken: localStorage.getItem('userJWToken') };
  }
  return (
    auth.userJWToken ? <Outlet /> : <Navigate to="/connexion" />
  );
}

export default PrivateRoutes;
