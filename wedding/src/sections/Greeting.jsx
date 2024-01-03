import React from 'react';
import styled from 'styled-components';
import HostInfo from '../components/greetings/HostInfo';
import introImage from '../assets/image-greeting.png';
import Heart from '../components/greetings/Heart';

export default function Greeting() {
  return (
    <IntroWarpper>
      <Date>2024 04 28</Date>
      <IntroImg src={introImage} alt="인트로 이미지" />
      <InfoContainer>
        <HostInfo subText="신랑" hostName="이상성" />
        <Symbol>・</Symbol>
        <HostInfo subText="신부" hostName="류경민" />
      </InfoContainer>
      <MainContainer>
        <MainTit>
          상성 <br /> & <br />
          경민
        </MainTit>
        <MainSub>결혼합니다.</MainSub>
      </MainContainer>
      <Heart />
      <IntroDesc>
        다섯 번째 맞이하는 따뜻한 봄날, <br />
        부부가 되려합니다. <br />그 시작을 함께 축복해 주세요!
      </IntroDesc>
    </IntroWarpper>
  );
}

export const IntroWarpper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
`;

export const Date = styled.p`
  color: var(--color-main);
  width: 8rem;
  height: 3rem;
  border: 1px solid;
  border-radius: 100%;
  line-height: 3rem;
  text-align: center;
`;

export const IntroImg = styled.img`
  width: 100%;
  height: auto;
  margin-top: 3rem;
  max-width: 320px;

  @media (max-width: 300px) {
    max-width: 240px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;
export const Symbol = styled.p`
  text-align: center;
  margin: 0 5px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

export const MainTit = styled.h1`
  text-align: center;
  font-size: 1.3rem;
  line-height: 2.5rem;
`;

export const MainSub = styled.p`
  margin-top: 6rem;
  font-size: 1.3rem;
`;

export const IntroDesc = styled.p`
  margin-top: 8rem;
  text-align: center;
  font-size: 1.1rem;
  line-height: 2.5rem;
`;
