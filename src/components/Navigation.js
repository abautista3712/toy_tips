import React from "react";
// import { BrowserRouter as Link } from "react-router-dom";
import { Button, Form, FormControl, Navbar } from "react-bootstrap";
// import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = () => {
  const handleClick = () => {
    window.open("/", "_blank");
  };

  return (
    <div>
      <Navbar
        expand="sm"
        // bg="dark"
        variant="dark"
        className="my-auto py-1 bgColor_nav"
      >
        <Navbar.Brand href="/">
          <img
            src="./assets/images/original/TTT_logo_hiRes.png"
            width="75"
            height="75"
            alt="Toy Tips Trusted Logo"
            onClick={handleClick}
          />
        </Navbar.Brand>
        <Navbar.Brand href="/">
          <h1>Toy Tips</h1>
        </Navbar.Brand>
        <container className="mr-auto textSize">
          <Navbar.Text>The Independent Voice on Toys</Navbar.Text>
        </container>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
};

export default Navigation;
