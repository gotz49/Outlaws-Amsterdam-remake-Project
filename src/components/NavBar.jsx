import CartWidget from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function MiNavbar() {
  return (
    <Navbar variant="dark" expand="lg" className="miNavbar">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img
              src="https://cdn.shopify.com/s/files/1/0519/1516/1756/files/outlaws_logo_tumbnail_125x.png?v=1610347053"
              width={125}
              height={51}
              alt="outlaws amsterdam logo"
            ></img>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link
                to="/category/1"
                style={{ textDecoration: "none", color: "#bababa" }}
              >
                Rings
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link
                to="/category/2"
                style={{ textDecoration: "none", color: "#bababa" }}
              >
                Necklaces
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link
                to="/category/3"
                style={{ textDecoration: "none", color: "#bababa" }}
              >
                Bracelets
              </Link>
            </Nav.Link>
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
