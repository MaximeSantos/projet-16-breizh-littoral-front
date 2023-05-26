import PropTypes from 'prop-types';

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from 'react-leaflet';

import { startPosition } from '../../../utils/mapData';
import CustomMarker from '../CustomMarker';

import './style.scss';

function MainMapLeaflet({
  spots,
  canPinCustomMarker,
  customMarkerCoordinates,
  setCustomMarkerCoordinates,
}) {
  let listOfSpots;
  if (spots) {
    listOfSpots = spots.map((spot) => (
      <Marker key={spot.id} position={spot.gps_coordinates}>
        <Popup>
          {spot.name}
          <br />
          {spot.gps_coordinates[0]}
          <br />
          {spot.gps_coordinates[1]}
          <br />
          {spot.description}
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
