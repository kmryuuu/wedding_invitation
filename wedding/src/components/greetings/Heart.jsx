import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export default function Heart() {
  const heart = {
    from: {
      opacity: 0,
      pathLength: 0,
      pathOffset: 0, // 왼쪽 끝에서 시작
    },
    to: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 9.0,
      },
    },
  };

  return (
    <SvgWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 860 240"
        fill="none"
      >
        <motion.path
          d="M-114 140.773C-87.0613 190.983 -16.6849 211.054 2.33328 217.202C74.0835 240.397 157.805 239.179 233.167 236.758C301.929 234.549 381.168 230.166 429.057 181.679C457.924 152.452 484.971 117.309 488.666 77.7995C490.346 59.8435 485.984 -13.0243 446.323 4.77897C431.224 11.5566 417.853 33.0226 412.5 46C408.254 56.2935 418 55 418.779 49.9907C404.843 37.1108 386.495 29.2951 366.98 24.8731C343.841 19.6296 334.437 17.9503 326.487 37.6113C311.797 73.941 339.993 115.262 367.597 140.773C419.677 188.904 481.907 220.176 559.376 213.973C618.344 209.251 778.416 217.202 877 77.7995"
          stroke="#F56700"
          strokeOpacity="0.4"
          strokeWidth="3"
          strokeLinecap="round"
          initial="from"
          animate="to"
          variants={heart}
        />
      </svg>
    </SvgWrapper>
  );
}

const SvgWrapper = styled.div`
  position: absolute;
  top: 49rem;
  width: 100%;
  max-width: 520px;

  @media (max-width: 300px) {
    top: 49rem;
    max-width: 30rem;
  }
`;
