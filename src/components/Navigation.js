import React, { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  InputGroup,
  Navbar,
  Nav,
  Dropdown,
} from "react-bootstrap";
import Axios from "axios";

const baseURL = "/api/get";

const Navigation = (props) => {
  const [toyData, setToyData] = useState("");
  const [typingTimeout, setTypingTimeout] = useState(0);
  const [inputPlaceholder, setInputPlaceholder] =
    useState("Search by Toy Name");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    getToyData();
  }, []);

  // const ageRanges = {
  //   ageRanges: ["K-4", "Infant", "Toddler", "Preschool", "5-7", "Family"],
  //   categories: [
  //     "Action Figures",
  //     "Artistic",
  //     "Construction",
  //     "Creative",
  //     "Dolls",
  //     "DVD/Video",
  //     "Educational",
  //     "For Classroom Use",
  //     "Games",
  //     "Imaginary",
  //     "Musical",
  //     "Outdoor",
  //     "Parent-Child Interaction",
  //     "Pre-Kindergarten Learning",
  //     "Role Play",
  //     "Sports",
  //     "Travel",
  //   ],
  // };
  const handleOnChange_search = (e) => {
    setInputValue(e.target.value);

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    setTypingTimeout(
      setTimeout(() => {
        props.onChange(e.target.value);
      }, 1000)
    );
  };

  // Reset input field to blank after selecting filter option
  const resetInputField = () => {
    setInputValue("");
  };

  // Pass filter value via onClick to parent
  const filterOption_toyName = () => {
    console.log("filter by toy name selected");
    props.onClick("ToyName");
    setInputPlaceholder("Search by Toy Name");
    resetInputField();
  };
  const filterOption_companyName = () => {
    console.log("filter by company name selected");
    props.onClick("company_name");
    setInputPlaceholder("Search by Company");
    resetInputField();
  };
  const filterOption_ageRange = () => {
    console.log("filter by age range selected");
    props.onClick("AgeRange1");
    setInputPlaceholder("Search by Age Range");
    resetInputField();
  };
  const filterOption_category = () => {
    console.log("filter by category selected");
    props.onClick("categories");
    setInputPlaceholder("Search by Category");
    resetInputField();
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
              Browse All
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
            <InputGroup className="">
              <FormControl
                type="text"
                placeholder={inputPlaceholder}
                value={inputValue}
                onChange={handleOnChange_search}
                className="d-none d-md-block mr-sm-2"
              />
            </InputGroup>
          </Form>
          <Dropdown>
            <Dropdown.Toggle
              style={{
                backgroundColor: "#deb887",
                borderColor: "#ffebcd",
                padding: "7px",
                borderRadius: "5px",
              }}
              className="d-none d-md-block dropdown-toggle flexCenter_center"
              align="end"
              id="dropdown-basic"
            >
              <img
                src="./assets/icons/filter/filter.png"
                width="15"
                height="15"
                alt="Filter Button"
                className="flexCenter_center"
              />
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu">
              <Dropdown.Header>Search by...</Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Item onClick={filterOption_toyName}>
                Toy Name
              </Dropdown.Item>
              <Dropdown.Item onClick={filterOption_companyName}>
                Company Name
              </Dropdown.Item>
              <Dropdown.Item onClick={filterOption_ageRange}>
                Age Range
              </Dropdown.Item>
              <Dropdown.Item onClick={filterOption_category}>
                Category
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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
