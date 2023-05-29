import Surf from '../../assets/images/surfer.jpg';
import Leash from '../../assets/images/leash.jpg';
import Meteo from '../../assets/images/meteo.jpg';
import Bag from '../../assets/images/sac-a-dos.jpg';
import Planche from '../../assets/images/planche.jpg';
import Gilet from '../../assets/images/gilet-sauvetage.jpg';
import Gourde from '../../assets/images/gourde.jpg';
import Dune from '../../assets/images/dune.jpg';
import Creme from '../../assets/images/creme-solaire.jpg';
import Combinaison from '../../assets/images/combinaison.jpg';
import enfantSurf from '../../assets/images/enfant-surf.jpg';
import Drapeau from '../../assets/images/drapeau.jpg';

import './style.scss';

function AdvicesMain() {
  return (
    <main className="advices">
      <div className="advices-header">
        <h1>Sécurité et Conseils</h1>
        <p>
          Retrouvez sur cette page tous les conseils utiles
          à la bonne pratique de votre sport préféré !
        </p>
      </div>
      <div className="advices-container">
        <div>
          <h2 className="advices-title">Règles de sécurité</h2>
          <div className="advices-element">
            <img className="advices-img" src={Meteo} alt="Météo" />
            <p>
              Avant de partir renseignez-vous, sur les prévisions météo, les heures de marées,
              la force et la direction du vent pour la journée : elles sont les conditions
              d’une pratique en toute sécurité !
            </p>
          </div>
          <div className="advices-element">
            <img className="advices-img" src={Planche} alt="Planches" />
            <p>
              Vérifiez l&apos;état de votre équipement avant de partir.
              Il est réglementé et précis en fonction des pratiques nautiques.
            </p>
          </div>
          <div className="advices-element">
            <img className="advices-img" src={Gilet} alt="Gilet de sauvetage" />
            <p>
              Pour les enfants de moins de 12 ans que vous souhaiteriez initier à un sport,
              pensez au gilet de sauvetage
            </p>
          </div>
          <div className="advices-element">
            <img className="advices-img" src={Drapeau} alt="Drapeau" />
            <p>
              Renseignez-vous sur les zones autorisées, souvent signalées par des fanions.
              Il est interdit de surfer dans la zone de baignade surveillée.
            </p>
          </div>
        </div>
        <div>
          <h2 className="advices-title">Nos conseils</h2>
          <div className="advices-element">
            <img className="advices-img" src={enfantSurf} alt="Enfant" />
            <p>
              Surveillez vos proches et surtout les enfants dans l’eau,
              pour pouvoir donner l’alerte immédiatement en cas de difficulté.
            </p>
          </div>
          <div className="advices-element">
            <img className="advices-img" src={Combinaison} alt="Combinaison" />
            <p>
              Étudiez le plan d’eau et assurez-vous auprès des autres surfeurs
              et des clubs que votre niveau correspond à la difficulté technique du site.
              Le froid est le principal danger de ces activités,
              pensez à porter une combinaison adaptée.
            </p>
          </div>
          <div className="advices-element">
            <img className="advices-img" src={Surf} alt="Surfeur" />
            <p>
              Face à un autre surfeur qui s’élance : signalez-vous,
              ne lâchez pas votre planche et progressez en sens inverse du déferlement.
            </p>
          </div>
          <div className="advices-element">
            <img className="advices-img" src={Leash} alt="Leash" />
            <p>Attachez toujours votre cordon de sécurité (leash) à la cheville.</p>
          </div>
        </div>
        <div>
          <h2 className="advices-title">Respect de l&apos;environnement</h2>
          <div className="advices-element">
            <img className="advices-img" src={Bag} alt="Sac à dos" />
            <p>
              Préférez des sacs lourds ou des paniers pour transporter vos affaires
              car un sac trop léger risquerait de s’envoler.
              Soyez attentif à tous les objets légers que le vent risque
              d’entraîner dans l’eau comme les sacs ou bouteilles en plastique.
            </p>
          </div>
          <div className="advices-element">
            <img className="advices-img" src={Gourde} alt="Gourde" />
            <p>
              Privilégiez les supports réutilisables et recyclez lorsque cela est possible.
              Et évacuez toujours vos ordures dans les emplacements réservés sur les plages.
            </p>
          </div>
          <div className="advices-element">
            <img className="advices-img" src={Dune} alt="Dune" />
            <p>
              Les spots de surf sont souvent entourés de dunes, qu’il convient de préserver.
              En marchant sur les sentiers prévus à cet effet,
              vous protégerez la faune et la flore présentes sur les dunes.
            </p>
          </div>
          <div className="advices-element">
            <img className="advices-img" src={Creme} alt="Crème solaire" />
            <p>
              La crème solaire est l’alliée du surfeur.
              Mais les composants chimiques qu’elle contient sont souvent néfastes
              pour les organismes marins. Optez pour un produit bio dont la composition
              sera meilleure pour l&apos;océan.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AdvicesMain;
