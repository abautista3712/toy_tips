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
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/images/original/stock_toys1.jpeg"
          alt="First slide"
          onClick={handleClick_Search}
        />
        <Carousel.Caption className="caption_Slide1">
          <h1>Thousands of Vintage Toy Reviews</h1>
          <p>Browse our entire collection from the 1990s and 2000s!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/images/original/stock_toys2.jpeg"
          alt="Second slide"
          onClick={handleClick_About}
        />
        <Carousel.Caption className="caption_Slide2">
          <h1>30 Years of Independent Research on </h1>
          <h1>Smart Consumer Choices</h1>
          <p>Learn more about Toy Tips</p>
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
