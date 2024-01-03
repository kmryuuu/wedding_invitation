import GlobalStyle from './style/GlobalStyle';
import Calender from './sections/Calender';
import Gallery from './sections/Gallery';
import ImgCover from './sections/ImgCover';
import Greeting from './sections/Greeting';
import { imgData } from './assets/imgData';

function App() {
  return (
    <div>
      <GlobalStyle />
      <ImgCover />
      <Greeting />
      <Calender />
      <Gallery imgData={imgData} />
    </div>
  );
}
export default App;
