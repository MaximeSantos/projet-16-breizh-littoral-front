import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/Footer';
import { setDummyValue } from '../slices/dummySlice';

function Test() {
  const dispatch = useDispatch();
  const displayTest = useSelector((state) => state.dummy.dummyValue);

  const handleButtonClick = () => {
    dispatch(setDummyValue());
  };

  return (
    <>
      <main>
        <button type="button" onClick={handleButtonClick}> Test de RTK </button>

        <h1>Page de test</h1>

        <p>
          Test Test Test Test Test Test Test Test Test Test Test Test Test
          Test Test Test Test Test Test Test Test Test Test Test Test Test
        </p>

        {displayTest
        && <p>Test de RTK</p>}

      </main>
      <Footer />
    </>
  );
}

export default Test;
