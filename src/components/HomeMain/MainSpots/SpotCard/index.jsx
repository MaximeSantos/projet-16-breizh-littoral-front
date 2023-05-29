import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { useDeleteFavoriteMutation, usePostNewFavoriteMutation } from '../../../../api/favoritesApi';

import iconFavorisAdd from '../../../../assets/icons/navbarButton-favoris-add.svg';
import iconFavorisRemove from '../../../../assets/icons/navbarButton-favoris-remove.svg';

import './style.scss';

function SpotCard({ spot }) {
  const [currentPage, setCurrentPage] = useState('');
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const location = useLocation();

  const [postNewFavorite] = usePostNewFavoriteMutation();
  const [deleteFavorite] = useDeleteFavoriteMutation();

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  return (
    <div className="card">
      <div className="card-header">
        <img className="card-header-picture" src={spot.picture} alt={`Spot ${spot.name}`} />
        {(isLoggedIn && (currentPage === '/'))
        && (
        <button onClick={() => postNewFavorite({ spotId: spot.id })} type="button" className="card-header-button">
          <img src={iconFavorisAdd} alt="Bouton ajouter favoris" />
        </button>
        )}
        {(isLoggedIn && (currentPage === '/favoris'))
        && (
        <button onClick={() => deleteFavorite({ spotId: spot.id })} type="button" className="card-header-button">
          <img src={iconFavorisRemove} alt="Bouton supprimer favoris" />
        </button>
        )}
      </div>
      <div className="card-main">
        <Link className="card-title" to={`/spot/${spot.id}`}>
          <h2>{spot.name}</h2>
        </Link>
        <p className="card-description">
          {(spot.description).replace(/^([\s\S]{200}[^\s]*)[\s\S]*/, '$1')}
          {(spot.description).length > 200 && '...'}
        </p>
      </div>
    </div>
  );
}
SpotCard.propTypes = {
  spot: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    gps_coordinates: PropTypes.arrayOf(PropTypes.number.isRequired),
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default SpotCard;
