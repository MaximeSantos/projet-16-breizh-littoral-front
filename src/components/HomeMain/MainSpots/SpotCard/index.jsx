import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import iconFavoris from '../../../../assets/icons/navbarButton-favoris.svg';

import './style.scss';

function SpotCard({ spot }) {
  return (
    <Link className="card" to={`/spot/${spot.id}`}>
      <div className="card-header">
        <img className="card-header-picture" src={spot.picture} alt={`Spot ${spot.name}`} />
        <button type="button" className="card-header-button">
          <img src={iconFavoris} alt="Bouton ajouter aux favoris" />
        </button>
      </div>
      <div className="card-main">
        <h2 className="card-title">{spot.name}</h2>
        <p className="card-description">
          {spot.description}
        </p>
      </div>
    </Link>
  );
}
SpotCard.propTypes = {
  spot: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    gps_coordinates: PropTypes.arrayOf(PropTypes.number.isRequired),
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default SpotCard;
