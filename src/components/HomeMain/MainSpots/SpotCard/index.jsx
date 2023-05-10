import './style.scss';

function SpotCard() {
  return (
    <div className="card">
      {/* <img src="#" alt="#" /> */}
      <div className="card-placeholder" />
      <h2 className="card-title">Le nom du spot</h2>
      <div className="card-footer">
        <div className="card-footer-left">
          <div className="card-placeholder--small" />
          <div className="card-placeholder--small" />
        </div>
        <div className="card-footer-right">
          <button type="button" className="card-footer-right-button">
            <img src="src/assets/icons/navbarButton-favoris.svg" alt="Bouton ajouter aux favoris" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SpotCard;
