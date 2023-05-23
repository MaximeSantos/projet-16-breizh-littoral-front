/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { usePostNewUserMutation } from '../../api/usersApi';

import './style.scss';

function SignupMain() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // Hook de react-hook-form pour créer le formulaire
  const {
    register,
    handleSubmit,
  } = useForm();

  // Mutation de RTK Query pour permettre de gérer la requête en POST
  const [postNewUser, {
    isLoading,
    isError,
    isSuccess,
    result,
  }] = usePostNewUserMutation();

  // Lorsque le formulaire est soumis, on déclenche l'appel API avec les données soumises
  const onSubmit = (data) => postNewUser(data);

  if (isLoggedIn) {
    return <Navigate replace to="/" />;
  }

  return (
    <main className="signup">
      <h1 className="signup-title">
        Inscription
      </h1>
      <div className="signup-form_container">
        {!isSuccess
        && (
          <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="signup-form-picture">
              <input {...register('profil_picture')} placeholder="Photo de profil" />
            </div>
            <div className="signup-form-username">
              <input {...register('nickname')} placeholder="Nom d'utilisateur" />
              *
            </div>
            <div>
              <input className="signup-form-email" {...register('email')} type="email" placeholder="Email" />
              *
            </div>
            <div className="signup-form-password">
              <input {...register('password')} type="password" placeholder="Mot de passe" />
              *
            </div>
            <div className="signup-form-description">
              <input {...register('description')} type="textarea" placeholder="Description" />
            </div>
            <input className="signup-form-button" type="submit" value="S'inscrire" />
          </form>
        )}

        {isLoading
        && <p>Loading ...</p>}

        {isError
        && <p>Erreur lors de l&apos;inscription</p>}

        {result}

        {isSuccess
        && (
          <>
            <p>Félicitation, vous êtes inscrit !</p>
            <Link className="signup-success-connection" to="/connexion">
              Connectez-vous !
            </Link>
          </>
        )}
      </div>
    </main>
  );
}

export default SignupMain;
