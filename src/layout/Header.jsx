import React from "react";
import {
  FaPhone,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "35px",
        width: "1340px",
        padding: "1px 24px",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexShrink: 0,
      }}
      className="bg-black text-yellow-50 items-center justify-between"
    >
      <div>
        {" "}
        <span className="phone-icon inline-block">
          <FaPhone />
        </span>
        (225) 555 0110
      </div>
      <div>Follow Us and get a chance to win %80 off </div>
      <div className="icon-container flex justify-content-between">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaYoutube />
      </div>
    </div>
  );
};

export default Header;
