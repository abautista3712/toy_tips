import React from "react";

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
      <div style={{ width: "100%" }}>
        {/* Facebook Icon */}
        <img
          src="./assets/icons/social_icons/Facebook/color/f_logo_RGB-Blue_1024.png"
          alt="Facebook Logo"
          className="social_icons click_socials"
          onClick={handleClick_Facebook}
        />
        {/* Instagram Icon */}
        <img
          src="./assets/icons/social_icons/Instagram/insta_logo_gradient.png"
          alt="Instagram Logo"
          className="social_icons click_socials"
          onClick={handleClick_Instagram}
        />
        {/* Twitter Icon */}
        <img
          src="./assets/icons/social_icons/Twitter/logo_fill/circle/twtr_logo_circle_blue.png"
          alt="Twitter Logo"
          className="social_icons click_socials"
          onClick={handleClick_Twitter}
        />
        {/* Youtube Icon */}
        <img
          src="./assets/icons/social_icons/YouTube/full_color/yt_icon_rgb.png"
          alt="YouTube Logo"
          className="social_icons click_socials"
          onClick={handleClick_YouTube}
        />
        {/* Copyright Text - MOBILE */}
        <div
          style={{ width: "100%", fontSize: "small" }}
          className="d-block d-md-none"
        >
          © 2021 Toy Tips Inc.
        </div>
      </div>
      {/* Copyright Text */}
      <div
        style={{ width: "100%" }}
        className="d-none d-md-flex flexCenter_flexEnd"
      >
        <div>© 2021 Toy Tips Inc.</div>
      </div>
    </div>
  );
};

export default Footer;
