import './styles.scss';

function SpotCard() {
  return (
    <header className="spotcard">
      <div className="spotcard-left">
        <h2 className="spotcard-title"> description </h2>
        <p className="spotcard-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique elit vitae
          purus suscipit dapibus. Etiam et consequat sem. Vestibulum pellentesque ligula lacus.
          Nam fermentum id dolor in auctor. Mauris luctus nisl lorem, vitae tempor mi condimentum a.
          Sed quis felis ut orci convallis rhoncus sed iaculis diam. Donec nec.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique elit vitae
          purus suscipit dapibus. Etiam et consequat sem. Vestibulum pellentesque ligula lacus.
          Nam fermentum id dolor in auctor. Mauris luctus nisl lorem, vitae tempor mi condimentum a.
          Sed quis felis ut orci convallis rhoncus sed iaculis diam. Donec nec.
        </p>
      </div>
      <div className="spotcard-right">
        <p className="spotcard-p">Le spot phare du mois !</p>
        <div className="spotcard-rectangle"><p className="spotcard-cache">rectangle</p></div>
      </div>
    </header>
  );
}

export default SpotCard;
