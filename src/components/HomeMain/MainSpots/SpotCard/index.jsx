/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDeleteFavoriteMutation, usePostNewFavoriteMutation } from '../../../../api/favoritesApi';

import iconFavorisAdd from '../../../../assets/icons/navbarButton-favoris-add.svg';
import iconFavorisRemove from '../../../../assets/icons/navbarButton-favoris-remove.svg';

import './style.scss';

function SpotCard({ spot }) {
  const [currentPage, setCurrentPage] = useState('');
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const location = useLocation();
  const navigate = useNavigate();

  const [postNewFavorite] = usePostNewFavoriteMutation();
  const [deleteFavorite] = useDeleteFavoriteMutation();

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  const handleAddFavorite = (e) => {
    e.stopPropagation();
    postNewFavorite({ spotId: spot.id });
  };

  const handleRemoveFavorite = (e) => {
    e.stopPropagation();
    deleteFavorite({ spotId: spot.id });
  };

  return (
    <div onClick={() => navigate(`/spot/${spot.id}`)} className="card">
      <div className="card-header">
        <img className="card-header-picture" src={spot.picture} alt={`Spot ${spot.name}`} />
        {(isLoggedIn && (currentPage === '/'))
        && (
        <button onClick={handleAddFavorite} type="button" className="card-header-button">
          <img src={iconFavorisAdd} alt="Bouton ajouter favoris" />
        </button>
        )}
        {(isLoggedIn && (currentPage === '/favoris'))
        && (
        <button onClick={handleRemoveFavorite} type="button" className="card-header-button">
          <img src={iconFavorisRemove} alt="Bouton supprimer favoris" />
        </button>
        )}
      </div>
      <div className="card-main">
        <h2>{spot.name}</h2>
        <p className="card-description">
          {/* permet de limiter à 200 caractères et de ne pas couper au milieu d'un mot */}
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
