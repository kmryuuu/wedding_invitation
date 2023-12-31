import GlobalStyle from './components/common/GlobalStyle';
import Calender from './components/main/Calender';
import ImgCover from './components/main/ImgCover';
import Intro from './components/main/Intro';

function App() {
  return (
    <div>
      <GlobalStyle />
      <ImgCover />
      <Intro />
      <Calender />
    </div>
  );
}
export default App;
