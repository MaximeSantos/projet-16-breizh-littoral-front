/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { setUserAsLoggedOut } from '../../../slices/authSlice';
import { toggleDisplayMenuModal } from '../../../slices/modalSlice';

import './style.scss';

function MenuModal() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDisplayMenuModal = () => {
    dispatch(toggleDisplayMenuModal());
  };

  const handleLogout = () => {
    localStorage.removeItem('BZLuserJWToken');
    dispatch(setUserAsLoggedOut());
    dispatch(toggleDisplayMenuModal());
    navigate('/');
  };

  return (
    <div className="modal menu_modal">
      <div onClick={handleDisplayMenuModal} className="modal-overlay menu_modal-overlay" />
      <div className="modal-content menu_modal-content">
        {isLoggedIn
        && (
          <NavLink onClick={handleDisplayMenuModal} className="menu_modal-navlink" to="/profil">Profil</NavLink>
        )}
        {!isLoggedIn
        && (
        <>
          <NavLink onClick={handleDisplayMenuModal} className="menu_modal-navlink" to="/inscription">Inscription </NavLink>
          <Link onClick={handleDisplayMenuModal} className="menu_modal-navlink" to="/connexion">Connexion</Link>
        </>
        )}
        <Link onClick={handleDisplayMenuModal} className="menu_modal-navlink" to="/favoris">Favoris</Link>
        <Link onClick={handleDisplayMenuModal} className="menu_modal-navlink" to="/ajouter">Ajouter un spot</Link>
        <Link onClick={handleDisplayMenuModal} className="menu_modal-navlink" to="/sports">Sports</Link>
        <Link onClick={handleDisplayMenuModal} className="menu_modal-navlink" to="/conseils">Conseils</Link>
        {isLoggedIn
        && (
          <button onClick={handleLogout} className="menu_modal-navlink" type="button">Déconnexion </button>
        )}
      </div>
    </div>
  );
}

export default MenuModal;
