import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import Navbar from "react-bootstrap/Navbar";
import FavIcon from "./FavIcon";

function BottomNav() {
  return (
    <Navbar bg='dark' variant='dark' fixed='bottom'>
      <Container fluid className='justify-content-end'>
        <Nav>
          <Nav.Link>
            <FavIcon iconType='LinkedIn' />
          </Nav.Link>
          <Nav.Link>
            <FavIcon iconType='GitHub' />
          </Nav.Link>
          <Nav.Link>
            <FavIcon iconType='Phone' />
          </Nav.Link>
          <Nav.Link>
            <FavIcon iconType='Mail' />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default BottomNav;
