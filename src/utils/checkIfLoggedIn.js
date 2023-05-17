const checkIfLoggedIn = () => {
  if (localStorage.getItem('userJWToken')) {
    return true;
  }
  return false;
};

export default checkIfLoggedIn;
