/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { usePostLoginMutation } from '../../api/usersApi';
import { setUserAsLoggedIn } from '../../slices/authSlice';
import './style.scss';

function LoginMain() {
  const dispatch = useDispatch();

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

  // lorsque la connexion est réussie, on rajoute les informations de l'utilisateur au state de RTK
  // et on stocke le JWT dans le localstorage
  useEffect(() => {
    if (isSuccess && userData) {
      dispatch(setUserAsLoggedIn(userData));
      localStorage.setItem('userJWToken', userData.token);
    }
  }, [dispatch, isSuccess, userData]);

  return (
    <main className="login">
      <h1>Connexion</h1>
      <div className="login-container">
        {!isSuccess
        && (
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="login-email">Email</label>
              <input {...register('username')} type="email" placeholder="Email" id="login-email" />
            </div>
            <div>
              <label htmlFor="login-password">Password</label>
              <input {...register('password')} type="password" placeholder="Mot de passe" id="login-password" />
            </div>
            <div>
              <input className="login-form-button" type="submit" value="Se connecter" />
            </div>
          </form>
        )}
      </div>
      {isLoading
      && <p>Loading...</p>}
      {isError
      && (
      <p>
        Erreur&nbsp;
        {error.originalStatus}
        <br />
        Veuillez réessayer
      </p>
      )}
      {isSuccess
      && <p>Connexion réussie</p>}
    </main>
  );
}

export default LoginMain;
