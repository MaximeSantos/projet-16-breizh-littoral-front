import { useGetSpotsQuery } from '../../../api/spotsApi';

import SpotCard from './SpotCard';

import './style.scss';

function MainSpots() {
  const {
    data: spots,
    isFetching,
    isError,
    error,
  } = useGetSpotsQuery();

  // console.log(spots, isFetching, isError);
  let listOfSpots;

  if (spots) {
    listOfSpots = spots.map((spot) => (
      <SpotCard key={spot.id} spot={spot} />
    ));
  }

  return (
    <>
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
    </>

  );
}

export default MainSpots;
