import React, { useState, useEffect } from 'react';

interface Slide {
  imageUrl: string;
  altText: string;
  title: string;
  description: string;
}

interface SliderProps {
  slides: Slide[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        goToPrevSlide();
      } else if (event.key === 'ArrowRight') {
        goToNextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide]);

  const goToPrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const goToNextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <button onClick={goToPrevSlide}>Prev</button>
      
      <div style={{ flex: 1 }}>
        <img src={slides[currentSlide].imageUrl} alt={slides[currentSlide].altText} style={{ maxWidth: '100%', maxHeight: '400px' }} />
      </div>

      <div style={{ flex: 1, padding: '0 20px' }}>
        <h2>{slides[currentSlide].title}</h2>
        <p>{slides[currentSlide].description}</p>
      </div>

      <button onClick={goToNextSlide}>Next</button>
    </div>
  );
};

export default Slider;
