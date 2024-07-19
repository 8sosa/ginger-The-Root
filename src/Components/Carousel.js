import { useState } from 'react';
import Placeholder from './Images/placeholder.png';
import './Carousel.css';

function GingerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { src: Placeholder, alt: 'First slide' },
    { src: Placeholder, alt: 'Second slide' },
    { src: Placeholder, alt: 'Third slide' },
    { src: Placeholder, alt: 'Fourth slide' },
    { src: Placeholder, alt: 'Fifth slide' },
    { src: Placeholder, alt: 'Sixth slide' },
    { src: Placeholder, alt: 'Seventh slide' },
  ];

  const numSlides = slides.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + numSlides) % numSlides);
  };

  const getPrevIndex = (index) => (index - 1 + numSlides) % numSlides;
  const getNextIndex = (index) => (index + 1) % numSlides;

  const prevIndex = getPrevIndex(currentIndex);
  const nextIndex = getNextIndex(currentIndex);

  return (
    <div className='slider'>
      <div className='slides-container'>
        <div onClick={prevSlide} className='itemPrev'>
          <img src={slides[prevIndex].src} alt={slides[prevIndex].alt} className='itemImg1'/>
        </div>
        <div className='itemActive'>
          <img src={slides[currentIndex].src} alt={slides[currentIndex].alt} className='itemImg'/>
        </div>
        <div onClick={nextSlide} className='itemNext'>
          <img src={slides[nextIndex].src} alt={slides[nextIndex].alt} className='itemImg2'/>
        </div>
      </div>
    </div>
  );
}

export default GingerCarousel;
