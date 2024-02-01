import React from 'react';
import styled from 'styled-components';
import { HeadText, NoticeContainer, NoticeText } from './WayToCome';
import { Hr } from './Calender';
import DropDown from '../components/contact/DropDown';

export default function Contact() {
  return (
    <>
      <ContactWrapper>
        <HeadText>마음 전하실 곳</HeadText>
        <Hr />
        <NoticeContainer>
          <NoticeText>
            저희의 소중한 시작을 <br />
            함께해 주시는 모든 분들께 감사드립니다.
          </NoticeText>
        </NoticeContainer>
        <DropDown />
      </ContactWrapper>
    </>
  );
}

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #fefbf8;
  padding: 4rem 2rem;
`;
