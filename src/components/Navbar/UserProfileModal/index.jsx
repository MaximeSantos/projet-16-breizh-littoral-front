/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toggleDisplayProfileModal } from '../../../slices/profileModalSlice';

import './style.scss';

function UserNavbar() {
  const dispatch = useDispatch();

  const handleDisplayProfileModal = () => {
    dispatch(toggleDisplayProfileModal());
  };

  return (
    <div className="modal profile_modal">
      <div onClick={handleDisplayProfileModal} className="modal-overlay profile_modal-overlay" />
      <div className="modal-content profile_modal-content">
        {/* if user is logged in */}
        <NavLink className="profile_modal-navlink" to="/profil">Profil</NavLink>
        <NavLink className="profile_modal-navlink" to="/deconnexion">Déconnexion </NavLink>
        {/* if user is not logged in */}
        <NavLink className="profile_modal-navlink" to="/inscription">Inscription </NavLink>
        <NavLink className="profile_modal-navlink" to="/connexion">Connexion</NavLink>
      </div>
    </div>
  );
}

export default UserNavbar;
