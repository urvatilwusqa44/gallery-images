
import './App.css';
import Nav from './parts/Nav.js';
import Header from "./parts/Header";
import Images from "./parts/Images.js";
import images from './parts/ImagesData.js';


function App() {
  return (
    <div>
      <Nav/>
      <Header/>
      <Images images={images}/>
    </div>
  );
}

export default App;
