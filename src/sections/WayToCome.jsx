import React from 'react';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import logoKakaoMap from '../assets/kakao-map.png';
import logoNaverMap from '../assets/naver-map.png';
import logoTmap from '../assets/tmap.png';
import { Hr } from './Calender';

export default function WayToCome() {
  const TOAST = {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 1000,
    closeButton: false,
    icon: true,
    hideProgressBar: true,
    progress: undefined,
  };

  const handleCopyClick = (isCopySuccess) => {
    if (isCopySuccess) {
      toast.success('주소가 복사되었습니다!', TOAST);
    } else {
      toast.error('주소 복사에 실패했습니다.', TOAST);
    }
  };

  return (
    <WayToComeWrapper>
      <StyledToastContainer />
      <HeadText>오시는길</HeadText>
      <CopyContainer>
        <MapText className="bold">6층 트라디노이</MapText>
        <MapText>서울 강남구 도곡로 99길 16</MapText>
        <CopyToClipboard
          text="서울 강남구 도곡로99길 16"
          onCopy={handleCopyClick}
        >
          <CopyButton>주소 복사하기</CopyButton>
        </CopyToClipboard>
      </CopyContainer>
      <Map // 지도를 표시할 Container
        id="map"
        center={{
          // 지도의 중심좌표
          lat: 37.501854537491795,
          lng: 127.06600921351016,
        }}
        style={{
          // 지도의 크기
          width: '100%',
          height: '300px',
        }}
        level={5} // 지도의 확대 레벨
      >
        <MapMarker
          position={{ lat: 37.501854537491795, lng: 127.06600921351016 }}
        ></MapMarker>
      </Map>
      <AppContainer>
        <AppLink>
          <a href="https://kko.to/xuwbWyYNFb" target="_blank" rel="noreferrer">
            <AppLogo src={logoKakaoMap} alt="카카오맵" />
            카카오맵
          </a>
        </AppLink>
        <AppLink>
          <a
            href="https://surl.tmobiapi.com/fd6ebd56"
            target="_blank"
            rel="noreferrer"
          >
            <AppLogo src={logoTmap} alt="티맵" />
            티맵
          </a>
        </AppLink>
        <AppLink>
          <a href="https://naver.me/5v4CdByx" target="_blank" rel="noreferrer">
            <AppLogo src={logoNaverMap} alt="네이버 지도" />
            네이버 지도
          </a>
        </AppLink>
      </AppContainer>
      <NoticeContainer>
        <NoticeText>
          식장 환경 상 화환은 정중히 사양하겠습니다. <br /> 양해 부탁드립니다.
        </NoticeText>
        <Hr />
      </NoticeContainer>
      <LocationContainer>
        <LocationInfo>지하철</LocationInfo>
        <Location>
          2호선 삼성역 3번출구 도보 10분 <br />
          3호선 학여울역 1번출구 도보 10분
        </Location>
        <LocationInfo>버스</LocationInfo>
        <Location>대치 2동 주민센터, 레미안 하이스턴 하차 도보 1분</Location>
        <LocationInfo>주차장</LocationInfo>
        <Location>건물 내 무료 발렛 주차 가능 (30대)</Location>
        <NoticeText>
          ※ 당일에 혼잡할 수 있으니 대치 2동 문화센터 공영주차장 <br /> 이용을
          권장드립니다. (도보 3분, 주차비 지원)
        </NoticeText>
      </LocationContainer>
    </WayToComeWrapper>
  );
}

export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    font-size: 1rem;
    border-radius: 0.5rem;
    padding: 1rem 1.5rem;
    color: #fff;
    background: rgba(0, 0, 0, 1);
    bottom: 1rem;
  }
`;

export const WayToComeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
  padding-bottom: 3rem;
`;

export const HeadText = styled.p`
  font-size: 1.2rem;
  color: #777033;
  text-align: center;
  letter-spacing: 0.2rem;
`;

export const MapText = styled.p`
  font-size: 1rem;
  text-align: center;
  line-height: 2rem;

  &.bold {
    font-family: 'SunBatang-Medium';
  }
`;

export const CopyContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem 0 3rem 0;
`;

export const CopyButton = styled.button`
  cursor: pointer;
  padding: 1rem 1.5rem;
  background-color: #fcfaf1;
  border-radius: 4rem;
  margin-top: 2rem;
  color: #959977;
  font-size: 0.8rem;
`;

export const AppContainer = styled.div`
  width: 100%;
  height: 4.5rem;
  background-color: #fcfaf1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  a {
    text-decoration-line: none;
    color: var(--color-desc-black);
    font-size: 0.8rem;
  }
`;

export const AppLink = styled.div`
  display: flex;
`;

export const AppLogo = styled.img`
  width: 2rem;
  height: 2rem;
  vertical-align: middle;
  margin-right: 0.2rem;
`;

export const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;
  font-size: 0.8rem;
  margin-top: 3rem;
  padding: 0 1.2rem 4rem 1.2rem;
`;

export const LocationInfo = styled.p`
  margin-top: 2rem;
  color: #959977;
  font-size: 0.9rem;
`;

export const Location = styled.p`
  margin-top: 0.5rem;
  color: #1c1c1c;
  line-height: 1.7rem;
`;

export const NoticeContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: 2rem 2rem 0 2rem;
`;
export const NoticeText = styled.p`
  font-size: 0.8rem;
  line-height: 1.5rem;
  color: #6f6666;
`;
