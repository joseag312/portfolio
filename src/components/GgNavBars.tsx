import Image from "react-bootstrap/Image";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import GgFavIcon from "./GgFavIcon";

export function GgTopNav() {
  return (
    <Navbar variant='dark' bg='dark' expand='lg' fixed='top'>
      <Container fluid>
        <Navbar.Brand href='#home'>
          <Image
            src={"https://i.ibb.co/nzrLVz8/Logo2.png"}
            fluid={false}
            height='24px'
            width='21px'
            className='d-inline-block align-text-top'
          ></Image>
          &nbsp;&nbsp;&nbsp;<span className='text-info'>GG</span>workz
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbar-dark-example' />

        <Navbar.Collapse id='navbar-dark-example'>
          <Nav>
            <Nav.Link href='#home'>Home</Nav.Link>
            <NavDropdown
              id='nav-dropdown-dark-example'
              title='Dropdown'
              menuVariant='dark'
            >
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export function GgBottomNav() {
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
