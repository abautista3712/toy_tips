import React from "react";
// import { BrowserRouter as Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
// import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = () => {
  const handleClick = () => {
    window.open("/", "_blank");
  };

  return (
    <div>
      <Navbar expand="sm" bg="dark" variant="dark" className="my-auto py-1">
        <Navbar.Brand href="/">
          <h3>Brand Here</h3>
        </Navbar.Brand>
        <container className="mr-auto textSize">
          <Navbar.Text>Company Name Here</Navbar.Text>
        </container>
        <Nav variant="pills" className="navLinkSize">
          <Nav.Link href="/" className="my-auto">
            Link Here
          </Nav.Link>
          <Nav.Link>
            <img
              src="./assets/images/icons/linkedInIcon.png"
              width="45"
              height="35"
              alt="LinkedIn Icon"
              onClick={handleClick}
            />
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navigation;
