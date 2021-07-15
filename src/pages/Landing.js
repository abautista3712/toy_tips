import React from "react";
import { Carousel } from "react-bootstrap";

const Landing = (props) => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/images/original/stock_toys1.jpeg"
          alt="First slide"
        />
        <Carousel.Caption className="carosel_customSlide1">
          <h1>Thousand of Vintage Toy Reviews</h1>
          <p>Browse our entire collection of toys from your childhood!</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/images/original/stock_toys2.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
          h23>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
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
