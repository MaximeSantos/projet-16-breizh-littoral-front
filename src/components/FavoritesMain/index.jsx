import { useRef } from 'react';
import { useGetFavoritesQuery } from '../../api/favoritesApi';
import { getUserIdFromJWT } from '../../utils/JWT';
import SpotCard from '../HomeMain/MainSpots/SpotCard';
import './style.scss';

function FavoritesMain() {
  const userId = useRef(getUserIdFromJWT());

  const {
    data: spots,
    isFetching,
    isError,
    error,
  } = useGetFavoritesQuery(userId.current);

  let listOfSpots;

  if (spots) {
    listOfSpots = spots.map((spot) => (
      <SpotCard key={spot.id} spot={spot} />
    ));
  }

  return (
    <main className="favorites">
      <div className="favorites-container">
        <h1>Vos spots favoris</h1>
        {isFetching
        && <p>Loading...</p>}
        {isError
        && (
        <>
          <p>{error.status}</p>
          {/* <p>{error.data}</p> */}
        </>
        )}
        {spots
        && listOfSpots}
      </div>
    </main>
  );
}

export default FavoritesMain;
