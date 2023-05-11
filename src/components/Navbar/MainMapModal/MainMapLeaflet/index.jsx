import PropTypes from 'prop-types';

import { useState } from 'react';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet';

import { startPosition } from '../../../../utils/mapData';

import './style.scss';

function CustomMarker() {
  const [customPosition, setCustomPosition] = useState(null);

  useMapEvents({
    click(e) {
      setCustomPosition([e.latlng.lat, e.latlng.lng]);
    },
  });

  return customPosition === null ? null : (
    <Marker position={customPosition}>
      <Popup>
        You clicked here :
        <br />
        latitude&nbsp;
        {customPosition[0]}
        <br />
        longitude&nbsp;
        {customPosition[1]}
      </Popup>
    </Marker>
  );
}

function MainMapLeaflet({ spots }) {
  const listOfSpots = spots.map((spot) => (
    <Marker key={spot.id} position={spot.coordinates}>
      <Popup>
        {spot.name}
        <br />
        {spot.coordinates[0]}
        <br />
        {spot.coordinates[1]}
        <br />
        {spot.description}
      </Popup>
    </Marker>
  ));

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
      <CustomMarker />
    </MapContainer>
  );
}

MainMapLeaflet.propTypes = {
  spots: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      coordinates: PropTypes.arrayOf(PropTypes.number.isRequired),
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MainMapLeaflet;
