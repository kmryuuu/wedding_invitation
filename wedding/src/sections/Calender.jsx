import React from 'react';
import styled from 'styled-components';
import iconHeart from '../assets/icon-heart.svg';

export default function Calender() {
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const num = Array.from({ length: 30 }, (_, i) => i + 1);

  const startingDay = daysOfWeek.indexOf('월');

  // 길이가 startingDay인 새로운 배열 생성
  const emptyCells = Array(startingDay).fill('');
  const shiftedNumbers = [...emptyCells, ...num];

  const rows = [];
  while (shiftedNumbers.length > 0) {
    rows.push(shiftedNumbers.splice(0, 7));
  }
  return (
    <CalenderWrapper>
      <Hr />
      <HeadText>예식안내</HeadText>
      <DescText>
        2024. 4. 28 일요일 오후 12:30 <br />
        트라디노이
      </DescText>
      <CalenderContainer>
        <Month>4월</Month>
        <Table>
          <thead>
            <tr>
              {daysOfWeek.map((day, i) => (
                <th key={i}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((num, numIndex) => (
                  <td key={numIndex}>{num}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </CalenderContainer>
    </CalenderWrapper>
  );
}
export const CalenderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  margin-top: 8rem;
`;

export const Hr = styled.hr`
  width: 8rem;
  height: 1px;
  background-color: #ccc;
`;

export const HeadText = styled.h2`
  font-size: 1.5rem;
  letter-spacing: 0.25rem;
  color: var(--color-main);
`;

export const DescText = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
  line-height: 2rem;
`;

export const CalenderContainer = styled.div`
  width: 100%;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fffdf8;
`;

export const Month = styled.p`
  color: #515151;
  font-size: 1.3rem;
  margin-left: -16rem;
  margin-bottom: 2rem;
`;

export const Table = styled.table`
  width: 20rem;
  border-collapse: collapse;
  color: #515151;
  font-size: 0.8rem;

  th,
  td {
    padding: 1rem 0;
    text-align: center;
  }

  th:first-child,
  td:first-child {
    color: #afafaf;
  }

  tr:nth-child(5) td:nth-child(1) {
    color: #fff;
    background: url(${iconHeart}) center/2rem no-repeat;
  }
`;
