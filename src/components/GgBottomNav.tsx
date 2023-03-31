import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import GgFavIcon from "./GgFavIcon";

function GgBottomNav() {
  return (
    <Navbar bg='dark' variant='dark' fixed='bottom'>
      <Container fluid className='justify-content-end'>
        <Nav>
          <Nav.Link href='https://www.linkedin.com/in/jose-azuara/'>
            <GgFavIcon iconType='LinkedIn' />
          </Nav.Link>
          <Nav.Link href='https://github.com/joseag312'>
            <GgFavIcon iconType='GitHub' />
          </Nav.Link>
          <Nav.Link href='tel:555-555-5555'>
            <GgFavIcon iconType='Phone' />
          </Nav.Link>
          <Nav.Link href='mailto:example@example.com'>
            <GgFavIcon iconType='Mail' />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default GgBottomNav;
