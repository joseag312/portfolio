import { Col, Row } from "react-bootstrap";
import { QueryClient, QueryClientProvider } from "react-query";
import "./assets/styles.css";
import GgBackground from "./components/GgBackground";
import GgBottomNav from "./components/GgBottomNav";
import GgHero from "./components/GgHero";
import GgHero2 from "./components/GgHero2";
import GgHome from "./components/GgHome";
import GgProjects from "./components/GgProjects";
import GgStack from "./components/GgStack";
import GgTopNav from "./components/GgTopNav";

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
