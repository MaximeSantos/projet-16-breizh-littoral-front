import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import bzlLogoBlackBig from '../../assets/logos/BZL-logo_black.svg';
import iconConseils from '../../assets/icons/navbarButton-conseils.svg';
import iconFavoris from '../../assets/icons/navbarButton-favoris.svg';
import iconSports from '../../assets/icons/navbarButton-sports.svg';
import iconPlus from '../../assets/icons/navbarButton-plus.svg';
import iconProfil from '../../assets/icons/navbarButton-profil.svg';
// import iconDarkmode from '../../assets/icons/navbarButton-darkmode.svg';
// import iconMeteo from '../../assets/icons/navbarButton-meteo.svg';

import { toggleDisplayMainMapModal } from '../../slices/mainMapModalSlice';
import { toggleDisplayProfileModal } from '../../slices/profileModalSlice';

import UserProfileModal from './UserProfileModal';
import NavbarButton from './NavbarButton';
import MainMapModal from './MainMapModal';

import './style.scss';

function Navbar() {
  const dispatch = useDispatch();

  const displayMainMapModal = useSelector((state) => state.mainMapModal.displayMainMapModal);
  const displayProfileModal = useSelector((state) => state.profileModal.displayProfileModal);

  const handleDisplayMainMapModal = () => {
    dispatch(toggleDisplayMainMapModal());
  };

  const handleDisplayProfileModal = () => {
    dispatch(toggleDisplayProfileModal());
  };

  return (
    <header className="navbar">
      <div className="navbar-container navbar-left">
        <Link className="navbar-logo" to="/">
          <img className="navbar-logo-image" src={bzlLogoBlackBig} alt="Logo principal Breizh Littoral" />
        </Link>
      </div>

      <div className="navbar-container navbar-middle">
        <button onClick={handleDisplayMainMapModal} className="navbar-middle-button navbar-middle-button-map" type="button">Carte</button>
      </div>

      <div className="navbar-container navbar-right">
        <button onClick={handleDisplayProfileModal} className={`navbar-button ${displayProfileModal ? 'active' : ''}`} type="button">
          <img className="navbar-button" src={iconProfil} alt="Bouton profil" />
          <p>compte</p>
        </button>
        <NavbarButton className="navbar-button" route="/favoris" icon={iconFavoris} />
        <NavbarButton className="navbar-button" route="/ajouter" icon={iconPlus} />
        <NavbarButton className="navbar-button" route="/sports" icon={iconSports} />
        <NavbarButton className="navbar-button" route="/conseils" icon={iconConseils} />
        {/* <NavbarButton className="navbar-button" route="/meteo" icon={iconMeteo} /> */}
        {/* <div>
          <button type="button" className="navbar-button navbar-button--darkmode">
            <img src={iconDarkmode} alt="Bouton mode sombre/clair" />
          </button>
        </div> */}
      </div>

      {displayProfileModal
      && <UserProfileModal />}

      {displayMainMapModal
      && <MainMapModal />}
    </header>
  );
}

export default Navbar;
