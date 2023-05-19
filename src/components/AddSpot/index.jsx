/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { usePostNewSpotMutation } from '../../api/spotsApi';
// import { useGetSportsQuery } from '../../api/sportsApi';
import { useGetDifficultesQuery } from '../../api/difficultesApi';
import './style.scss';

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
  }] = usePostNewSpotMutation();

  const onSubmit = (data) => {
    const dataToSend = {
      ...data,
      user_id: 1,
      gps_coordinates: [48.10688151413752, -4.284942408712835],
      // sport_id: parseInt(data.sport_id, 10),
      difficulty_id: parseInt(data.difficulty_id, 10),
    };

    console.log('dataToSend', dataToSend);
    console.log('dataToSend Stringified', JSON.stringify(dataToSend));
    postNewSpot(JSON.stringify(dataToSend));
  };

  return (
    <main className="addSpot">
      <h1 className="addSpot-title">
        Création d&apos;un nouveau spot
      </h1>
      <div className="signup-form_container">
        {!isSuccess
        && (
        <form className="spotAdd-form" onSubmit={handleSubmit(onSubmit)}>
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
              <input className="spotAdd-form-description" {...register('description')} type="textarea" />
            </div>
          </div>
          {/* <div>
            <h2> Données GPS</h2>
            <input className="spotAdd-form-GPS"
            {...register('gps_coordinates')} placeholder="GPS" />
          </div> */}
          <div>
            <h2> Photo</h2>
            <input className="spotAdd-form-photo" {...register('picture')} type="file" placeholder="photo" />
          </div>
          <input className="signup-form-button" type="submit" value="Valider" />
        </form>
        )}

        {isSuccess
        && (
          <>
            <p>Votre spot a été ajouté !</p>
            <p> </p>
          </>
        )}
      </div>
    </main>
  );
}

export default AddSpot;
