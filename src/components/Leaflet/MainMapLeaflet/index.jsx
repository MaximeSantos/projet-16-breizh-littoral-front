import PropTypes from 'prop-types';

// import { divIcon } from 'leaflet';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from 'react-leaflet';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleDisplayMainMapModal } from '../../../slices/mainMapModalSlice';
import { startPosition } from '../../../utils/mapData';
import CustomMarker from '../CustomMarker';

import './style.scss';

function MainMapLeaflet({
  spots,
  canPinCustomMarker,
  customMarkerCoordinates,
  setCustomMarkerCoordinates,
}) {
  const dispatch = useDispatch();

  // const markerIcon = divIcon({
  //   html: iconMarkup,
  // });

  let listOfSpots;
  if (spots) {
    listOfSpots = spots.map((spot) => (
      <Marker
        key={spot.id}
        position={spot.gps_coordinates}
        // icon={markerIcon}
      >
        <Popup>
          <h2 className="popup-title">{spot.name}</h2>
          <p className="popup-description">{spot.description}</p>
          <Link className="link-basic popup-link" onClick={() => dispatch(toggleDisplayMainMapModal())} to={`/spot/${spot.id}`}>Vers le spot !</Link>
        </Popup>
      </Marker>
    ));
  }

  return (
    <MapContainer
      className="main_map-container"
      center={startPosition}
      zoom={8}
      minZoom={8}
      maxBounds={[[50, -8.5], [46.5, 2]]}
      maxBoundsViscosity={0.9}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {listOfSpots}
      {canPinCustomMarker
      && (
      <CustomMarker
        customMarkerCoordinates={customMarkerCoordinates}
        setCustomMarkerCoordinates={setCustomMarkerCoordinates}
      />
      )}
    </MapContainer>
  );
}

MainMapLeaflet.propTypes = {
  spots: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      gps_coordinates: PropTypes.arrayOf(PropTypes.number.isRequired),
      description: PropTypes.string.isRequired,
    }),
  ),
  canPinCustomMarker: PropTypes.bool.isRequired,
  customMarkerCoordinates: PropTypes.arrayOf(PropTypes.number.isRequired),
  setCustomMarkerCoordinates: PropTypes.func,
};

MainMapLeaflet.defaultProps = {
  spots: [],
  customMarkerCoordinates: null,
  setCustomMarkerCoordinates: null,
};

export default MainMapLeaflet;
