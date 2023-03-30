import "./assets/styles.css";
import BottomNav from "./components/BottomNav";
import GCarousel from "./components/GCarousel";
import TopNav from "./components/TopNav";

function App() {
  return (
    <>
      <header>
        <TopNav></TopNav>
      </header>
      <a id='#home'></a>
      <div className='row'>
        <div className='col-12'>
          <GCarousel></GCarousel>
        </div>
      </div>
      <BottomNav></BottomNav>
    </>
  );
}

export default App;
