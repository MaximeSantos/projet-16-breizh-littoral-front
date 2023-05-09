import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.scss';

function Home() {
  const displayMainMapModal = useSelector((state) => state.mainMapModal.displayMainMapModal);
  const displayProfileModal = useSelector((state) => state.profileModal.displayProfileModal);

  return (
    <div>
      <Navbar />
      <main>
        <h1>Hello</h1>
        <p>
          Test Test Test Test Test Test Test Test Test Test Test Test Test
          Test Test Test Test Test Test Test Test Test Test Test Test Test
        </p>
        {displayMainMapModal
        && <p>Display Profile Modal</p>}
        {displayProfileModal
        && <p>Display Profile Modal</p>}
      </main>
      <Footer />
    </div>
  );
}

export default Home;
