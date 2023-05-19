/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setUserAsLoggedOut } from '../../../slices/authSlice';
import { toggleDisplayProfileModal } from '../../../slices/profileModalSlice';

import './style.scss';

function UserNavbar() {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleDisplayProfileModal = () => {
    dispatch(toggleDisplayProfileModal());
  };

  const handleLogout = () => {
    localStorage.removeItem('BZLuserJWToken');
    dispatch(setUserAsLoggedOut());
  };

  return (
    <div className="modal profile_modal">
      <div onClick={handleDisplayProfileModal} className="modal-overlay profile_modal-overlay" />
      <div className="modal-content profile_modal-content">
        {isLoggedIn
          && (
          <>
            <NavLink className="profile_modal-navlink" to="/profil">Profil</NavLink>
            <button type="button" className="profile_modal-navlink" onClick={handleLogout}>Déconnexion </button>
          </>
          )}
        {!isLoggedIn
        && (
        <>
          <NavLink className="profile_modal-navlink" to="/inscription">Inscription </NavLink>
          <NavLink className="profile_modal-navlink" to="/connexion">Connexion</NavLink>
        </>
        )}
      </div>
    </div>
  );
}

export default UserNavbar;
