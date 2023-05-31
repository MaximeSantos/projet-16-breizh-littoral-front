/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { usePatchUserMutation } from '../../../api/usersApi';

function UserProfileInfo({ user }) {
  const [isEditing, setIsEditing] = useState(false);

  // Champs contrôlés de notre formulaire de modification
  const [pictureUrlValue, setPictureUrlValue] = useState(user.profil_picture);
  const [emailValue, setEmailValue] = useState(user.email);
  const [nicknameValue, setNicknameValue] = useState(user.nickname);
  const [descriptionValue, setDescriptionValue] = useState(user.description);

  const [patchUser] = usePatchUserMutation();

  const {
    register,
    handleSubmit,
  } = useForm();

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const onSubmit = (data) => {
    patchUser({ userId: user.id, data });
    setIsEditing(false);
  };

  return (
    <div className="user_profile-information">
      <h2>
        Informations personnelles
        <button className="button-minimalist" onClick={handleEdit} type="button">{isEditing ? 'Annuler' : 'Modifier'}</button>
      </h2>

      {!isEditing
      && (
        <>
          {(user.profil_picture && user.profil_picture.length !== 0)
          && (
            <div className="user_profile-information-content--picture">
              <img className="user_profile-information-picture" src={user.profil_picture} alt="de Profil" />
            </div>
          )}
          <div className="user_profile-information-content">
            <h3>
              Nom d&apos;utilisateur :
            </h3>
            <p>
              {user.nickname}
            </p>
          </div>
          <div className="user_profile-information-content">
            <h3>
              Email :
            </h3>
            <p>
              {user.email}
            </p>
          </div>
          <div className="user_profile-information-content">
            <h3>
              Description :
            </h3>
            <p>
              {user.description}
            </p>
          </div>
        </>
      )}

      {isEditing
      && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="user_profile-form-picture">
            <label htmlFor="user_profile-picture">Photo de profil (URL uniquement)</label>
            <input
              {...register('profil_picture', { maxLength: 1024 })}
              placeholder="Photo de profil"
              id="user_profile-picture"
              value={pictureUrlValue}
              onChange={(e) => setPictureUrlValue(e.target.value)}
            />
          </div>
          <div className="user_profile-form-username">
            <label htmlFor="user_profile-nickname">Nom d&apos;utilisateur *</label>
            <input
              {...register('nickname', { required: true, minLength: 3, maxLength: 180 })}
              placeholder="Nom d'utilisateur"
              id="user_profile-nickname"
              value={nicknameValue}
              onChange={(e) => setNicknameValue(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="user_profile-email">Email *</label>
            <input
              className="user_profile-form-email"
              {...register('email', { required: true, maxLength: 180 })}
              type="email"
              placeholder="Email"
              id="user_profile-email"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="user_profile-description">Description</label>
            <textarea
              className="user_profile-form-description"
              {...register('description', { maxLength: 1024 })}
              type="description"
              placeholder="Description"
              id="user_profile-description"
              value={descriptionValue}
              onChange={(e) => setDescriptionValue(e.target.value)}
            />
          </div>
          <div className="user_profile-form-buttons_container">
            <input className="button-basic" type="submit" value="Modifier mes informations" />
          </div>
        </form>
      )}
    </div>
  );
}

UserProfileInfo.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    profil_picture: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserProfileInfo;
