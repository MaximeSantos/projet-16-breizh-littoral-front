// Notre backend n'utilise pas de camelcase en BDD, nous désactivons cette règle ici pour le moment
/* eslint-disable camelcase */
// Nous avons besoin de désactiver cette règle pour react-hook-form
/* eslint-disable react/jsx-props-no-spreading */
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { usePostNewSpotMutation } from '../../api/spotsApi';
import { useGetDifficultesQuery } from '../../api/difficultesApi';
import { setAddNewSpotCustomMarkerCoordinates } from '../../slices/leafletSlice';

import MainMapLeaflet from '../Leaflet/MainMapLeaflet';

import './style.scss';

function AddSpot() {
  const dispatch = useDispatch();

  // const {
  //   data: sports,
  // } = useGetSportsQuery();
  // let listOfSportsSelect;
  // if (sports) {
  //   listOfSportsSelect = sports.map((sport) => (
  //     <option key={sport.id} value={sport.id}>{sport.name}</option>
  //   ));
  // }

  const gps_coordinates = useSelector((state) => state.leaflet.addNewSpotCustomMarkerCoordinates);

  const {
    data: difficulties,
  } = useGetDifficultesQuery();
  let listOfDifficulties;
  if (difficulties) {
    listOfDifficulties = difficulties.map((difficulty) => (
      <option key={difficulty.id} value={difficulty.id}>{difficulty.name}</option>
    ));
  }

  const {
    register,
    handleSubmit,
  } = useForm();

  const [postNewSpot, {
    isSuccess,
    isError,
    error,
  }] = usePostNewSpotMutation();

  const onSubmit = (data) => {
    const dataToSend = {
      ...data,
      gps_coordinates,
      // sport_id: parseInt(data.sport_id, 10),
      difficulty_id: Number(data.difficulty_id),
    };
    postNewSpot(dataToSend);
    dispatch(setAddNewSpotCustomMarkerCoordinates(null));
  };

  return (
    <main className="addSpot">
      {!isSuccess
      && (
      <>
        <h1 className="addSpot-title">
          Création d&apos;un nouveau spot
        </h1>
        <div className="addSpot-map">
          <MainMapLeaflet
            canPinCustomMarker
            customMarkerCoordinates={gps_coordinates}
            setCustomMarkerCoordinates={setAddNewSpotCustomMarkerCoordinates}
          />
        </div>
        <form className="addSpot-form" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="addSpot-name">Nom *</label>
            <input className="addSpot-form-name" {...register('name', { required: true })} placeholder="Nom" id="addSpot-name" />
          </div>
          <div>
            <label htmlFor="addSpot-location">Ville *</label>
            <input className="addSpot-form-location" {...register('location', { required: true })} placeholder="Ville" id="addSpot-location" />
          </div>
          <div>
            <label htmlFor="addSpot-difficulty">Difficulté *</label>
            <select {...register('difficulty_id')} type="number" id="addSpot-difficulty">
              {difficulties && listOfDifficulties}
            </select>
          </div>
          <div>
            <div className="addSpot-description">
              <label htmlFor="addSpot-description">Description *</label>
              <input className="addSpot-form-description" {...register('description', { required: true, minLength: 5 })} placeholder="Description" type="textarea" id="addSpot-description" />
            </div>
          </div>
          <div>
            <label htmlFor="addSpot-picture">Photo principale du spot (URL)</label>
            <input className="addSpot-form-photo" {...register('picture')} placeholder="Photo" id="addSpot-picture" />
          </div>
          <input className="button-basic" type="submit" value="Valider" />
          {isError
          && (
          <p>
            Erreur lors de l&apos;ajout d&apos;un spot.
            {error.data.message}
          </p>
          )}
        </form>
      </>
      )}

      {isSuccess
      && (<p>Votre spot a bien été ajouté !</p>)}
    </main>
  );
}

export default AddSpot;
