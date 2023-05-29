// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';

export const checkIfTokenExpired = () => {
  const JWT = localStorage.getItem('BZLuserJWToken');
  const { exp } = jwt_decode(JWT);
  // Pour éviter des soucis de latence, on rafraichit le token d'une minute
  const expirationTime = (exp * 1000) - 60000;
  if (Date.now() >= expirationTime) {
    return true;
  }
  return false;
};

export const checkIfLoggedIn = () => {
  if (localStorage.getItem('BZLuserJWToken') && !checkIfTokenExpired()) {
    return true;
  }
  return false;
};

export const getJWTFromLocalStorage = () => {
  if (checkIfLoggedIn()) {
    const JWT = localStorage.getItem('BZLuserJWToken');
    return JWT;
  }
  return null;
};

export const getUserIdFromJWT = () => {
  if (checkIfLoggedIn()) {
    const JWT = localStorage.getItem('BZLuserJWToken');
    const decodedJWT = jwt_decode(JWT);
    return decodedJWT.id;
  }
  return null;
};
