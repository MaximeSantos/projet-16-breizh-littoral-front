import './style.scss';
import { useParams } from 'react-router-dom';
import { useGetSportQuery } from '../../../api/sportsApi';

function Sport() {
  const { sportId } = useParams();
  const {
    data: sport,
  } = useGetSportQuery(sportId);

  return (
    <div>
      {sport
        && (
          <main>
            <div className="left-sport">
              <h1 className="left-sport-h1">
                {sport.name}
              </h1>
              <img className="left-sport-picture" src={sport.picture} alt={`Spot ${sport.name}`} />
              <h2 className="left-sport-h2"> Description </h2>
              <p className="left-sport-p">
                {sport.description}
              </p>
              <h2 className="left-sport-h2"> Equipement </h2>
              <p className="left-sport-p">
                {sport.equipment}
              </p>
            </div>
          </main>
        )}
    </div>
  );
}

export default Sport;
