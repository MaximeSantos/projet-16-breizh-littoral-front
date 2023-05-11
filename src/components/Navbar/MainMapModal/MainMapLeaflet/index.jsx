// import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet';

import { spots, startPosition } from '../../../../utils/mapData';

import './style.scss';

function CustomMarker() {
  const [customPosition, setCustomPosition] = useState(null);

  useMapEvents({
    click(e) {
      setCustomPosition([e.latlng.lat, e.latlng.lng]);
      // console.log(e.latlng.lat);
      // console.log(e.latlng.lng);
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

function MainMapLeaflet() {
  const listOfSpots = spots.map((spot) => (
    <Marker key={spot.position[0] + spot.position[1]} position={spot.position}>
      <Popup>
        {spot.name}
        <br />
        {spot.position[0]}
        <br />
        {spot.position[1]}
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
      {/* <Marker position={startPosition}>
        <Popup>
          A pretty CSS3 popup.
          <br />
          Easily customizable.
        </Popup>
      </Marker> */}
      {listOfSpots}
      <CustomMarker />
    </MapContainer>
  );
}

// MainMapLeaflet.propTypes = {

// };

export default MainMapLeaflet;
