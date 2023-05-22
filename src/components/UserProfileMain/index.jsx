import { useRef } from 'react';
import { useGetUserQuery } from '../../api/usersApi';
import { getUserIdFromJWT } from '../../utils/JWT';
import SpotCard from '../HomeMain/MainSpots/SpotCard';
import './style.scss';

function UserProfileMain() {
  const userId = useRef(getUserIdFromJWT());
  const {
    data: user,
    isFetching,
    isError,
    error,
  } = useGetUserQuery(userId.current);
  console.log(user);

  let listOfFavSpots;

  if (user.spot_fav) {
    listOfFavSpots = user.spot_fav.map((spot) => (
      <SpotCard key={spot.id} spot={spot} />
    ));
  }

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
            <h2>Vos informations personnelles</h2>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src={user.profil_picture} alt="Photo de Profil" />
            <p>
              Prénom :
              <br />
              {user.firstname}
            </p>
            <p>
              Nom :
              <br />
              {user.lastname}
            </p>
            <p>
              Email :
              <br />
              {user.email}
            </p>
          </div>
          <div className="user_profile-sports">
            <h2>Vos sports pratiqués</h2>
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
          <div className="user_profile-favorites">
            <h2>Vos spots favoris</h2>
            {listOfFavSpots}
            {!listOfFavSpots.length
            && <p>Pas de spot favoris pour le moment</p>}
          </div>
          <div className="user_profile-spots">
            <h2>Vos spots ajoutés</h2>
            <p>Ici une liste bientôt, peut être jamais, des spots créés par VOUS</p>
          </div>
        </>
        )}
      </div>
    </main>
  );
}
export default UserProfileMain;
