import { Link } from 'react-router-dom';

import './style.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2 className="footer-title">Breizh Littoral</h2>
        <p className="footer-description">
          Site préparé avec &#128151;
          &nbsp;par des amateurs de sports nautiques &#127754;
          <br />
          et de développement web &#128187;
        </p>
      </div>
      <div className="footer-right">
        <ul className="footer-right-ul">
          <h2 className="footer-title">Liens utiles</h2>
          <li className="footer-right-ul-li">
            <Link to="/nous">Qui sommes nous ?</Link>
          </li>
          <li className="footer-right-ul-li">
            <Link to="/contact">Contactez nous</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
