/* eslint-disable eqeqeq */
/* eslint-disable react/jsx-props-no-spreading */
import './style.scss';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { useGetSpotQuery } from '../../api/spotsApi';
import { useGetCommentsQuery, usePostNewCommentMutation } from '../../api/commentsApi';
import { getUserIdFromJWT } from '../../utils/JWT';
import Comment from './putComment';
import SpotInfo from './SpotInfo';

function Spot() {
  const userId = useRef(getUserIdFromJWT());
  const { spotId } = useParams();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const {
    data: spot,
  } = useGetSpotQuery(spotId);
  console.log('SPOT', spot);

  const {
    data: comments,
  } = useGetCommentsQuery(spotId);

  console.log('comments', comments);
  let listOfComments;
  if (comments) {
    listOfComments = comments.map((comment) => {
      console.log('Ici', comment.user.id, userId.current);
      return (
        <Comment
          key={comment.id}
          comment={comment}
          userId={userId.current}
          spotId={Number(spotId)}
        />
      );
    });
  }
  // console.log(userId.current, spotId);
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
        <SpotInfo
          spot={spot}
          userId={userId.current}
          spotId={Number(spotId)}
        />
      )}
      <div className="spot-right">
        <h2 className="spot-right-comments"> Commentaires </h2>
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
        <h2 className="spot-right-comments"> Tous les commentaires :  </h2>
        {comments && listOfComments}
      </div>
    </main>
  );
}

export default Spot;
