import { Link } from 'react-router-dom'
import './Home.css'
import Hero from '../../components/Hero'
import heroHome from '../../assets/hero-home.png'


function Home() {
  return <div>
    <Hero image={heroHome} title="Chez vous, partout ailleurs" overlay={0.55}/>
  </div>
}

export default Home