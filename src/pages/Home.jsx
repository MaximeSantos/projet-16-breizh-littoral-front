import { useSelector } from 'react-redux';

import Navbar from '../components/Navbar';
import MainMapModal from '../components/MainMapModal';
import Footer from '../components/Footer';
import HomeMain from '../components/HomeMain';

import './Home.scss';

function Home() {
  const displayMainMapModal = useSelector((state) => state.mainMapModal.displayMainMapModal);

  return (
    <>
      <Navbar />
      <main>
        <HomeMain />

        {displayMainMapModal
        && <MainMapModal />}
      </main>
      <Footer />
    </>
  );
}

export default Home;
