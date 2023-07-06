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
          Que vous soyez adepte de surf, de paddle, de bodyboard, wakeboard, planche à voile,
          longe-côte, ou simplement de passage en bord de mer, Breizh Littoral recense les spots de
          sports nautiques en Bretagne, en apportant des indications sur la localisation
          géographique et les  moyens d&apos;accès, mais aussi sur les bonnes pratiques
          environnementales.
        </p>
        {!isLoggedIn
        && (
        <p>
          Découvrez l&apos;emplacement de nombreux spots grâce
          à notre carte interactive et n&apos;hésitez pas à vous&nbsp;
          <Link className="link-basic" to="/inscription">inscrire</Link>
          &nbsp;afin de l&apos;enrichir en ajoutant vous-même vos spots préférés !
        </p>
        )}
        {isLoggedIn
        && (
        <p>
          Découvrez l&apos;emplacement de nombreux spots grâce à notre carte interactive
          et n&apos;hésitez pas à l&apos;enrichir en&nbsp;
          <Link className="link-basic" to="/ajouter">ajoutant vous-même</Link>
          &nbsp;vos spots préférés !
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