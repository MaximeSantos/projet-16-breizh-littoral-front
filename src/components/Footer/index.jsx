import { Link } from 'react-router-dom';

import './style.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-description_container">
        <h2 className="footer-title">Breizh Littoral</h2>
        <p className="footer-description">
          Site préparé avec &#128151;
          &nbsp;par des amateurs de sports nautiques &#127754; et de développement web &#128187;
        </p>
      </div>
      <div className="footer-links_container">
        <ul>
          <h2 className="footer-title">Liens utiles</h2>
          <li>
            <Link className="button-minimalist" to="/nous">Qui sommes nous ?</Link>
          </li>
          <li>
            <Link className="button-minimalist" to="/contact">Contactez nous</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
