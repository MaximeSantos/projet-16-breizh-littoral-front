import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useGetSpotsQuery } from '../../../api/spotsApi';

import SpotCard from './SpotCard';

import './style.scss';

function MainSpots() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const {
    data: spots,
    isFetching,
    isError,
    error,
  } = useGetSpotsQuery();

  let listOfSpots;

  if (spots) {
    listOfSpots = spots.map((spot) => (
      <SpotCard key={spot.id} spot={spot} />
    ));
  }

  return (
    <div className="cards">
      <h2 className="cards-title">Liste des spots</h2>
      <div className="cards-container">
        {isFetching
        && <p>Loading...</p>}
        {isError
        && (
        <>
          <p>{error.status}</p>
          <p>{error.data}</p>
        </>
        )}
        {spots
        && listOfSpots}
      </div>
      <div>
        {!isLoggedIn
        && (
        <h2 className="cards-title">
          Si ça vous a plu, n&apos;hésitez plus et&nbsp;
          <Link className="link-basic" to="/inscription">inscrivez-vous</Link>
          &nbsp;pour partager vos spots préférés !
        </h2>
        )}
        {isLoggedIn
        && (
        <h2 className="cards-title">
          Si ça vous a plu, prenez un instant pour&nbsp;
          <Link className="link-basic" to="/ajouter">partagez avec nous</Link>
          &nbsp;vos spots préférés !
        </h2>
        )}
      </div>
    </div>

  );
}

export default MainSpots;
