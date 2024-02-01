import React from 'react';
import styled from 'styled-components';

export default function MapInfo({ info, location }) {
  return (
    <>
      <LocationContainer>
        <LocationInfo>{info}</LocationInfo>
        <Location>{location}</Location>
      </LocationContainer>
    </>
  );
}

export const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

export const LocationInfo = styled.p`
  margin-top: 1rem;
  color: #a69284;
  font-size: 1.1rem;
`;

export const Location = styled.p`
  margin-top: 0.5rem;
  color: #4d4444;
  line-height: 2rem;
`;
