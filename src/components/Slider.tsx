import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Slide {
  imageUrl: string;
  imageUrlMobile: string;
  altText: string;
  title: string;
  description: string;
}

interface SliderProps {
  slides: Slide[];
}

const StyledSlider = styled.div`
  display: flex;
  height: 70%;

  @media (max-width: 780px) {
    flex-direction: column;
    height: auto;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  @media (max-width: 1050px) {
    flex: 0.6;
  }
`;

const TextContainer = styled.div`
  flex: 0.5;
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-content: center;
  justify-content: center;
  position: relative;
  width: 40%;

  @media (max-width: 1050px) {
    padding: 80px 80px;
  }
  @media (max-width: 780px) {
    flex-direction: column;
    height: auto;
    width: 100%;
    padding: 40px 40px;
  }
`;

const SlideTitle = styled.h1`
  font-weight: 800;
  font-size: 40px;
`;

const SlideDescription = styled.p`
  line-height: 1.4;
  color: hsl(0, 0%, 63%);
  font-weight: 600;
  font-size: 14px;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  letter-spacing: 15px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: color 0.3s;

  &:hover {
    color: hsl(0, 0%, 63%); 
    
    svg path {
      fill: hsl(0, 0%, 63%);
    }
  }

  svg {
    margin-left: 8px;
    transition: fill 0.3s;
  }
`;

const NavButtons = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;

  @media (max-width: 1050px) {
    top: -71px;
    right: 0;
    left: unset;
  }
`;

const NavButton = styled.button`
  padding: 20px 25px;
  background: hsl(0, 0%, 0%);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: hsl(0, 0%, 27%); 
  }
`;

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    <StyledSlider>
      <ImageContainer>
        <img
          src={windowWidth < 780 ? slides[currentSlide].imageUrlMobile : slides[currentSlide].imageUrl}
          alt={slides[currentSlide].altText}
          style={{ width: '100%', height: '100%' }}
        />
      </ImageContainer>

      <TextContainer>
        <SlideTitle>{slides[currentSlide].title}</SlideTitle>
        <SlideDescription>{slides[currentSlide].description}</SlideDescription>
        <StyledLink to="/shop">
          SHOP NOW
          <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
            <path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" />
          </svg>
        </StyledLink>
        <NavButtons>
          <NavButton onClick={goToPrevSlide}>
            <img src="images/icon-angle-left.svg" alt="arrow-left" />
          </NavButton>
          <NavButton onClick={goToNextSlide}>
            <img src="images/icon-angle-right.svg" alt="arrow-right" />
          </NavButton>
        </NavButtons>
      </TextContainer>
    </StyledSlider>
  );
};

export default Slider;
