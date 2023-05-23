import { useGetSportsQuery } from '../../api/sportsApi';
import SportCard from './SportCard';

import './style.scss';

function SportsMain() {
  const {
    data: sports,
  } = useGetSportsQuery();
  let listOfSports;
  if (sports) {
    listOfSports = sports.map((sport) => (
      <SportCard key={sport.id} sport={sport} />
    ));
  }

  return (
    <main className="sports">
      <h1>Liste des sports</h1>
      <div className="sports-container">
        {sports
      && listOfSports}
      </div>
    </main>
  );
}

export default SportsMain;
