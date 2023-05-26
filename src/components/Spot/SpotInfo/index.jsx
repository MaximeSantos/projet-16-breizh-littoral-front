/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { usePatchSpotMutation } from '../../../api/spotsApi';
import MainMapLeaflet from '../../Leaflet/MainMapLeaflet';

function SpotInfo({
  spot,
  userId,
  spotId,
  isModifying,
  setIsModifying,
}) {
  const [descriptionValue, setDescriptionValue] = useState(spot.description);
  const [nameValue, setNameValue] = useState(spot.name);
  const [pictureValue, setPictureValue] = useState(spot.picture);
  const [locationValue, setLocationValue] = useState(spot.location);
  const [gpsValue, setGpsValue] = useState(spot.gps_coordinates);

  const {
    register,
    handleSubmit,
  } = useForm();

  const [patchSpot, { isError, error }] = usePatchSpotMutation();

  const handleEditSpot = () => {
    setIsModifying(!isModifying);
  };

  const onSubmit = (data) => {
    const dataToSend = { ...data, gps_coordinates: gpsValue };
    patchSpot({
      spotId,
      dataToSend,
    });
    setIsModifying(false);
  };

  return (
    <div className="spot-info">
      <h1 className="spot-info-title">
        {spot.name}
        {userId === spot.user?.id
        && <button className="button-minimalist" onClick={() => handleEditSpot()} type="button">{isModifying ? 'Annuler' : 'Modifier'}</button>}
      </h1>

      {!isModifying && (
        <>
          <img className="spot-info-picture" src={spot.picture} alt={`Spot ${spot.name}`} />
          <h2>Ville</h2>
          <p>{spot.location}</p>
          <h2> Description </h2>
          <p>{spot.description}</p>
        </>
      )}
      {isModifying
      && (
      <>
        <div className="addSpot-map">
          <MainMapLeaflet
            canPinCustomMarker
            customMarkerCoordinates={gpsValue}
            setCustomMarkerCoordinates={setGpsValue}
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="comment-align">
          <div>
            <label htmlFor="spot-form-name">Nom du spot *</label>
            <input
              {...register('name', { required: true })}
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="spot-form-picture">Photo</label>
            <input
              {...register('picture')}
              value={pictureValue}
              onChange={(e) => setPictureValue(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="spot-form-location">Ville *</label>
            <input
              {...register('location', { required: true })}
              value={locationValue}
              onChange={(e) => setLocationValue(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="spot-form-description">Description</label>
            <input
              {...register('description', { required: true, minLength: 5 })}
              type="textarea"
              value={descriptionValue}
              onChange={(e) => setDescriptionValue(e.target.value)}
            />
          </div>
          <div>
            <input className="button-basic" type="submit" value="Valider" />
          </div>
        </form>
        {isError
        && <p>{error.data.message}</p>}
      </>
      )}
    </div>
  );
}

SpotInfo.propTypes = {
  spot: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    gps_coordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
  userId: PropTypes.number.isRequired,
  spotId: PropTypes.number.isRequired,
  isModifying: PropTypes.bool.isRequired,
  setIsModifying: PropTypes.func.isRequired,
};

export default SpotInfo;
