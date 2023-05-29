import { useGetFavoritesQuery } from '../../api/favoritesApi';
import SpotCard from '../HomeMain/MainSpots/SpotCard';
import './style.scss';

function FavoritesMain() {
  const {
    data: spots,
    isLoading,
    isError,
    error,
  } = useGetFavoritesQuery();

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
        {isLoading
        && <p>Loading...</p>}
        {isError
        && (
        <>
          <p>{error.status}</p>
          {/* <p>{error.data}</p> */}
        </>
        )}
        <div className="cards-container">
          {spots
          && listOfSpots}
          {(listOfSpots === undefined || listOfSpots.length === 0)
          && <p>Vous n&apos;avez pas encore de spots favoris !</p>}
        </div>
      </div>
    </main>
  );
}

export default FavoritesMain;
