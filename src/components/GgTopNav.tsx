import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function GgTopNav() {
  return (
    <Navbar variant='dark' bg='dark' expand='lg' fixed='top'>
      <Container fluid>
        <Navbar.Brand href='#home'>
          <Image
            src={"/logo.svg"}
            fluid={false}
            height='24px'
            className='d-inline-block align-text-top'
          ></Image>
          &nbsp;&nbsp;&nbsp;GGworkz
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

export default GgTopNav;
