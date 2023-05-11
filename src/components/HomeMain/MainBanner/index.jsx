import './style.scss';

function MainBanner() {
  return (
    <div className="banner">
      <div className="banner-left">
        <h2 className="banner-title"> Description </h2>
        <p className="banner-description">
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
      <div className="banner-right">
        <h2 className="banner-title">Le spot phare du mois !</h2>
        <div className="banner-rectangle" />
      </div>
    </div>
  );
}

// eslint-disable-next-line eol-last
export default MainBanner;