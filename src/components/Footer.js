import React from "react";
// import { Container, Row } from "react-bootstrap";

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
      <img
        src="./assets/images/social_icons/Facebook/color/f_logo_RGB-Blue_1024.png"
        alt="Facebook Logo"
        className="social_icons"
        onClick={handleClick_Facebook}
      />

      <img
        src="./assets/images/social_icons/Instagram/insta_logo_gradient.png"
        alt="Instagram Logo"
        className="social_icons"
        onClick={handleClick_Instagram}
      />
      <img
        src="./assets/images/social_icons/Twitter/logo_fill/circle/twtr_logo_circle_blue.png"
        alt="Twitter Logo"
        className="social_icons"
        onClick={handleClick_Twitter}
      />
      <img
        src="./assets/images/social_icons/YouTube/full_color/yt_icon_rgb.png"
        alt="YouTube Logo"
        className="social_icons"
        onClick={handleClick_YouTube}
      />
    </div>
  );
};

export default Footer;
