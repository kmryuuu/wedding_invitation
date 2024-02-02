import React from 'react';
import styled from 'styled-components';
import imgFooter from '../assets/image-footer.jpg';
import logoKaKao from '../assets/kakaotalk.png';
import logoGithub from '../assets/github.png';

export default function Footer() {
  const kakaoButton = () => {
    const kakaoImage = process.env.PUBLIC_URL + '/gallery/gallery-13.jpg';
    const KAKAO_KEY = process.env.REACT_APP_KAKAO_KEY;

    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init(KAKAO_KEY);
      }

      kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '상성 & 경민 결혼합니다',
          description: '2024. 04. 28 일요일 오후 12:00',
          imageUrl: kakaoImage,
          link: {
            mobileWebUrl: 'http://localhost:3000',
            webUrl: 'http://localhost:3000',
          },
        },
        buttons: [
          {
            title: '청첩장 보러가기',
            link: {
              mobileWebUrl: 'http://localhost:3000',
              webUrl: 'http://localhost:3000',
            },
          },
        ],
      });
    }
  };

  return (
    <>
      <ImgFooter src={imgFooter} />
      <FooterText className="bold">상성 & 경민</FooterText>
      <FooterText>예쁘게 잘 살겠습니다 ♡</FooterText>
      <FooterContainer>
        <ShareButton onClick={kakaoButton}>
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
