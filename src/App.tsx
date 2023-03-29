import MyCarousel from "./components/Carousel";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <div className='row'>
        <div className='col-2'></div>
        <div className='col-8'>
          <MyCarousel></MyCarousel>
        </div>
        <div className='col-2'></div>
      </div>
    </>
  );
}

export default App;
