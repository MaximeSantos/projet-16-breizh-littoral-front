/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { setUserAsLoggedOut } from '../../../slices/authSlice';
import { toggleDisplayProfileModal } from '../../../slices/modalSlice';

import './style.scss';

function UserNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleDisplayProfileModal = () => {
    dispatch(toggleDisplayProfileModal());
  };

  const handleLogout = () => {
    localStorage.removeItem('BZLuserJWToken');
    dispatch(setUserAsLoggedOut());
    dispatch(toggleDisplayProfileModal());
    navigate('/');
  };

  return (
    <div className="modal profile_modal">
      <div onClick={handleDisplayProfileModal} className="modal-overlay profile_modal-overlay" />
      <div className="modal-content profile_modal-content">
        {isLoggedIn
          && (
          <>
            <NavLink onClick={handleDisplayProfileModal} className="profile_modal-navlink" to="/profil">Profil</NavLink>
            <button onClick={handleLogout} className="profile_modal-navlink" type="button">Déconnexion </button>
          </>
          )}
        {!isLoggedIn
        && (
        <>
          <NavLink onClick={handleDisplayProfileModal} className="profile_modal-navlink" to="/inscription">Inscription </NavLink>
          <Link onClick={handleDisplayProfileModal} className="profile_modal-navlink" to="/connexion">Connexion</Link>
        </>
        )}
      </div>
    </div>
  );
}

export default UserNavbar;
