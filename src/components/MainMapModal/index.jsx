/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useDispatch } from 'react-redux';
import { toggleDisplayMainMapModal } from '../../slices/mainMapModalSlice';

import MainMapLeaflet from './MainMapLeaflet';

import './style.scss';

function MainMapModal() {
  const dispatch = useDispatch();

  const handleDisplayMainMapModal = () => {
    dispatch(toggleDisplayMainMapModal());
  };

  return (
    <div className="modal">
      <div onClick={handleDisplayMainMapModal} className="modal-overlay" />
      <div className="modal-content">
        <h2 className="modal-title">Carte des spots</h2>
        <MainMapLeaflet />
        <button type="button" className="modal-close" onClick={handleDisplayMainMapModal}>
          X
        </button>
      </div>
    </div>
  );
}

export default MainMapModal;
