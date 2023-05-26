/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useDispatch } from 'react-redux';
import { useGetSpotsQuery } from '../../../api/spotsApi';
import { toggleDisplayMainMapModal } from '../../../slices/mainMapModalSlice';

import MainMapLeaflet from '../../Leaflet/MainMapLeaflet';

import './style.scss';

function MainMapModal() {
  const dispatch = useDispatch();

  const {
    data: spots,
    isFetching,
    isError,
    error,
  } = useGetSpotsQuery();

  const handleDisplayMainMapModal = () => {
    dispatch(toggleDisplayMainMapModal());
  };

  return (
    <div className="modal">
      <div onClick={handleDisplayMainMapModal} className="modal-overlay" />
      <div className="modal-content">
        <h2 className="modal-title">Carte des spots</h2>
        {isFetching
        && <p>Loading...</p>}
        {isError
        && (
        <>
          <p>{error.status}</p>
          <p>{error.data}</p>
        </>
        )}
        {spots
        && <MainMapLeaflet spots={spots} canPinCustomMarker={false} />}
        <button type="button" className="modal-close" onClick={handleDisplayMainMapModal}>
          X
        </button>
      </div>
    </div>
  );
}

export default MainMapModal;
