/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import { useGetSpotQuery } from '../../api/spotsApi';
import { useGetCommentsQuery, usePostNewCommentMutation } from '../../api/commentsApi';
import { setEditSpotCustomMarkerCoordinates } from '../../slices/leafletSlice';
import { getUserIdFromJWT } from '../../utils/JWT';

import Comment from './Comment';
import SpotInfo from './SpotInfo';

import './style.scss';

function SpotMain() {
  const [isModifying, setIsModifying] = useState(false);
  const [newCommentValue, setNewCommentValue] = useState('');

  const userId = useRef(getUserIdFromJWT());
  const { spotId } = useParams();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const {
    data: spot,
  } = useGetSpotQuery(spotId);

  // pas bien
  if (spot) {
    setEditSpotCustomMarkerCoordinates(spot.gps_coordinates);
  }

  const {
    data: comments,
  } = useGetCommentsQuery(spotId);

  let listOfComments;
  if (comments) {
    listOfComments = comments.map((comment) => (
      <Comment
        key={comment.id}
        comment={comment}
        userId={userId.current}
      />
    ));
  }
  // console.log(userId.current, spotId);
  const [postNewComment] = usePostNewCommentMutation();

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const dataToSend = { body: data, userId: userId.current, spotId };
    postNewComment(dataToSend);
    setNewCommentValue('');
  };

  return (
    <main className="spot">
      {spot && (
        <SpotInfo
          spot={spot}
          userId={userId.current}
          spotId={Number(spotId)}
          isModifying={isModifying}
          setIsModifying={setIsModifying}
        />
      )}
      {!isModifying
      && (
        <div className="spot-comments">
          <h2> Ajouter un commentaire </h2>
          <div>
            {isLoggedIn
            && (
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <input {...register('content')} type="textarea" value={newCommentValue} onChange={(e) => setNewCommentValue(e.target.value)} />
                </div>
                <div>
                  <input className="button-basic" type="submit" value="Envoyer" />
                </div>
              </form>
            </div>
            )}
            {!isLoggedIn
            && (
              <div>
                <p>Vous devez etre connecté pour publier un commentaire !</p>
              </div>
            )}
          </div>
          {comments
          && (
          <div>
            <h2 className="spot-comments-list">Tous les commentaires :</h2>
            {listOfComments}
          </div>
          )}
        </div>
      )}
    </main>
  );
}

export default SpotMain;
