import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
          <img className="navbar-logo-image" src="src/assets/logos/BZL-logo_black.svg" alt="Logo principal Breizh Littoral" />
        </Link>
      </div>

      <div className="navbar-container navbar-middle">
        <Link to="/ajouter" className="navbar-middle-button">Ajouter</Link>
        <button onClick={handleDisplayMainMapModal} className="navbar-middle-button navbar-middle-button-map" type="button">Carte</button>
        <button onClick={handleDisplayProfileModal} className="navbar-middle-button" type="button">Compte</button>
      </div>

      <div className="navbar-container navbar-right">
        <div>
          <NavbarButton className="navbar-button" route="/favoris" icon="src/assets/icons/navbarButton-favoris.svg" />
        </div>
        <div>
          <NavbarButton className="navbar-button" route="/sports" icon="src/assets/icons/navbarButton-sports.svg" />
          <NavbarButton className="navbar-button" route="/meteo" icon="src/assets/icons/navbarButton-meteo.svg" />
          <NavbarButton className="navbar-button" route="/conseils" icon="src/assets/icons/navbarButton-conseils.svg" />
        </div>
        <div>
          <button type="button" className="navbar-darkmode_button">
            <img src="src/assets/icons/navbarButton-darkmode.svg" alt="Bouton mode sombre/clair" />
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
