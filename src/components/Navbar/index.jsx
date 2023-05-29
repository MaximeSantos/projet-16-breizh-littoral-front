import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import bzlLogoBlackBig from '../../assets/logos/BZL-logo_black.svg';
import bzlLogoBlackSmall from '../../assets/logos/BZL-logo-sec_black2.png';
import iconConseils from '../../assets/icons/navbarButton-conseils.svg';
import iconFavoris from '../../assets/icons/navbarButton-favoris.svg';
import iconSports from '../../assets/icons/navbarButton-sports.svg';
import iconPlus from '../../assets/icons/navbarButton-plus.svg';
import iconProfil from '../../assets/icons/navbarButton-profil.svg';
import iconMenu from '../../assets/icons/navbarButton-menu.svg';
// import iconDarkmode from '../../assets/icons/navbarButton-darkmode.svg';
// import iconMeteo from '../../assets/icons/navbarButton-meteo.svg';

import {
  toggleDisplayMainMapModal,
  toggleDisplayProfileModal,
  toggleDisplayMenuModal,
} from '../../slices/modalSlice';

import UserProfileModal from './UserProfileModal';
import NavbarButton from './NavbarButton';
import MainMapModal from './MainMapModal';

import './style.scss';
import MenuModal from './MenuModal';

function Navbar() {
  const dispatch = useDispatch();

  const displayMainMapModal = useSelector((state) => state.modal.displayMainMapModal);
  const displayProfileModal = useSelector((state) => state.modal.displayProfileModal);
  const displayMenuModal = useSelector((state) => state.modal.displayMenuModal);

  return (
    <header className="navbar">
      <div className="navbar-container navbar-left">
        <Link className="navbar-logo bs" to="/">
          <img className="navbar-logo-image" src={bzlLogoBlackBig} alt="Logo principal Breizh Littoral" />
        </Link>
        <Link className="navbar-logo ss" to="/">
          <img className="navbar-logo-image" src={bzlLogoBlackSmall} alt="Logo principal Breizh Littoral" />
        </Link>
      </div>

      <div className="navbar-container navbar-middle">
        <button onClick={() => dispatch(toggleDisplayMainMapModal())} className="navbar-middle-button navbar-middle-button-map" type="button">Carte</button>
      </div>

      <div className="navbar-container navbar-right">
        <button onClick={() => dispatch(toggleDisplayProfileModal())} className={`navbar-button bs ${displayProfileModal ? 'active' : ''}`} type="button">
          <img className="navbar-button" src={iconProfil} alt="Bouton profil" />
          <p>compte</p>
        </button>
        {/* Only displays on big screens */}
        <NavbarButton className="navbar-button bs" route="/favoris" icon={iconFavoris} />
        <NavbarButton className="navbar-button bs" route="/ajouter" icon={iconPlus} />
        <NavbarButton className="navbar-button bs" route="/sports" icon={iconSports} />
        <NavbarButton className="navbar-button bs" route="/conseils" icon={iconConseils} />
        {/* Only displays on small screens */}
        <button onClick={() => dispatch(toggleDisplayMenuModal())} className={`navbar-button ss ${displayMenuModal ? 'active' : ''}`} type="button">
          <img className="navbar-button" src={iconMenu} alt="Bouton menu" />
          <p>menu</p>
        </button>
        {/* <NavbarButton className="navbar-button" route="/meteo" icon={iconMeteo} /> */}
      </div>

      {displayProfileModal
      && <UserProfileModal />}

      {displayMainMapModal
      && <MainMapModal />}

      {displayMenuModal
      && <MenuModal />}
    </header>
  );
}

export default Navbar;
