import { Link } from 'react-router-dom'
import './About.css'
import Hero from '../../components/Hero'
import heroAbout from '../../assets/hero-about.png'


function About() {
  return <div>Page About
    <Hero  image = {heroAbout} alt="image d'un paysage montagneux"  overlay={0.0}/>
  </div>
}

export default About