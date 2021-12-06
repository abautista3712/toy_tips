import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import Axios from "axios";

import Search from "./Search";
const baseURL = "/api/get";

const Landing = (props) => {
  const [toyData, setToyData] = useState("");
  const [highlight_toyName, setHighlight_toyName] = useState("");
  const [displayHL_toyName, setDisplayHL_toyName] = useState("");
  const [RNG, setRNG] = useState(Math.floor(Math.random() * 2654));

  useEffect(() => {
    getToyData();
  }, []);

  useEffect(() => {
    if (toyData) {
      setDisplayHL_toyName(toyData[RNG].ToyName);
    }
  }, [toyData]);

  useEffect(() => {}, [RNG], [displayHL_toyName]);

  const getToyData = () => {
    Axios.get(baseURL)
      .then((response) => {
        setToyData(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const handleClick_About = () => {
    window.location.replace("/about");
  };
  const handleClick_Search = () => {
    window.location.replace("/search");
  };
  const handleClick_Search_HL = () => {
    if (toyData) {
      setHighlight_toyName(toyData[RNG].ToyName);
    }
  };

  return (
    <div>
      {highlight_toyName !== "" ? (
        <Search search={highlight_toyName} filterOption={"ToyName"} />
      ) : (
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
          {/* Third Carousel Slide */}
          <Carousel.Item>
            {/* Carousel Image */}
            <img
              className="carouselImage_mobileSizing"
              src="./assets/images/resized/stock_toys3_short_wide.png"
              alt="Third slide"
              onClick={handleClick_Search_HL}
            />
            {/* Carousel Caption */}
            <Carousel.Caption
              className="caption_Slide3"
              onClick={handleClick_Search_HL}
            >
              {/* Main line of caption */}
              <h1 className="d-none d-md-block">{displayHL_toyName}</h1>
              {/* MOBILE */}
              <h3 className="d-block d-md-none">{displayHL_toyName}</h3>

              {/* Sub line of caption */}
              <h4 className="d-none d-lg-block">
                Check out our Highlighted Toy!
              </h4>
              <p className="d-none d-lg-block">Click here to read more</p>
              {/* MOBILE */}
              <p className="d-block d-lg-none">
                Check out our Highlighted Toy!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      )}
    </div>
  );
};

export default Landing;
