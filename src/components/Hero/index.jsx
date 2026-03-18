import './Hero.css'

const Hero = ({ image, title, overlay}) => {  
  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${image})` }} 
    >
      <div
        className="hero-overlay"
        style={{ background: `rgba(0,0,0,${overlay})` }}
      ></div>
      <h1 className="hero-title">{title}</h1>  
    </div>
  )}
export default  Hero