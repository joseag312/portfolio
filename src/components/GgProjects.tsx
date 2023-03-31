import { Col, Row } from "react-bootstrap";
import GgProjectBin from "./GgProjectBin";
import GgProjectList from "./GgProjectList";

function GgProjects() {
  return (
    <div className='section position-relative'>
      <Row>
        <Col xs={1}></Col>
        <Col xs={3}>
          <GgProjectList />
        </Col>
        <Col xs={8}>
          <GgProjectBin />
        </Col>
      </Row>
    </div>
  );
}

export default GgProjects;
