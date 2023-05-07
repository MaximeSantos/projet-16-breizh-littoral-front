import './styles.scss';
import Twitter from '../../assets/images/twitter.svg';
import Insta from '../../assets/images/instagram.svg';
import Facebook from '../../assets/images/facebook.svg';


function Footer () {
  return (
    <div className='footer-container'>
      <div className='footer-leftdiv'>
        <h2 className='footer-h2'> Qui sommes nous ?</h2>
        <p className='footer-text'>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      </div>
      <div className='footer-mid'>
        <h2  className='footer-h2'>Nos Réseaux</h2>
        <ul className='footer-logo'>
          <img className='footer-logo-rs' src={Twitter} alt="react logo" />
          <img className='footer-logo-rs' src={Insta} alt="react logo" />
          <img className='footer-logo-rs' src={Facebook} alt="react logo" />
        </ul>
      </div>
      <div className='footer-rightdiv'>
        <ul className='footer-ul'> <h2 className='footer-h2'>Liens utiles</h2>
          <li> <a href="">Breizh Littoral</a> </li>
          <li> <a href="">Contactez nous</a> </li>
          <li> <a href="">Plan du site</a> </li>
          <li> <a href="">Mentions légales</a> </li>
        </ul>
      </div>
    </div>


  );
}

export default Footer;