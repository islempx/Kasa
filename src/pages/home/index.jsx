import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'
import Card from '../../components/Card'
import heroHome from '../../assets/hero-home.png'
import logements from "../../datas/logements.json"

function Home() {
  return <div>
    <Hero image={heroHome} title="Chez vous, partout et ailleurs" overlay={0.55}/>
    <main className='card-container'>
      {logements.map(({id,cover,title,}) => (
     <Link className='card-link' to={`/fiche/${id}` } key ={id}>
      <Card
          title={title}
          cover={cover} 
      />
      </Link>
     ))}
    </main>
  </div>
}

export default Home