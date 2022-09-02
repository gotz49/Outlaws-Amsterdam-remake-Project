import CartWidget from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MiNavbar() {
  return (
    <Navbar variant="dark" expand="lg" className="miNavbar">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://cdn.shopify.com/s/files/1/0519/1516/1756/files/outlaws_logo_tumbnail_125x.png?v=1610347053"
            width={125}
            height={51}
            alt="#"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Store</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
	      <Nav>
          <Nav.Link href="#shoppingCart">
            <CartWidget />
          </Nav.Link>
        </Nav>
    </Navbar>
  );
}

export default MiNavbar;
