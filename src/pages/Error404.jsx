import { Link } from 'react-router-dom';

function Error404() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Erreur 404</h1>
      <p>
        Oups, il a dû y avoir une erreur. Cette page n&apos;existe pas.
      </p>
      <Link className="link-basic" to="/">Retournez vers la page d&apos;accueil</Link>
    </main>
  );
}

export default Error404;
