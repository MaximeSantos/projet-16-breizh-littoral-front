/* eslint-disable jsx-a11y/img-redundant-alt */
import { useRef } from 'react';
import { useGetUserQuery } from '../../api/usersApi';
import { getUserIdFromJWT } from '../../utils/JWT';
import './style.scss';

function UserProfileMain() {
  const userId = useRef(getUserIdFromJWT());

  const {
    data: user,
    isFetching,
    isError,
    error,
  } = useGetUserQuery(userId.current);

  return (
    <main className="user_profile">
      <div className="user_profile-container">
        {isError
          && (
          <p>
            Oups, erreur
            {error.status}
          </p>
          )}
        {isFetching
        && <p>Chargement ...</p>}

        {!isFetching && !isError
        && (
        <>
          <div className="user_profile-information">
            <h2>Informations personnelles</h2>

            {(user.profil_picture && user.profil_picture.length !== 0)
            && <img className="user_profile-information-picture" src={user.profil_picture} alt="Photo de Profil" />}
            <p>
              Nom d&apos;utilisateur :
              <br />
              {user.nickname}
            </p>
            <p>
              Email :
              <br />
              {user.email}
            </p>
          </div>
          <div className="user_profile-sports">
            <h2>Sports pratiqués</h2>
            <ul>
              <li>
                - Kayak
              </li>
              <li>
                - Kung-fu
              </li>
              <li>
                - Luge bordelaise
              </li>
            </ul>
          </div>
          {/* <div className="user_profile-favorites">
            <h2>Vos spots favoris</h2>
            {listOfFavSpots}
            {!listOfFavSpots.length
            && <p>Pas de spot favoris pour le moment</p>}
          </div> */}
          <div className="user_profile-spots">
            <h2>Spots ajoutés</h2>
            <p>Ici bientôt une liste des spots que VOUS avez ajoutés</p>
          </div>
        </>
        )}
      </div>
    </main>
  );
}
export default UserProfileMain;
