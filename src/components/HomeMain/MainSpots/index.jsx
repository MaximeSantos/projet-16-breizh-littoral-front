import SpotCard from './SpotCard';

import './style.scss';

function MainSpots() {
  return (
    <>
      <h2 className="cards-title">Liste des cartes</h2>
      <div className="cards-container">
        <SpotCard />
        <SpotCard />
        <SpotCard />
        <SpotCard />
        <SpotCard />
        <SpotCard />
        <SpotCard />
        <SpotCard />
      </div>
    </>

  );
}

export default MainSpots;
