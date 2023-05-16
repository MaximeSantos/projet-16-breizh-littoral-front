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
        {/* Ceci ne sera pas un navlink quand le système d'auth sera mis en place */}
        <NavLink className="profile_modal-navlink" to="/deconnexion">Déconnexion </NavLink>
        {/* if user is an admin */}
        <NavLink className="profile_modal-navlink" to="/admin">Back-Office </NavLink>
        {/* if user is logged out */}
        <NavLink className="profile_modal-navlink" to="/inscription">Inscription </NavLink>
      </div>
    </div>
  );
}

export default UserNavbar;
