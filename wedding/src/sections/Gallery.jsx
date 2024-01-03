import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import galleryBg from '../assets/gallery-bg.jpg';
import { imgData } from '../assets/imgData';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide(currentSlide === imgData.length - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? imgData.length - 1 : currentSlide - 1);
  };
  return (
    <div>
      <GalleryWrapper>
        <ImgContainer>
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
        <StyledArrowLeft onClick={prevSlide} />
        <StyledArrowRight onClick={nextSlide} />
      </GalleryWrapper>
    </div>
  );
}

export const arrowStyles = css`
  width: 1.3rem;
  height: 1.3rem;
  margin-top: 2rem;
  color: #5d5d5d;
  cursor: pointer;
`;

export const StyledArrowLeft = styled(SlArrowLeft)`
  ${arrowStyles}
  left: 5rem;
`;
export const StyledArrowRight = styled(SlArrowRight)`
  ${arrowStyles}
  right: 5rem;
`;

export const GalleryWrapper = styled.div`
  max-width: 520px;
  overflow: hidden;
  background: url(${galleryBg});
  background-size: 520px auto;
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  height: 650px;
  justify-content: center;
  overflow: hidden;
`;

export const GalleryImg = styled.img`
  width: 520px;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: ${(props) => (props.variSize ? 'contain' : 'cover')};
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
`;
