import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.scss';

function MainBanner() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className="banner">
      <div className="banner-welcome">
        <h2> Bienvenue sur Breizh Littoral </h2>
        <p>
          Que vous soyez adepte de surf, paddle, bodyboard, longboard, wakeboard, kitesurf,
          planche à voile, longe-côte, chasse sous-marine ou simplement de passage en bord de mer,
          Breizh Littoral recense les spots de sports nautiques en Bretagne, en apportant
          des indications sur la localisation géographique et les moyens d&#39;accès, mais aussi sur
          les bonnes pratiques environnementales ou les conditions météos.
        </p>
        {!isLoggedIn
        && (
        <p>
          <Link className="link-basic" to="/inscription">Rejoignez-nous</Link>
          &nbsp;pour partager vos spots préférés !
        </p>
        )}
        {isLoggedIn
        && (
        <p>
          <Link className="link-basic" to="/ajouter">Partagez vos spots préférés !</Link>
        </p>
        )}
      </div>
      <img
        className="banner-picture"
        src="https://cdn.pixabay.com/photo/2017/01/07/14/32/kite-surfing-1960536_1280.jpg"
        alt="Spot phare du mois"
      />
    </div>
  );
}

// eslint-disable-next-line eol-last
export default MainBanner;