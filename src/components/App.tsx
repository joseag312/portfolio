import { Col, Row } from "react-bootstrap";
import { QueryClient, QueryClientProvider } from "react-query";
import "../assets/styles.css";
import GgBackground from "./GgBackground";
import { GgBottomNav, GgTopNav } from "./GgNavBars";
import { GgHero, GgHero2, GgHome, GgProjects } from "./GgSection";
import GgStack from "./GgStack";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GgBackground />
        <GgTopNav />
        <Row className='offset-nav-top'>
          <Col>
            <GgHome />
          </Col>
        </Row>
        <Row>
          <Col>
            <GgHero />
          </Col>
        </Row>
        <div className='section-qt'></div>
        <Row>
          <Col>
            <GgProjects />
          </Col>
        </Row>
        <div className='section-qt'></div>
        <Row className='offset-nav-bottom'>
          <GgStack />
        </Row>
        <Row>
          <Col>
            <GgHero2 />
          </Col>
        </Row>
        <GgBottomNav />
      </QueryClientProvider>
    </>
  );
}

export default App;
