import { useState } from 'react';
import './Slideshow.css';

const Slideshow = ({ pictures, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === pictures.length - 1 ? 0 : currentIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? pictures.length - 1 : currentIndex - 1
    );
  };

  return (
    <div className={`slideshow ${className}`}>
      
      <img 
        className="slideshow-image" 
        src={pictures[currentIndex]} 
        alt="logement" 
      />

      {pictures.length > 1 && (
        <button onClick={prevSlide} className="arrow-btn left">
          <i className="fa-solid fa-angle-left"></i>
        </button>
      )}

      {pictures.length > 1 && (
        <button onClick={nextSlide} className="arrow-btn right">
          <i className="fa-solid fa-angle-right"></i>
        </button>
      )}

      {pictures.length > 1 && (
        <div className="counter">
          {currentIndex + 1}/{pictures.length}
        </div>
      )}
    </div>
  );
};

export default Slideshow;