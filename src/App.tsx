import { Col, Row } from "react-bootstrap";
import "./assets/styles.css";
import GgBackground from "./components/GgBackground";
import GgBottomNav from "./components/GgBottomNav";
import GgTopNav from "./components/GgTopNav";

function App() {
  return (
    <>
      <GgTopNav />
      <a id='#home'></a>
      <Row className='offset-nav-top'>
        <Col>
          <GgBackground />
        </Col>
      </Row>
      <GgBottomNav />
    </>
  );
}

export default App;
