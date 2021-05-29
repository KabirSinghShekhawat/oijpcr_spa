import { Navbar, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    
      <Navbar collapseOnSelect expand="lg" bg="none" variant="light">
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
          <Nav.Link>About</Nav.Link>
          <Nav.Link>Archive</Nav.Link>
          <Nav.Link>Podcast</Nav.Link>
          <Nav.Link>Submit Article</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    
  );
};
export default NavigationBar;
