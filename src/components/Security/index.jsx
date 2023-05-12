import Advices from './Advices';
import MainBanner from './MainBanner';
import Rules from './Rules';
import './style.scss';

function Security() {
  return (
    <div>
      <div className="banner-container">
        <MainBanner />
      </div>
      <div className="container">
        <div className="security-left">
          <Rules />
        </div>
        <div className="security-right" />
        <Advices />
      </div>
    </div>

  );
}

export default Security;
