import { Link } from 'react-router-dom';
import NavbarButton from '../NavbarButton';
import './style.scss';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <Link className="navbar-logo" to="/">
          <img src="src/assets/logos/BZL-logo_black.svg" alt="Logo principal Breizh Littoral" />
        </Link>
      </div>

      <div className="navbar-middle" />

      <div className="navbar-right">
        <NavbarButton className="navbar-button" route="/favoris" icon="src/assets/icons/navbarButton-favoris.svg" />
        <NavbarButton className="navbar-button" route="/sports" icon="src/assets/icons/navbarButton-sports.svg" />
        <NavbarButton className="navbar-button" route="/meteo" icon="src/assets/icons/navbarButton-meteo.svg" />
        <NavbarButton className="navbar-button" route="/conseils" icon="src/assets/icons/navbarButton-conseils.svg" />
        <button type="button" className="navbar-button-darkmode">
          <img src="src/assets/icons/navbarButton-darkmode.svg" alt="Bouton mode sombre/clair" />
        </button>
      </div>

    </header>
  );
}

export default Navbar;
