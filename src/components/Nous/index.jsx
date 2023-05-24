/* eslint-disable max-len */
import './style.scss';
import Surf from '../../assets/images/surf-surfer.png';

function NousPage() {
  return (
    <main className="nous">
      <h1 className="nous-h1"> Qui sommes nous ?</h1>
      <img src={Surf} className="nous-surf" alt="surf" />
      <p className="nous-p">
        Nous sommes une bande de passioné de sports nautiques et de developpement web !
        Nous vous proposons nos services à tous les passionnés et adeptes de sport nautiques
      </p>
      <h2>
        Notre objectif ?
      </h2>
      <p className="nous-p">
        Divertissement et engagement : Le site web offre une expérience ludique et divertissante aux utilisateurs.
        La création des spots en Bretagne est amusante et permet aux utilisateurs partager leurs découvertes.
        En encourageant l&apos;interaction sociale et les échanges, le site vise à favoriser  l&apos;engagement des utilisateurs et à créer une expérience positive et enrichissante.
      </p>
    </main>
  );
}

export default NousPage;
