/* eslint-disable jsx-a11y/img-redundant-alt */
import { useRef } from 'react';
import { useGetUserQuery } from '../../api/usersApi';
import { getUserIdFromJWT } from '../../utils/JWT';
import './style.scss';
import UserProfileInfo from './UserProfileInfo';

function UserProfileMain() {
  const userId = useRef(getUserIdFromJWT());

  const {
    data: user,
    isLoading,
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
        {isLoading
        && <p>Chargement ...</p>}

        {!isLoading && !isError
        && (
        <>
          <UserProfileInfo user={user} />
          {/* <div className="user_profile-sports">
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
          </div> */}
          {/* <div className="user_profile-favorites">
            <h2>Vos spots favoris</h2>
            {listOfFavSpots}
            {!listOfFavSpots.length
            && <p>Pas de spot favoris pour le moment</p>}
          </div> */}
          {/* <div className="user_profile-spots">
            <h2>Spots ajoutés</h2>
            <p>Ici bientôt une liste des spots que VOUS avez ajoutés</p>
          </div> */}
        </>
        )}
      </div>
    </main>
  );
}
export default UserProfileMain;
