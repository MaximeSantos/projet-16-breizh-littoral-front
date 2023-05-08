import { Link } from 'react-router-dom';

// import Twitter from '../../assets/images/twitter.svg';
// import Insta from '../../assets/images/instagram.svg';
// import Facebook from '../../assets/images/facebook.svg';

import './styles.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2 className="footer-title">Breizh Littoral</h2>
        <p className="footer-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique elit vitae
          purus suscipit dapibus. Etiam et consequat sem. Vestibulum pellentesque ligula lacus.
          Nam fermentum id dolor in auctor. Mauris luctus nisl lorem, vitae tempor mi condimentum a.
          Sed quis felis ut orci convallis rhoncus sed iaculis diam. Donec nec.
        </p>
      </div>

      {/* <div className="footer-middle">
        <h2 className="footer-h2">Nos Réseaux</h2>
        <ul className="footer-logo">
          <img className="footer-logo-rs" src={Twitter} alt="Logo twitter" />
          <img className="footer-logo-rs" src={Insta} alt="Logo Instagram" />
          <img className="footer-logo-rs" src={Facebook} alt="Logo Facebook" />
        </ul>
      </div> */}

      <div className="footer-right">
        <ul className="footer-right-ul">
          <h2 className="footer-title">Liens utiles</h2>
          <li className="footer-right-ul-li">
            <Link to="/nous">Qui sommes nous ?</Link>
          </li>
          <li className="footer-right-ul-li">
            <Link to="/contact">Contactez nous</Link>
          </li>
          <li className="footer-right-ul-li">
            <Link to="/plan">Plan du site</Link>
          </li>
          <li className="footer-right-ul-li">
            <Link to="/mentions">Mentions légales</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
