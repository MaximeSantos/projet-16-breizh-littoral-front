import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleDisplayMainMapModal } from '../../slices/mainMapModalSlice';
import { setDisplayProfileModal } from '../../slices/profileModalSlice';
import UserNavbar from './UserNavbar';

import NavbarButton from './NavbarButton';

import './style.scss';

function Navbar() {
  const dispatch = useDispatch();

  const displayProfileModal = useSelector((state) => state.profileModal.displayProfileModal);

  const handleDisplayMainMapModal = () => {
    dispatch(toggleDisplayMainMapModal());
  };

  const handleDisplayProfileModal = () => {
    dispatch(setDisplayProfileModal());
  };

  return (
    <header className="navbar">
      <div className="navbar-container navbar-left">
        <Link className="navbar-logo" to="/">
          <img src="src/assets/logos/BZL-logo_black.svg" alt="Logo principal Breizh Littoral" />
        </Link>
      </div>

      <div className="navbar-container navbar-middle">
        <Link to="/ajouter" className="navbar-middle-button">Ajouter</Link>
        <button onClick={handleDisplayMainMapModal} className="navbar-middle-button navbar-middle-button-map" type="button">Carte</button>
        <button onClick={handleDisplayProfileModal} className="navbar-middle-button" type="button">Compte</button>
        <NavbarButton className="navbar-button" route="/favoris" icon="src/assets/icons/navbarButton-favoris.svg" />
      </div>

      <div className="navbar-container navbar-right">
        <NavbarButton className="navbar-button" route="/sports" icon="src/assets/icons/navbarButton-sports.svg" />
        <NavbarButton className="navbar-button" route="/meteo" icon="src/assets/icons/navbarButton-meteo.svg" />
        <NavbarButton className="navbar-button" route="/conseils" icon="src/assets/icons/navbarButton-conseils.svg" />
        <button type="button" className="navbar-darkmode_button">
          <img src="src/assets/icons/navbarButton-darkmode.svg" alt="Bouton mode sombre/clair" />
        </button>
      </div>

      {displayProfileModal
        && <UserNavbar /> }
    </header>
  );
}

export default Navbar;
