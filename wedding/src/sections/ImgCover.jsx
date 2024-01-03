import imageCover from '../assets/image-cover.png';
import styled from 'styled-components';

export default function MainWrap() {
  return (
    <>
      <ImgCover src={imageCover} alt="최상단 이미지" />
    </>
  );
}

const ImgCover = styled.img`
  vertical-align: bottom;
  width: 100%;
`;
