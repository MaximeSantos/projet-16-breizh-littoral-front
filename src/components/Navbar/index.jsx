import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import bzlLogoBlackBig from '../../assets/logos/BZL-logo_black.svg';
import iconConseils from '../../assets/icons/navbarButton-conseils.svg';
import iconDarkmode from '../../assets/icons/navbarButton-darkmode.svg';
import iconFavoris from '../../assets/icons/navbarButton-favoris.svg';
import iconMeteo from '../../assets/icons/navbarButton-meteo.svg';
import iconSports from '../../assets/icons/navbarButton-sports.svg';

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
        <Link to="/ajouter" className="navbar-middle-button">Ajouter</Link>
        <button onClick={handleDisplayMainMapModal} className="navbar-middle-button navbar-middle-button-map" type="button">Carte</button>
        <button onClick={handleDisplayProfileModal} className="navbar-middle-button" type="button">Compte</button>
      </div>

      <div className="navbar-container navbar-right">
        <div>
          <NavbarButton className="navbar-button" route="/favoris" icon={iconFavoris} />
        </div>
        <div>
          <NavbarButton className="navbar-button" route="/sports" icon={iconSports} />
          <NavbarButton className="navbar-button" route="/meteo" icon={iconMeteo} />
          <NavbarButton className="navbar-button" route="/conseils" icon={iconConseils} />
        </div>
        <div>
          <button type="button" className="navbar-darkmode_button">
            <img src={iconDarkmode} alt="Bouton mode sombre/clair" />
          </button>
        </div>
      </div>

      {displayProfileModal
      && <UserProfileModal />}

      {displayMainMapModal
      && <MainMapModal />}
    </header>
  );
}

export default Navbar;
