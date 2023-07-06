import MainBanner from './MainBanner';
import MainSpots from './MainSpots';
import './style.scss';

function HomeMain() {
  return (
    <main className="home">
      <MainBanner />
      <MainSpots />
    </main>
  );
}

export default HomeMain;
