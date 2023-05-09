import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import './Home.scss';

function Home() {
  const displayMainMapModal = useSelector((state) => state.mainMapModal.displayMainMapModal);
  const displayProfileModal = useSelector((state) => state.profileModal.displayProfileModal);

  return (
    <div>
      <Navbar />
      <h1>Hello</h1>
      <p>
        Test Test Test Test Test Test Test Test Test Test Test Test Test
        Test Test Test Test Test Test Test Test Test Test Test Test Test
      </p>
      {displayMainMapModal
      && <p>Display Main Map</p>}
      {displayProfileModal
      && <p>Display Profile Modal</p>}
    </div>
  );
}

export default Home;
