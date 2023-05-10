/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import './style.scss';
import { useDispatch } from 'react-redux';
import { setDisplayProfileModal } from '../../../slices/profileModalSlice';
import UserModal from './profil & disconnect';

function UserNavbar() {
  const dispatch = useDispatch();
  const handleDisplayProfileModal = () => {
    dispatch(setDisplayProfileModal());
  };

  return (
    <div className="modal profile_modal">
      <div onClick={handleDisplayProfileModal} className="modal-overlay profile_modal-overlay" />
      <div className="modal-content profile_modal-content">
        <UserModal />
      </div>
    </div>
  );
}

export default UserNavbar;
