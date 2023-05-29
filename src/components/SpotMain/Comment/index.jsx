/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDeleteCommentMutation, usePatchCommentMutation } from '../../../api/commentsApi';

function Comment({ comment, userId }) {
  const [isModifying, setIsModifying] = useState(false);
  const [commentValue, setCommentValue] = useState(comment.content);

  const {
    register,
    handleSubmit,
  } = useForm();

  // Mutation de modification d'un commentaire
  const [patchComment] = usePatchCommentMutation();

  // Envoie la requête de suppression d'un commentaire
  const [deleteComment] = useDeleteCommentMutation();

  const onSubmit = (data) => {
    patchComment({
      commentId: comment.id,
      data,
    });
    setIsModifying(false);
  };

  return (
    <div className="comment">
      <p>
        {comment.user.nickname}
        &nbsp;:
      </p>
      {!isModifying
      && (
      <div className="comment-container">
        <p className="comment-content">{comment.content}</p>
        {userId === comment.user.id
        && (
          <div>
            <button className="button-minimalist" onClick={() => setIsModifying(!isModifying)} type="button">{isModifying ? 'Annuler' : 'Modifer'}</button>
            <button className="button-minimalist" onClick={() => deleteComment(comment.id)} type="button">Supprimer</button>
          </div>
        )}
      </div>
      )}
      {isModifying
      && (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register('content')} value={commentValue} onChange={(e) => setCommentValue(e.target.value)} />
        </div>
        <div>
          <input className="button-basic" type="submit" value="Valider" />
        </div>
      </form>
      )}
      {/* {userId === comment.user.id
      && <button className="button-minimalist" onClick={() => setIsModifying(!isModifying)}
      type="button">{isModifying ? 'Annuler' : 'Modifer'}</button>}
      {userId === comment.user.id
      && <button className="button-minimalist" onClick={() => deleteComment(comment.id)}
      type="button">Supprimer</button>} */}
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    user: PropTypes.shape({
      nickname: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  userId: PropTypes.number.isRequired,
};

export default Comment;
