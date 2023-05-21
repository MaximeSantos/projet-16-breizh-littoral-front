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
        <form className="spotAdd-form" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="addSpot-title">
            Création d&apos;un nouveau spot
          </h1>
          <div>
            <h2> Nom </h2>
            <input className="spotAdd-form-name" {...register('name')} placeholder="Nom" />
          </div>
          <div>
            <h2> Localisation </h2>
            <input className="spotAdd-form-localisation" {...register('location')} placeholder="Localisation" />
          </div>
          <div>
            <select {...register('difficulty_id')} type="number">
              {difficulties && listOfDifficulties}
            </select>
          </div>
          <div>
            <div className="spotAdd-description">
              <h2> Description </h2>
              <input className="spotAdd-form-description" {...register('description')} placeholder="Description" type="textarea" />
            </div>
          </div>
          <div>
            <h2> Photo</h2>
            <input className="spotAdd-form-photo" {...register('picture')} placeholder="photo" />
          </div>
          <input className="signup-form-button" type="submit" value="Valider" />
          {isError
          && <p>Erreur lors de l&apos;ajout du spot</p>}
        </form>
        <div className="addSpot-map">
          <MainMapLeaflet canPinCustomMarker />
        </div>
      </>
      )}

      {isSuccess
      && (<p>Votre spot a bien été ajouté !</p>)}
    </main>
  );
}

export default AddSpot;
