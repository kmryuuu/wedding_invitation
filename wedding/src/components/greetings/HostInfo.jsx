import React from 'react';
import styled from 'styled-components';

export default function HostInfo({ subText, hostName }) {
  return (
    <>
      <HostInfoTag>
        <SubText>{subText}</SubText>
        <Name>{hostName}</Name>
      </HostInfoTag>
    </>
  );
}

export const HostInfoTag = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SubText = styled.p`
  font-size: 0.8rem;
  color: #515151;
`;

export const Name = styled.p`
  font-size: 1rem;
`;
