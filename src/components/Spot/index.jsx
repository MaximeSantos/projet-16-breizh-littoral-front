/* eslint-disable react/jsx-props-no-spreading */
import './style.scss';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { useGetSpotQuery } from '../../api/spotsApi';
import { useGetCommentsQuery, usePostNewCommentMutation } from '../../api/commentsApi';
import { getUserIdFromJWT } from '../../utils/JWT';

function Spot() {
  const userId = useRef(getUserIdFromJWT());
  const { spotId } = useParams();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const {
    data: spot,
  } = useGetSpotQuery(spotId);

  const {
    data: comments,
  } = useGetCommentsQuery(spotId);

  let listOfComments;
  if (comments) {
    console.log(comments);
    listOfComments = comments.map((comment) => (
      <div key={comment.id}>
        <p>
          {comment.user.username}
        </p>
        <p>
          {comment.content}
        </p>
      </div>
    ));
  }
  console.log(userId.current, spotId);
  const [postNewComment, {
    isSuccess,
  }] = usePostNewCommentMutation();

  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log('data', data);
    const dataToSend = { body: data, userId: userId.current, spotId };
    console.log('dataToSend', dataToSend);
    postNewComment(dataToSend);
  };

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
              {isLoggedIn
          && (
            <div>
              <form className="signup-form-comments" onSubmit={handleSubmit(onSubmit)}>
                <input className="signup-form-comments" {...register('content')} type="textarea" />
                <input className="signup-form-button" type="submit" value="Envoyer" />
              </form>
            </div>
          )}
              {!isLoggedIn
            && (
              <div>
                Vous devez etre connecté pour publier un commentaire !
              </div>
            )}
              {isSuccess
        && (
          <div>
            <p>Votre commentaire a bien été envoyé !</p>
          </div>
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
