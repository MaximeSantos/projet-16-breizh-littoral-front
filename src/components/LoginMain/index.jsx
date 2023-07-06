/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { usePostLoginMutation } from '../../api/usersApi';
import { setUserAsLoggedIn } from '../../slices/authSlice';

import './style.scss';

function LoginMain() {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const {
    register,
    handleSubmit,
  } = useForm();

  const [postLogin, {
    isLoading,
    isError,
    isSuccess,
    error,
    data: userData,
  }] = usePostLoginMutation();

  const onSubmit = (data) => {
    postLogin(data);
  };

  // lorsque la connexion est réussie, on stocke le JWT dans le localstorage
  useEffect(() => {
    if (isSuccess && userData) {
      localStorage.setItem('BZLuserJWToken', userData.token);
      dispatch(setUserAsLoggedIn());
    }
  }, [dispatch, isSuccess, userData]);

  if (isLoggedIn) {
    return <Navigate replace to="/" />;
  }

  return (
    <main className="login">
      {!isLoggedIn
      && (
      <>
        <h1>Connexion</h1>
        <div className="login-container">
          {!isSuccess
          && (
            <>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor="login-email">Email</label>
                  <input {...register('username', { required: true, maxLength: 180 })} type="email" placeholder="Email" id="login-email" />
                </div>
                <div>
                  <label htmlFor="login-password">Mot de passe</label>
                  <input {...register('password', { required: true, maxLength: 1024 })} type="password" placeholder="Mot de passe" id="login-password" />
                </div>
                <div>
                  <input className="button-basic" type="submit" value="Se connecter" />
                </div>
              </form>
              <h2 className="login-title">
                Si vous n&apos;êtes pas encore inscrit ...&nbsp;
                <Link className="link-basic" to="/inscription">
                  inscrivez-vous !
                </Link>
              </h2>
            </>
          )}
        </div>
        {isLoading
        && <p>Loading...</p>}
        {isError
        && (
        <p>
          Erreur&nbsp;
          {/* error.data.code */}
          <br />
          {error.data.message}
          <br />
          Veuillez réessayer
        </p>
        )}
      </>
      )}
    </main>
  );
}

export default LoginMain;
