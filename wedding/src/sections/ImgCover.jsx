import React from 'react';
import styled from 'styled-components';
import imageCover from '../assets/image-cover.jpg';

export default function ImgCover() {
  return (
    <>
      <Cover src={imageCover} alt="최상단 이미지" />
    </>
  );
}

export const Cover = styled.img`
  vertical-align: bottom;
  width: 100%;
`;
