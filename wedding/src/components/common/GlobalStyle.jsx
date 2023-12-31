import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'SunBatang-Light';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_eight@1.0/SunBatang-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'SunBatang-Medium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_eight@1.0/SunBatang-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'SunBatang-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_eight@1.0/SunBatang-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
}


* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
  border: 0;
  font: inherit;

  @media (max-width: 300px) {
   font-size: 13px;
  }
}

:root {
  --color-main: #F56700;
}

body {
  background-color: #f2f2f2;
  font-family: 'SunBatang-Light';
  height: 100vh;
  letter-spacing: -0.03rem;

}

#root {
  margin: 0 auto;
  background-color: #fff;
  max-width: 520px;

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }

  .fadenup {
    position: relative;
    animation: fadeInUp 1s ease-in-out;
  }

}

h1 {
  font-family: 'SunBatang-Bold';
}

h3 {
  font-family: 'SunBatang-Medium';
}
  `;

export default GlobalStyle;
