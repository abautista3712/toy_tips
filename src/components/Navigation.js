import React from "react";
import { Button, Form, FormControl, Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  const handleClick_TTT_playware = () => {
    window.open(
      "https://www.amazon.com/Im-Toy-Tester%C2%AE-Shirt-Shorts/dp/B000UFUXJI/ref=sr_1_2?keywords=im+a+toy+tester&qid=1557453165&s=gateway&sr=8-2",
      "_blank"
    );
  };

  return (
    <div>
      <Navbar expand="sm" variant="dark" className="my-auto py-1 bgColor_nav">
        <Navbar.Brand href="/">
          <img
            src="./assets/images/original/TTT_logo_hiRes.png"
            width="75"
            height="75"
            alt="Toy Tips Trusted Logo"
          />
        </Navbar.Brand>
        <Navbar.Brand href="/">
          <h1>Toy Tips</h1>
        </Navbar.Brand>
        <container className="mr-auto">
          <Navbar.Text>The Independent Voice on Toys</Navbar.Text>
        </container>
        <Nav variant="pills" className="navLinkSize">
          <Nav.Link href="/about" className="my-auto">
            About
          </Nav.Link>
        </Nav>
        <Navbar.Text>|</Navbar.Text>
        <Nav variant="pills" className="navLinkSize">
          <Nav.Link href="/search" className="my-auto">
            Browse Entire Collection
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search Toy Name"
            className="mr-sm-2"
          />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
      <div
        className="py-1 px-2 bgColor_playware alignText_playware click_playware"
        onClick={handleClick_TTT_playware}
      >
        Check out our "I'm a Toy Tester®" Playwear! Exclusive to Amazon
      </div>
    </div>
  );
};

export default Navigation;
