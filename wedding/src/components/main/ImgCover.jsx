import imageCover from '../../assets/intro.png';
import styled from 'styled-components';

export default function MainWrap() {
  return (
    <MainWrapper>
      <ImgCover src={imageCover} />
    </MainWrapper>
  );
}

const MainWrapper = styled.div``;
const ImgCover = styled.img`
  vertical-align: bottom;
  width: 100%;
`;
