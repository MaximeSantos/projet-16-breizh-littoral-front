import PropTypes from 'prop-types';

import './style.scss';

function NavbarButton({ route }) {
  return (
    <div>NavbarButton</div>
  );
}

NavbarButton.propTypes = {
  route: PropTypes.string.isRequired,
};

export default NavbarButton;
