import React, { useState } from 'react';
import slide2img from '../assets/slide2img.jpg';
import slide3img from '../assets/slide3img.jpg';
import slide4img from '../assets/slide4img.jpg';
import slide5img from '../assets/slide5img.jpg';
import next from '../assets/next.png';
import prev from '../assets/prev.png';
import '../css/slider.css';

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [slide2img, slide3img, slide4img, slide5img];

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="slider">
      <img
        className="prevbutton"
        src={prev}
        alt="Previous"
        onClick={prevSlide}
      />
      <img
        className="slider-images"
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
      />
      <img
        className="nextbutton"
        src={next}
        alt="Next"
        onClick={nextSlide}
      />
    </div>
  );
};

export default Slider;
