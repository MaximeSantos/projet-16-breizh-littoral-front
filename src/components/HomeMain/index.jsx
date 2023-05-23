import MainBanner from './MainBanner';
import MainSpots from './MainSpots';
import './style.scss';

function HomeMain() {
  return (
    <main className="home">
      <MainBanner />
      <MainSpots />
      <div>
        <h2>
          Si ça vous a plu, n&apos;hésitez plus et inscrivez vous pour ajouter votre propre spot !
        </h2>
      </div>
    </main>
  );
}

export default HomeMain;
