import './style.scss';
import PropTypes from 'prop-types';

function SportCard({ sport }) {
  return (
    <div className="sport">
      <button type="button">
        <div className="sport-card">
          <img className="card-header-picture" src={sport.picture} alt={`Spot ${sport.name}`} />
          <p className="sport-description">{(sport.description).substring(0, 50)}</p>
        </div>
      </button>
    </div>
  );
}

SportCard.propTypes = {
  sport: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default SportCard;
