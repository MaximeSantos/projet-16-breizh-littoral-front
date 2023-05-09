import { useSelector } from 'react-redux';

import Navbar from '../components/Navbar';
import MainMapModal from '../components/MainMapModal';
import Footer from '../components/Footer';

import './Home.scss';

function Home() {
  const displayMainMapModal = useSelector((state) => state.mainMapModal.displayMainMapModal);
  const displayProfileModal = useSelector((state) => state.profileModal.displayProfileModal);

  return (
    <>
      <Navbar />
      <main>
        <h1>Hello</h1>
        <p>
          Test Test Test Test Test Test Test Test Test Test Test Test Test
          Test Test Test Test Test Test Test Test Test Test Test Test Test
        </p>
        {displayMainMapModal
        && <MainMapModal />}
        {displayProfileModal
        && <p>Display Profile Modal</p>}
      </main>
      <Footer />
    </>
  );
}

export default Home;
