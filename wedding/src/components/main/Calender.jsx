import React from 'react';
import styled from 'styled-components';
import iconHeart from '../../assets/icon-heart.svg';

export default function Calender() {
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const num = Array.from({ length: 30 }, (_, i) => i + 1);

  const startingDay = daysOfWeek.indexOf('월');
  const shiftedNumbers = [
    ...Array(startingDay).fill(''),
    ...num.slice(0, -(6 - startingDay)),
  ];

  const rows = [];
  while (shiftedNumbers.length > 0) {
    rows.push(shiftedNumbers.splice(0, 7));
  }
  return (
    <DateContainer>
      <Hr />
      <HeadText>예식안내</HeadText>
      <WeddingDate>
        2024. 4. 28 일요일 오후 12:30 <br />
        트라디노이
      </WeddingDate>
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
    </DateContainer>
  );
}
const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  margin-top: 8rem;
`;

const Hr = styled.hr`
  width: 8rem;
  height: 1px;
  background-color: #ccc;
`;

const HeadText = styled.h2`
  font-size: 1.5rem;
  letter-spacing: 0.25rem;
  color: var(--color-main);
`;

const WeddingDate = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
  line-height: 2rem;
`;

const CalenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  padding: 4rem;
  background-color: #fffdf8;
`;

const Month = styled.p`
  font-size: 1.5rem;
  margin-left: 1rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 1rem;
    text-align: center;
  }

  th:first-child,
  td:first-child {
    color: #afafaf;
  }

  tr:nth-child(4) td:nth-child(1) {
    color: #fff;
    background: url(${iconHeart}) center/3rem no-repeat;
  }
`;
