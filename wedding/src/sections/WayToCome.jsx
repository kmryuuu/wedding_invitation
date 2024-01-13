import React from 'react';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import useKakaoLoader from '../hook/useKakaoLoader';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { HeadText, DescText } from './Calender';
import iconCopy from '../assets/icon-copy.png';

export default function WayToCome() {
  useKakaoLoader();

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
    <div>
      <WayToComeWrapper>
        <StyledToastContainer />
        <HeadText>오시는길</HeadText>
        <CopyContainer>
          <DescText>서울 강남구 도곡로99길 16</DescText>
          <DescText>6층 트라디노이</DescText>
          <CopyToClipboard
            text="서울 강남구 도곡로99길 16"
            onCopy={handleCopyClick}
          >
            <ClipToCopy></ClipToCopy>
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
            height: '350px',
          }}
          level={3} // 지도의 확대 레벨
        >
          <MapMarker
            position={{ lat: 37.501854537491795, lng: 127.06600921351016 }}
          ></MapMarker>
        </Map>
      </WayToComeWrapper>
    </div>
  );
}

export const WayToComeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  margin-top: 4rem;
`;

export const CopyContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ClipToCopy = styled.button`
  position: absolute;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  background: url(${iconCopy}) no-repeat center;
  background-color: #f2f2f2;
  background-size: 70%;
  border-radius: 50%;
  border: none;
  text-align: center;
  top: 0;
  right: -2.5rem;
`;

export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    font-size: 1rem;
    border-radius: 0.5rem;
    padding: 1rem 1.5rem;
    color: #fff;
    background: rgba(0, 0, 0, 0.85);
    bottom: 1rem;
  }
`;
