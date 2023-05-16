import './style.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function SportCard({ sport }) {
  return (
    <Link to={`${sport.id}`}>
      <div className="sport">
        <button type="button">
          <div className="sport-card">
            <img className="card-header-picture" src={sport.picture} alt={`Spot ${sport.name}`} />
            <p className="sport-description">{(sport.description).substring(0, 50)}</p>
          </div>
        </button>
      </div>
    </Link>
  );
}

SportCard.propTypes = {
  sport: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default SportCard;
