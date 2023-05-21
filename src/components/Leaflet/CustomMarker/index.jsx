import { Marker, Popup, useMapEvents } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import { setCustomMarkerCoordinates } from '../../../slices/leafletSlice';

function CustomMarker() {
  const dispatch = useDispatch();

  const customMarkerCoordinates = useSelector((state) => state.leaflet.customMarkerCoordinates);

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

export default CustomMarker;
