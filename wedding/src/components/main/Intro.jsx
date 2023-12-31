import React from 'react';
import styled from 'styled-components';
import introImage from '../../assets/image-top.png';
import Heart from '../../components/common/Heart';

export default function Intro() {
  return (
    <IntroWarpper>
      <Date>2024 04 28</Date>
      <IntroImg src={introImage} />
      <SubContainer>
        <SubText>신랑</SubText>
        <Name>이상성</Name>
        <Symbol>・</Symbol>
        <SubText>신부</SubText>
        <Name>류경민</Name>
      </SubContainer>
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

const IntroWarpper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
`;

const Date = styled.p`
  color: var(--color-main);
  width: 8rem;
  height: 3rem;
  border: 1px solid;
  border-radius: 100%;
  line-height: 3rem;
  text-align: center;
`;

const IntroImg = styled.img`
  width: 100%;
  height: auto;
  margin-top: 3rem;
  max-width: 320px;

  @media (max-width: 300px) {
    max-width: 240px;
  }
`;

const SubContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const SubText = styled.p`
  font-size: 0.8rem;
  color: #515151;
`;

const Name = styled.p`
  font-size: 1rem;
`;

const Symbol = styled.p`
  margin: 0 5px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

const MainTit = styled.h1`
  text-align: center;
  font-size: 1.3rem;
  line-height: 2.5rem;
`;

const MainSub = styled.p`
  margin-top: 6rem;
  font-size: 1.3rem;
`;

const IntroDesc = styled.p`
  margin-top: 8rem;
  text-align: center;
  font-size: 1.1rem;
  line-height: 2.5rem;
`;
