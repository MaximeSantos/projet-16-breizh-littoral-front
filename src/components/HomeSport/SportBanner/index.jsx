import './style.scss';
import SportBannerImage from '../../../assets/images/liste.png';

function SportBanner() {
  return (
    <div className="sport">
      <div className="sport-banner">
        <img className="banner-picture" src={SportBannerImage} alt="Liste Des Sports" />
      </div>
    </div>
  );
}

export default SportBanner;
