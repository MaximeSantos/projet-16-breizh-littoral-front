import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function NavbarButton({ route, icon, className }) {
  return (
    <NavLink className={className} to={route}>
      <img src={icon} alt={`icone de lien vers la page ${route}`} />
      <p>{route.substring(1)}</p>
    </NavLink>
  );
}

NavbarButton.propTypes = {
  route: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default NavbarButton;
