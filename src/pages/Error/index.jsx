import { Link } from 'react-router-dom'

function Error() {
  return <div>
  
  
  <h1 className='number'>404</h1>
   <h2 className='Oups'> Oups! La page que vous demandez n'existe pas.</h2>
   <Link to="/" className="link-home">Retourner sur la page d’accueil</Link>
          </div>
}

export default Error