/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { usePostLoginMutation } from '../../api/usersApi';
import './style.scss';

function LoginMain() {
  const {
    register,
    handleSubmit,
  } = useForm();

  const [postLogin, {
    isLoading,
    isError,
    isSuccess,
    error,
  }] = usePostLoginMutation();

  const onSubmit = (data) => {
    postLogin(data);
  };

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
