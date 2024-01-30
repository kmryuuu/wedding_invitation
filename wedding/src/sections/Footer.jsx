import React, { useEffect } from 'react';
import styled from 'styled-components';
import imgFooter from '../assets/image-footer.jpg';
import logoKaKao from '../assets/kakaotalk.png';
import logoGithub from '../assets/github.png';

export default function Footer() {
  useEffect(() => {
    // Kakao SDK 비동기 로딩
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Kakao SDK가 로드된 후에 실행될 코드
      const KAKAO_KEY = process.env.REACT_APP_KAKAO_KEY;
      // Kakao SDK 초기화
      window.Kakao.init(KAKAO_KEY);
    };
    return () => {
      // 컴포넌트가 언마운트될 때 스크립트 제거 (선택 사항)
      document.body.removeChild(script);
    };
  }, []);

  const handleKakaoShare = () => {
    const KAKAO_KEY = process.env.REACT_APP_KAKAO_KEY;

    if (!KAKAO_KEY) {
      console.error('REACT_APP_KAKAO_KEY가 설정되지 않았습니다.');
      return;
    }

    window.Kakao.Share.createDefaultButton({
      objectType: 'feed',
      content: {
        title: '딸기 치즈 케익',
        description: '#케익 #딸기 #삼평동 #카페 #분위기 #소개팅',
        imageUrl:
          'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        link: {
          mobileWebUrl: 'http://localhost:3000/',
          webUrl: 'http://localhost:3000/',
        },
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: 'http://localhost:3000/',
            webUrl: 'http://localhost:3000/',
          },
        },
      ],
    });
  };

  return (
    <>
      <ImgFooter src={imgFooter} />
      <FooterText className="bold">상성 & 경민</FooterText>
      <FooterText>예쁘게 잘 살겠습니다 ♡</FooterText>
      <FooterContainer>
        <ShareButton onClick={handleKakaoShare}>
          <KakaoLogo src={logoKaKao} />
          카카오톡 공유하기
        </ShareButton>
        <a href="https://github.com/kmryuuu">
          <GithubLogo src={logoGithub} />
          created by kmryuuu
        </a>
      </FooterContainer>
    </>
  );
}

export const ImgFooter = styled.img`
  vertical-align: bottom;
  width: 100%;
  padding: 5rem 2rem 2rem 2rem;
`;

export const Cover = styled.img`
  vertical-align: bottom;
  width: 100%;
`;

export const FooterText = styled.p`
  font-size: 1rem;
  line-height: 2rem;
  padding: 0 2rem;

  &.bold {
    font-family: 'SunBatang-Medium';
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 8rem;

  a {
    width: 100%;
    background-color: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'SunBatang-Light';
    font-size: 0.8rem;
    color: #c6c6c6;
    margin-top: 1.5rem;
    padding: 1rem 0;
  }
`;

export const ShareButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  font-size: 0.8rem;
`;

export const KakaoLogo = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
`;

export const GithubLogo = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
`;
