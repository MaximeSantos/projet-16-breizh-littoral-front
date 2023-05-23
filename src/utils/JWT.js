// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';

export const checkIfLoggedIn = () => {
  if (localStorage.getItem('BZLuserJWToken')) {
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
