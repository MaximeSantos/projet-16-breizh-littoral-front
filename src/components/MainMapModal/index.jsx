/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useDispatch } from 'react-redux';
import { toggleDisplayMainMapModal } from '../../slices/mainMapModalSlice';

import './style.scss';

function MainMapModal() {
  const dispatch = useDispatch();

  const handleDisplayMainMapModal = () => {
    dispatch(toggleDisplayMainMapModal());
  };

  return (
    <div className="modal">
      <div onClick={handleDisplayMainMapModal} className="modal-overlay" />
      <div className="modal-content">
        <h2 className="modal-title">Liste sur carte</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          perferendis suscipit officia recusandae, eveniet quaerat assumenda
          id fugit, dignissimos maxime non natus placeat illo iusto!
          Sapiente dolorum id maiores dolores? Illum pariatur possimus
          quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
          placeat tempora vitae enim incidunt porro fuga ea.
        </p>
        <button type="button" className="modal-close" onClick={handleDisplayMainMapModal}>
          X
        </button>
      </div>
    </div>
  );
}

export default MainMapModal;
