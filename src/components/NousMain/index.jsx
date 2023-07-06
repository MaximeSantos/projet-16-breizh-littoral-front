/* eslint-disable max-len */
import { Link } from 'react-router-dom';

import Surf from '../../assets/images/surf-surfer.png';

import './style.scss';

function NousMain() {
  return (
    <main className="nous">
      <h1> Qui sommes nous ?</h1>
      <img src={Surf} alt="surf" />
      <p>
        Nous sommes un groupe de cinq personnes passionées de sports nautiques et de developpement web !
        Dans le cadre de notre projet professionnel de fin d&apos;études, nous avons passé un mois à conceptualiser puis développer ce site internet.
      </p>
      <h2>
        Notre objectif ?
      </h2>
      <p>
        Nous avons souhaité nous dépasser et prouver qu&apos;en partant de zéro, nous sommes capables d&apos;évaluer les besoins d&apos;un nouveau projet, d&apos;élaborer un cahier des charges et de travailler en équipe dans un environnement professionnel, le tout afin de proposer un site clair, épuré et accessible.
      </p>
      <p>
        Nous éprouvons beaucoup de fierté pour le travail que nous avons accompli.
        Si vous avez des questions ou que vous souhaitez en apprendre plus sur nous,&nbsp;
        <Link className="link-basic" to="/contact">contactez-nous!</Link>
      </p>
    </main>
  );
}

export default NousMain;
