import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './style.scss';

function NavbarButton({ route, icon }) {
  return (
    <NavLink className="navbar-button" to={route}>
      <img src={icon} alt={`icone de lien vers la page ${route}`} />
    </NavLink>
  );
}

NavbarButton.propTypes = {
  route: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default NavbarButton;
