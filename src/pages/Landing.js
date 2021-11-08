import React from "react";
import { Carousel } from "react-bootstrap";

const Landing = (props) => {
  const handleClick_About = () => {
    window.location.replace("/about");
  };
  const handleClick_Search = () => {
    window.location.replace("/search");
  };
  return (
    <Carousel fade>
      {/* First Carousel Slide */}
      <Carousel.Item>
        {/* Carousel Image */}
        <img
          className="carouselImage_mobileSizing"
          src="./assets/images/original/stock_toys1.jpeg"
          alt="First slide"
          onClick={handleClick_Search}
        />
        {/* Carousel Caption */}
        <Carousel.Caption
          className="caption_Slide1"
          onClick={handleClick_Search}
        >
          {/* Main line of caption */}
          <h1 className="d-none d-md-block">
            Thousands of Vintage Toy Reviews
          </h1>
          {/* MOBILE */}
          <h3 className="d-block d-md-none">
            Thousands of Vintage Toy Reviews
          </h3>
          {/* Sub line of caption */}
          <p>Browse our entire collection from the 1990s and 2000s!</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Second Carousel Slide */}
      <Carousel.Item>
        {/* Carousel Image */}
        <img
          className="carouselImage_mobileSizing"
          src="./assets/images/resized/stock_toys2_shortHeight_large.jpeg"
          alt="Second slide"
          onClick={handleClick_About}
        />
        {/* Carousel Caption */}
        <Carousel.Caption
          className="caption_Slide2"
          onClick={handleClick_About}
        >
          {/* Main line of caption */}
          <h1 className="d-none d-md-block">
            30 Years of Independent Research{" "}
          </h1>
          {/* MOBILE */}
          <h3 className="d-block d-md-none">
            30 Years of Independent Research{" "}
          </h3>

          {/* Sub line of caption */}
          <h1 className="d-none d-lg-block">on Smart Consumer Choices</h1>
          <p>Click here to learn more about Toy Tips</p>
          {/* MOBILE */}
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/images/original/stock_toys3.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          h23>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
};

export default Landing;
