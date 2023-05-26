import PropTypes from 'prop-types';
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import { useDispatch } from 'react-redux';

function CustomMarker({ customMarkerCoordinates, setCustomMarkerCoordinates }) {
  const dispatch = useDispatch();

  useMapEvents({
    click(e) {
      dispatch(setCustomMarkerCoordinates([e.latlng.lat, e.latlng.lng]));
    },
  });

  return customMarkerCoordinates === null ? null : (
    <Marker position={customMarkerCoordinates}>
      <Popup>
        You clicked here :
        <br />
        latitude&nbsp;
        {customMarkerCoordinates[0]}
        <br />
        longitude&nbsp;
        {customMarkerCoordinates[1]}
      </Popup>
    </Marker>
  );
}

CustomMarker.propTypes = {
  customMarkerCoordinates: PropTypes.arrayOf(PropTypes.number.isRequired),
  setCustomMarkerCoordinates: PropTypes.func.isRequired,
};

CustomMarker.defaultProps = {
  customMarkerCoordinates: null,
};

export default CustomMarker;
