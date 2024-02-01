import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import arrowGreen from '../../assets/icon-arrow-green.png';
import arrowBeige from '../../assets/icon-arrow-beige.png';
import kakaoPay from '../../assets/kakaopay.png';
import { groomData, brideData } from './accountData';

export default function DropDown() {
  const [isGroomOpen, setIsGroomOpen] = useState(false);
  const [isBrideOpen, setIsBrideOpen] = useState(false);

  const handleGroomClick = () => {
    setIsGroomOpen(!isGroomOpen);
  };

  const handleBrideClick = () => {
    setIsBrideOpen(!isBrideOpen);
  };

  const handleCopyClick = (isCopySuccess) => {
    if (isCopySuccess) {
      toast.success('계좌가 복사되었습니다!', TOAST);
    } else {
      toast.error('계좌 복사에 실패했습니다.', TOAST);
    }
  };

  const TOAST = {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 1000,
    closeButton: false,
    icon: true,
    hideProgressBar: true,
    progress: undefined,
  };

  return (
    <DropContainer>
      <StyledToastContainer />
      <GroomtCover isGroomOpen={isGroomOpen} onClick={handleGroomClick}>
        <GroomText>신랑측</GroomText>
      </GroomtCover>
      {isGroomOpen && (
        <NameCardContainer isGroomOpen={isGroomOpen}>
          <ul>
            {groomData.map((item, index) => (
              <li key={index}>
                <InfoContainer>
                  <NameInfo>
                    <Modifier>{item.modifier}</Modifier>
                    <Name>{item.name}</Name>
                    <a href={item.payUrl} target="_blank" rel="noreferrer">
                      <PayButton></PayButton>
                    </a>
                  </NameInfo>
                  <AccountInfo>
                    <Bank>{item.bank}</Bank>
                    <Account>{item.account}</Account>
                    <CopyToClipboard
                      text={item.account}
                      onCopy={handleCopyClick}
                    >
                      <AccountCopyButton>복사</AccountCopyButton>
                    </CopyToClipboard>
                  </AccountInfo>
                </InfoContainer>
              </li>
            ))}
          </ul>
        </NameCardContainer>
      )}
      <BrideCover isBrideOpen={isBrideOpen} onClick={handleBrideClick}>
        <BrideText>신부측</BrideText>
      </BrideCover>
      {isBrideOpen && (
        <NameCardContainer isBrideOpen={isBrideOpen}>
          <ul>
            {brideData.map((item, index) => (
              <li key={index}>
                <InfoContainer>
                  <NameInfo>
                    <Modifier>{item.modifier}</Modifier>
                    <Name>{item.name}</Name>
                    <a href={item.payUrl} target="_blank" rel="noreferrer">
                      <PayButton></PayButton>
                    </a>
                  </NameInfo>
                  <AccountInfo>
                    <Bank>{item.bank}</Bank>
                    <Account>{item.account}</Account>
                    <CopyToClipboard
                      text={item.account}
                      onCopy={handleCopyClick}
                    >
                      <AccountCopyButton>복사</AccountCopyButton>
                    </CopyToClipboard>
                  </AccountInfo>
                </InfoContainer>
              </li>
            ))}
          </ul>
        </NameCardContainer>
      )}
    </DropContainer>
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

export const DropContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

// 신랑측
export const GroomtCover = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  width: 20rem;
  height: 3.5rem;
  background-color: #e6e7dd;

  &::after {
    content: '';
    position: absolute;
    background: url(${arrowGreen}) no-repeat center center;
    background-size: contain;
    width: 1rem;
    height: 1rem;
    right: 1rem;
    transform: rotate(${(props) => (props.isGroomOpen ? '180deg' : '0deg')});
    transition: transform 0.3s ease;
  }
`;

export const GroomText = styled.h3`
  margin-left: 1rem;
  font-size: 0.9rem;
  color: #595d3b;
`;

// 신부측
export const BrideCover = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  background-color: #efeae2;
  margin-top: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    background: url(${arrowBeige}) no-repeat center center;
    background-size: contain;
    width: 1rem;
    height: 1rem;
    right: 1rem;
    transform: rotate(${(props) => (props.isBrideOpen ? '180deg' : '0deg')});
    transition: transform 0.3s ease;
  }
`;

export const BrideText = styled.h3`
  margin-left: 1rem;
  font-size: 0.9rem;
  color: #856442;
`;

export const NameCardContainer = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 0 1rem;

  li {
    &:nth-child(1) {
      width: 100%;
      border-bottom: 1px dashed #dee3d9;
    }

    ${({ isBrideOpen }) =>
      isBrideOpen &&
      css`
        &:nth-child(2) {
          width: 100%;
          border-bottom: 1px dashed #dee3d9;
        }
      `}
  }
`;

export const InfoContainer = styled.div`
  padding: 1.5rem 0;
`;

export const NameInfo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const AccountInfo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

export const Modifier = styled.p`
  font-size: 0.7rem;
  margin-right: 0.2rem;
`;

export const Name = styled.h3`
  font-size: 0.9rem;
`;

export const Bank = styled.span`
  font-size: 0.9rem;
  margin-right: 0.3rem;
`;

export const Account = styled.span`
  font-size: 0.9rem;
`;

export const PayButton = styled.button`
  position: absolute;
  top: -50%;
  right: 0;
  width: 3rem;
  height: 2rem;
  background: url(${kakaoPay}) no-repeat center center;
  background-size: contain;
  border-radius: 0.6rem;
`;

export const AccountCopyButton = styled.button`
  position: absolute;
  top: -20%;
  right: 0;
  width: 3.1rem;
  height: 1.5rem;
  border-radius: 0.4rem;
  background-color: #f3f3f3;
  font-size: 0.8rem;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  color: var(--color-desc-black);
`;
