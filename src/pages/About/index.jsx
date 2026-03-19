import './About.css'
import Hero from '../../components/Hero'
import heroAbout from '../../assets/hero-about.png'
import Collapse from '../../components/Collapse'
import { aboutList } from '../../datas/aboutlist';



function About() {
  return <div>
    <Hero  image = {heroAbout} alt="image d'un paysage montagneux"  overlay={0.0}/>
     {aboutList.map(({content,title,}) => (
     
      <Collapse
          title={title}
          content={content} 
      />
    
     ))}
    
  </div>
}

export default About