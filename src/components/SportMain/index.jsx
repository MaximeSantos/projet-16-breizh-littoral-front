import { useParams } from 'react-router-dom';
import { useGetSportQuery } from '../../api/sportsApi';

import './style.scss';

function SportMain() {
  const { sportId } = useParams();
  const {
    data: sport,
  } = useGetSportQuery(sportId);

  return (
    <main className="sport_page">
      {sport
      && (
        <div className="sport_page-info">
          <h1>
            {sport.name}
          </h1>
          <img className="sport_page-picture" src={sport.picture} alt={`Spot ${sport.name}`} />
          <h2> Description </h2>
          <p>
            {sport.description}
          </p>
          <h2> Equipement </h2>
          <p>
            {sport.equipment}
          </p>
          <h2>Conseils</h2>
          <p>
            {sport.advices}
          </p>
        </div>
      )}
    </main>
  );
}

export default SportMain;
