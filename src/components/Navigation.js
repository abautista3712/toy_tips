import React, { useEffect, useState } from "react";
import { Form, FormControl, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Axios from "axios";

const baseURL = "/api/get";

const Navigation = (props) => {
  const [toyData, setToyData] = useState("");
  const [typingTimeout, setTypingTimeout] = useState(0);

  useEffect(() => {
    getToyData();
  }, []);

  const handleOnChange = (e) => {
    // Capture search input and set as props in single data payload
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    setTypingTimeout(
      setTimeout(() => {
        props.onChange(e.target.value);
        e.target.value = "";
      }, 1500)
    );
  };

  const getToyData = () => {
    Axios.get(baseURL)
      .then((response) => {
        setToyData(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const handleClick_TTT_playware = () => {
    window.open(
      "https://www.amazon.com/Im-Toy-Tester%C2%AE-Shirt-Shorts/dp/B000UFUXJI/ref=sr_1_2?keywords=im+a+toy+tester&qid=1557453165&s=gateway&sr=8-2",
      "_blank"
    );
  };

  return (
    <div>
      <Navbar expand="md" variant="dark" className="my-auto py-1 bgColor_nav">
        <Navbar.Brand href="/">
          {/* Brand Image */}
          <img
            src="./assets/images/original/TTT_logo_hiRes.png"
            width="75"
            height="75"
            alt="Toy Tips Trusted Logo"
            className="d-none d-sm-block"
          />
          {/* Brand Image - MOBILE */}
          <img
            src="./assets/images/original/TTT_logo_hiRes.png"
            width="45"
            height="45"
            alt="Toy Tips Trusted Logo"
            className="d-block d-sm-none"
          />
        </Navbar.Brand>
        {/* Company Name */}
        <Navbar.Brand href="/" className="flexCenter_flexStart">
          <h1>Toy Tips</h1>
        </Navbar.Brand>
        <container className="d-none d-sm-block mr-auto">
          <Navbar.Text>The Independent Voice on Toys</Navbar.Text>
        </container>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav variant="pills" className="ml-auto">
            {/* About Button */}
            <Nav.Link href="/about" className="my-auto px-2 mobile_navLink">
              About
            </Nav.Link>
            {/* Link Separator */}
            <Navbar.Text className="d-none d-sm-block">|</Navbar.Text>
            {/* Browse Button */}
            <Nav.Link href="/search" className="d-none d-lg-block my-auto">
              Browse Entire Collection
            </Nav.Link>
            {/* Browse - Tablet */}
            <Nav.Link
              href="/search"
              className="d-lg-none my-auto px-2 mobile_navLink"
            >
              Browse
            </Nav.Link>
          </Nav>
          {/* Search Input Field */}
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search Toy Name"
              onChange={handleOnChange}
              className="d-none d-md-block mr-sm-2"
            />
          </Form>
        </Navbar.Collapse>
      </Navbar>
      {/* Toy Tester Playwear Banner */}
      <div
        className="d-none d-md-block py-1 px-2 bgColor_playware alignText_playware click_playware"
        onClick={handleClick_TTT_playware}
      >
        Check out our "I'm a Toy Tester®" Playwear! Exclusive to Amazon
      </div>
      {/* Toy Tester Playwear Banner - MOBILE */}
      <div
        className="d-block d-md-none py-1 px-2 bgColor_playware alignText_playware click_playware"
        style={{ fontSize: "smaller", textAlign: "center" }}
        onClick={handleClick_TTT_playware}
      >
        Check out our "I'm a Toy Tester®" Playwear!
      </div>
    </div>
  );
};

export default Navigation;
