import React from 'react';
import styled from 'styled-components';
import introImage from '../assets/image-greeting.png';
import Heart from '../components/greetings/Heart';

export default function Greeting() {
  return (
    <IntroWarpper>
      <Date>2024 04 28</Date>
      <MainContainer>
        <MainTit>
          상성 <br /> & <br />
          경민
        </MainTit>
        <Heart />
        <MainSub>결혼합니다.</MainSub>
      </MainContainer>
      <IntroImg src={introImage} alt="인트로 이미지" />
      <IntroDesc>
        다섯 번째 맞이하는 따뜻한 봄날, <br />
        부부가 되려합니다.
      </IntroDesc>
      <IntroDesc>
        그 시작을 <br />
        함께 축복해 주신다면 <br />더 없는 기쁨으로 간직하겠습니다.
      </IntroDesc>
      <InfoContainer>
        <Name>이상성</Name>
        <Symbol>・</Symbol>
        <Name>류경민</Name>
        <SubText>드림</SubText>
      </InfoContainer>
    </IntroWarpper>
  );
}

export const IntroWarpper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
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
  margin-top: 8rem;
  max-width: 320px;

  @media (max-width: 300px) {
    max-width: 240px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4rem;
  gap: 0.2rem;
`;

export const SubText = styled.p`
  font-size: 0.8rem;
  color: var(--color-desc-gray);
  margin-left: 0.5rem;
`;

export const Name = styled.p`
  font-size: 1rem;
`;

export const Symbol = styled.p`
  text-align: center;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  font-size: 1.2rem;
`;

export const MainTit = styled.h1`
  text-align: center;
  line-height: 2.3rem;
`;

export const MainSub = styled.p`
  margin-top: 4rem;
`;

export const IntroDesc = styled.p`
  margin-top: 3rem;
  text-align: center;
  font-size: 1rem;
  line-height: 2rem;
`;
