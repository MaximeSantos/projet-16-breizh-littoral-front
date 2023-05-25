/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { usePatchSpotMutation } from '../../../api/spotsApi';
import './style.scss';

function SpotInfo({ spot, userId, spotId }) {
  const [isModifying, setIsModifying] = useState(false);

  const [descriptionValue, setDescriptionValue] = useState(spot.description);
  const [nameValue, setNameValue] = useState(spot.name);
  const [pictureValue, setPictureValue] = useState(spot.name);

  const [patchSpot] = usePatchSpotMutation();

  const handleEditSpot = () => {
    setIsModifying(!isModifying);
  };

  const handleChangeDescription = (e) => {
    setDescriptionValue(e);
  };

  const handleChangeName = (e) => {
    setNameValue(e);
  };
  const handleChangePicture = (e) => {
    setPictureValue(e);
  };

  const onSubmit = (data) => {
    patchSpot({
      userId,
      spotId,
      data,
    });
    setIsModifying(false);
  };

  const {
    register,
    handleSubmit,
  } = useForm();

  return (
    <div className="spot">
      {!isModifying && (
      <div className="spot-top">
        <h1 className="spot-top-text">{spot.name}</h1>
        <img className="spot-top-banner" src={spot.picture} alt={`Spot ${spot.name}`} />
        <h2 className="spot-left-description"> Description </h2>
        <p>{spot.description}</p>
        <h2 className="spot-left-location">Location </h2>
        <p>{spot.MainMapModallocation}</p>
        <p>{spot.gps_coordinates}</p>
      </div>
      )}
      {isModifying
      && (
      <form onSubmit={handleSubmit(onSubmit)} className="comment-align">
        <h2> Nom du spot :</h2>
        <input className="signup-form-spot" {...register('name')} type="textarea" value={nameValue} onChange={(e) => handleChangeName(e.target.value)} />
        <h2> Photo :</h2>
        <input className="signup-form-spot" {...register('picture')} type="textarea" value={pictureValue} onChange={(e) => handleChangePicture(e.target.value)} />
        <h2> Description :</h2>
        <input className="signup-form-spot" {...register('description')} type="textarea" value={descriptionValue} onChange={(e) => handleChangeDescription(e.target.value)} />
        <input type="submit" className="signup-submit-spot" value="Valider" />
      </form>
      )}
      {userId === spot.user.id
      && <button className="editButton" onClick={() => handleEditSpot(spot.user.id)} type="button">Modifier</button>}
    </div>
  );
}

SpotInfo.propTypes = {
  spot: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      gps_coordinates: PropTypes.arrayOf(PropTypes.number.isRequired),
      description: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
  userId: PropTypes.number.isRequired,
  spotId: PropTypes.number.isRequired,
};
SpotInfo.defaultProps = {
  spot: [],
};
export default SpotInfo;
