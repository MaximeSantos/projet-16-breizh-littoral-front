import { useSelector } from 'react-redux';

import Navbar from '../components/Navbar';
import MainMapModal from '../components/MainMapModal';
import Footer from '../components/Footer';
import HomeMain from '../components/HomeMain';

import './Home.scss';

function Home() {
  const displayMainMapModal = useSelector((state) => state.mainMapModal.displayMainMapModal);
  const displayProfileModal = useSelector((state) => state.profileModal.displayProfileModal);

  return (
    <>
      <Navbar />
      <main>
        <HomeMain />

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
