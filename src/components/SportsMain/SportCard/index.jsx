import './style.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function SportCard({ sport }) {
  return (
    <Link to={`${sport.id}`}>
      <div className="sport_card">
        <img className="sport_card-picture" src={sport.picture} alt={`Spot ${sport.name}`} />
        <h2 className="sport_card-title">{sport.name}</h2>
      </div>
    </Link>
  );
}

SportCard.propTypes = {
  sport: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default SportCard;
