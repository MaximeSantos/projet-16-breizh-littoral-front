import SportCard from './SportCard';
import './style.scss';
import { useGetSportsQuery } from '../../../api/sportsApi';

function MainSport() {
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
    <div className="sport-container">
      {sports
    && listOfSports}
    </div>
  );
}

export default MainSport;
