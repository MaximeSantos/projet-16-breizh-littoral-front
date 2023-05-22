/* eslint-disable react/jsx-props-no-spreading */
import './style.scss';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useGetSpotQuery } from '../../api/spotsApi';
import { useGetCommentsQuery, usePostNewCommentMutation } from '../../api/commentsApi';

function Spot() {
  const { spotId } = useParams();
  const {
    data: spot,
  } = useGetSpotQuery(spotId);
  const {
    data: comments,
  } = useGetCommentsQuery();

  let listOfComments;
  if (comments) {
    listOfComments = comments.map((comment) => (
      <option key={comment.id} value={comment.id}>{comment.name}</option>
    ));
  }

  const {
    register,
    handleSubmit,
  } = useForm();

  // Mutation de RTK Query pour permettre de gérer la requête en POST
  const [postNewComment, {
    isSuccess,
  }] = usePostNewCommentMutation();

  const onSubmit = (data) => postNewComment(JSON.stringify(data));

  return (
    <main>
      {spot && (
        <div className="spot">
          <div className="spot-top">
            <h1 className="spot-top-text">{spot.name}</h1>
            <img className="spot-top-banner" src={spot.picture} alt={`Spot ${spot.name}`} />
            <h1 className="spot-left-description"> Description </h1>
            <p>{spot.description}</p>
            <h1 className="spot-left-location">Location </h1>
            <p>{spot.location}</p>
            <p>{spot.gps_coordinates}</p>
          </div>
          <div className="spot-right">
            <h1 className="spot-right-comments"> Commentaires </h1>
            <div>
              {!isSuccess
        && (
        <form className="signup-form-comments" onSubmit={handleSubmit(onSubmit)}>
          <input className="signup-form-comments" {...register('content')} type="textarea" />
          <input className="signup-form-button" type="submit" value="Envoyer" />
        </form>
        )}

              {isSuccess
        && (
          <>
            <p>Félicitation, vous êtes inscrit !</p>
            Connectez-vous !
          </>
        )}
            </div>
            <h1 className="spot-right-comments"> Tous les commentaires :  </h1>
            {comments && listOfComments}
          </div>
        </div>
      )}
    </main>
  );
}

export default Spot;
