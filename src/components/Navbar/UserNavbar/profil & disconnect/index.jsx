import { NavLink } from 'react-router-dom';
import './style.scss';

function UserModal() {
  return (
    <div className="usermodal">
      <h2 className="usermodal-h2">
        <NavLink to="/profil">Profil</NavLink>
      </h2>
      <h2 className="usermodal-h2">
        <NavLink to="/deconnexion">Déconnexion </NavLink>
      </h2>
    </div>
  );
}

export default UserModal;
