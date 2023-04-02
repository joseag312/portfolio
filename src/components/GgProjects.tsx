import { Col, Row } from "react-bootstrap";
import GgProjectBin from "./GgProjectBin";
import GgProjectList from "./GgProjectList";

function GgProjects() {
  return (
    <div className='section position-relative' id='Home'>
      <a id='#projects'></a>
      <Row className='h-20'>
        <Col xs={12}>
          <GgProjectList />
        </Col>
      </Row>
      <Row className='h-80'>
        <Col xs={12}>
          <GgProjectBin />
        </Col>
      </Row>
    </div>
  );
}

export default GgProjects;
