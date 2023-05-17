/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { usePostNewUserMutation } from '../../api/usersApi';

import './style.scss';

function SignupMain() {
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
  }] = usePostNewUserMutation();

  // Lorsque le formulaire est soumis, on déclenche l'appel API avec les données soumises
  const onSubmit = (data) => postNewUser(JSON.stringify(data));

  return (
    <main className="signup">
      <h1 className="signup-title">
        Inscription
      </h1>
      <div className="signup-form_container">
        {!isSuccess
        && (
          <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input className="signup-form-email" {...register('email')} type="email" placeholder="Email" />
            </div>
            <div className="signup-form-password">
              <input {...register('password')} type="password" placeholder="Mot de passe" />
            </div>
            <div className="signup-form-picture">
              <input {...register('profil_picture')} placeholder="Photo de profil" />
            </div>
            <div className="signup-form-username">
              <input {...register('username')} placeholder="Nom d'utilisateur" />
            </div>
            <div className="signup-form-firstname">
              <input {...register('firstname')} placeholder="Prénom" />
            </div>
            <div className="signup-form-lastname">
              <input {...register('lastname')} placeholder="Nom de famille" />
            </div>
            <div className="signup-form-location">
              <input {...register('location')} placeholder="Ville" />
            </div>
            <div className="signup-form-birthdate">
              <input {...register('birth_date')} type="date" placeholder="Date de naissance" />
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
