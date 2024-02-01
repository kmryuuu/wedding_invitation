import GlobalStyle from './style/GlobalStyle';
import Calender from './sections/Calender';
import Gallery from './sections/Gallery';
import ImgCover from './sections/ImgCover';
import Greeting from './sections/Greeting';
import { imgData } from './assets/imgData';
import WayToCome from './sections/WayToCome';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div>
      <GlobalStyle />
      <ImgCover />
      <Greeting />
      <Calender />
      <Gallery imgData={imgData} />
      <WayToCome />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
