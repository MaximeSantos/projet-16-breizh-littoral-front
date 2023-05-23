// Notre backend n'utilise pas de camelcase en BDD, nous désactivons cette règle ici pour le moment
/* eslint-disable camelcase */
// Nous avons besoin de désactiver cette règle pour react-hook-form
/* eslint-disable react/jsx-props-no-spreading */
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { usePostNewSpotMutation } from '../../api/spotsApi';
// import { useGetSportsQuery } from '../../api/sportsApi';
import { useGetDifficultesQuery } from '../../api/difficultesApi';
import './style.scss';
import { getUserIdFromJWT } from '../../utils/JWT';
import MainMapLeaflet from '../Navbar/MainMapModal/MainMapLeaflet';

function AddSpot() {
  // const {
  //   data: sports,
  // } = useGetSportsQuery();
  // let listOfSportsSelect;
  // if (sports) {
  //   listOfSportsSelect = sports.map((sport) => (
  //     <option key={sport.id} value={sport.id}>{sport.name}</option>
  //   ));
  // }

  const gps_coordinates = useSelector((state) => state.leaflet.customMarkerCoordinates);

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
  }] = usePostNewSpotMutation();

  const onSubmit = (data) => {
    const dataToSend = {
      ...data,
      user_id: getUserIdFromJWT(),
      gps_coordinates,
      // sport_id: parseInt(data.sport_id, 10),
      difficulty_id: Number(data.difficulty_id),
    };

    postNewSpot(dataToSend);
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
          <MainMapLeaflet canPinCustomMarker />
        </div>
        <form className="addSpot-form" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="addSpot-name">Nom</label>
            <input className="addSpot-form-name" {...register('name')} placeholder="Nom" id="addSpot-name" />
          </div>
          <div>
            <label htmlFor="addSpot-location">Ville</label>
            <input className="addSpot-form-location" {...register('location')} placeholder="Ville" id="addSpot-location" />
          </div>
          <div>
            <label htmlFor="addSpot-difficulty">Difficulté</label>
            <select {...register('difficulty_id')} type="number" id="addSpot-difficulty">
              {difficulties && listOfDifficulties}
            </select>
          </div>
          <div>
            <div className="addSpot-description">
              <label htmlFor="addSpot-description">Description</label>
              <input className="addSpot-form-description" {...register('description')} placeholder="Description" type="textarea" id="addSpot-description" />
            </div>
          </div>
          <div>
            <label htmlFor="addSpot-picture">Photo principale du spot (URL)</label>
            <input className="addSpot-form-photo" {...register('picture')} placeholder="Photo" id="addSpot-picture" />
          </div>
          <input className="signup-form-button" type="submit" value="Valider" />
          {isError
          && <p>Erreur lors de l&apos;ajout du spot</p>}
        </form>
      </>
      )}

      {isSuccess
      && (<p>Votre spot a bien été ajouté !</p>)}
    </main>
  );
}

export default AddSpot;
