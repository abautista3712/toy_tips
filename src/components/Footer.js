import React from "react";
import { Container, Row } from "react-bootstrap";

const Footer = () => {
  const handleClick_Facebook = () => {
    window.open(
      "https://www.facebook.com/ToyTipswithMarianneSzymanski/",
      "_blank"
    );
  };
  const handleClick_Instagram = () => {
    window.open("https://www.instagram.com/toytips/", "_blank");
  };
  const handleClick_Twitter = () => {
    window.open("https://twitter.com/toytips/", "_blank");
  };
  const handleClick_YouTube = () => {
    window.open("https://www.youtube.com/user/toytips", "_blank");
  };
  return (
    <div className="footer">
      <Container>
        <Row className="centerFlex">
          <img
            src="./assets/images/social_icons/Facebook/color/f_logo_RGB-Blue_1024.png"
            height="40"
            alt="Facebook Logo"
            onClick={handleClick_Facebook}
          />

          <img
            src="./assets/images/social_icons/Instagram/insta_logo_gradient.png"
            height="40"
            alt="Instagram Logo"
            onClick={handleClick_Instagram}
          />
          <img
            src="./assets/images/social_icons/Twitter/logo_fill/circle/twtr_logo_circle_blue.png"
            height="40"
            alt="Twitter Logo"
            onClick={handleClick_Twitter}
          />
          <img
            src="./assets/images/social_icons/YouTube/full_color/yt_icon_rgb.png"
            height="40"
            alt="YouTube Logo"
            onClick={handleClick_YouTube}
          />
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
