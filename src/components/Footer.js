import React from "react";
import { Container, Row, Image } from "react-bootstrap";

const Footer = () => (
  <div className="footer">
    <Container>
      <Row className="centerFlex">
        <img
          src="./assets/images/social_icons/Facebook/color/f_logo_RGB-Blue_1024.png"
          // width="40"
          height="40"
          alt="Facebook Logo"
          // onClick={handleClick}
        />

        <img
          src="./assets/images/social_icons/Instagram/insta_logo_gradient.png"
          // width="40"
          height="40"
          alt="Instagram Logo"
          // onClick={handleClick}
        />
        <img
          src="./assets/images/social_icons/Twitter/logo_fill/circle/twtr_logo_circle_blue.png"
          // width="40"
          height="40"
          alt="Toy Tips Trusted Logo"
          // onClick={handleClick}
        />
        <img
          src="./assets/images/social_icons/YouTube/full_color/yt_icon_rgb.png"
          // width="40"
          height="40"
          alt="Toy Tips Trusted Logo"
          // onClick={handleClick}
        />
      </Row>
    </Container>
  </div>
);

export default Footer;
