/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDeleteCommentMutation, usePatchCommentMutation } from '../../../api/commentsApi';

function Comment({ comment, userId, spotId }) {
  const [isModifying, setIsModifying] = useState(false);
  const [contentValue, setContentValue] = useState(comment.content);

  const {
    register,
    handleSubmit,
  } = useForm();

  // Mutation de modification d'un commentaire
  const [patchComment] = usePatchCommentMutation();

  // Envoie la requête de suppression d'un commentaire
  const [deleteComment] = useDeleteCommentMutation();
  const handleDeleteComment = (commentId) => {
    deleteComment({ commentId, userId, spotId });
  };

  // Nous permet d'afficher ou non le formulaire de modification d'un spot
  const handleEditComment = () => {
    setIsModifying(!isModifying);
  };

  // Champ controlé pour modifier le contenu de l'input
  const handleChangeContent = (e) => {
    setContentValue(e);
  };

  const onSubmit = (data) => {
    patchComment({
      commentId: comment.id,
      userId,
      spotId,
      data,
    });
    setIsModifying(false);
  };

  return (
    <div>
      <p>
        {comment.user.nickname}
      </p>
      {!isModifying
      && (
      <p className="comment-align">
        {comment.content}
      </p>
      )}
      {isModifying
      && (
      <form onSubmit={handleSubmit(onSubmit)} className="comment-align">
        <input className="signup-form-comments" {...register('content')} type="textarea" value={contentValue} onChange={(e) => handleChangeContent(e.target.value)} />
        <input type="submit" value="Valider" />
      </form>
      )}
      {userId === comment.user.id
      && <button className="deleteButton" onClick={() => handleDeleteComment(comment.id)} type="button">Supprimer</button>}
      {userId === comment.user.id
      && <button className="editButton" onClick={() => handleEditComment()} type="button">Modifier</button>}
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
  spotId: PropTypes.number.isRequired,
};

export default Comment;
