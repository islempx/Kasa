import { Link } from 'react-router-dom'
import './Home.css'
import Hero from '../../components/Hero'
import Card from '../../components/Card'
import heroHome from '../../assets/hero-home.png'
import logements from "../../datas/logements.json"

function Home() {
  return <div>
    <Hero image={heroHome} title="Chez vous, partout ailleurs" overlay={0.55}/>
    <main className='card-container'>
      {logements.map(({id,cover,title}) => (
   
      <Card
          key ={id}
          title={title}
          cover={cover}
        
      />
     ))}
    </main>
  </div>
}

export default Home