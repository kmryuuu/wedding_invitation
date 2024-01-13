import React, { useState } from 'react';
import styled from 'styled-components';
import galleryBg from '../assets/gallery-bg.jpg';
import { imgData } from '../assets/imgData';

export default function Gallery() {
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const difference = touchStartX - touchEndX;

    if (difference > 150) {
      // 왼쪽으로 swipe하면 다음 슬라이드
      setCurrentSlide((currentSlide) =>
        currentSlide === imgData.length - 1 ? 0 : currentSlide + 1
      );
    } else if (difference < -150) {
      // 오른쪽으로 swipe하면 이전 슬라이드
      setCurrentSlide((currentSlide) =>
        currentSlide === 0 ? imgData.length - 1 : currentSlide - 1
      );
    }
  };

  return (
    <GalleryWrapper>
      <ImgContainer
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {imgData.map((img, index) => (
          <GalleryImg
            key={index}
            src={img.src}
            alt={img.alt}
            isVisible={currentSlide === index}
            variSize={img.width > img.height}
          />
        ))}
      </ImgContainer>
      <IndicatorWrapper>
        {imgData.map((_, index) => (
          <IndicatorButton
            key={index}
            onClick={() => setCurrentSlide(index)}
            isCurrentSlide={currentSlide === index}
          />
        ))}
      </IndicatorWrapper>
    </GalleryWrapper>
  );
}

export const GalleryWrapper = styled.div`
  width: 100%;
  padding-bottom: 3rem;
  background: url(${galleryBg});
  background-size: 100% auto;
`;

export const ImgContainer = styled.div`
  cursor: pointer;
  max-width: 400px;
  height: 600px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  transition: transform 0.2s ease;
`;

export const GalleryImg = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: ${(props) => (props.variSize ? 'contain' : 'cover')};
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
`;

export const IndicatorWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IndicatorButton = styled.button`
  cursor: pointer;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  border: none;
  outline: none;
  margin: 0 0.2rem;
  background-color: ${(props) => (props.isCurrentSlide ? '#000' : '#afafaf;')};
`;
