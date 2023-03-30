import { Col, Row } from "react-bootstrap";
import "./assets/styles.css";
import BottomNav from "./components/BottomNav";
import GCarousel from "./components/GCarousel";
import TopNav from "./components/TopNav";

function App() {
  return (
    <>
      <TopNav />
      <a id='#home'></a>
      <Row className='offset-nav'>
        <Col>
          <GCarousel></GCarousel>
        </Col>
      </Row>
      <BottomNav></BottomNav>
    </>
  );
}

export default App;
