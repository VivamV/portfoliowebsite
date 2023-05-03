import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://www.linkedin.com/in/varun-pratap-singh-984826270/" target="blank">
              <LinkedInIcon /></a>
          <a href="https://github.com/VivamV" target="blank"> 
          <GithubIcon /> </a>
      </div>
      <p>Email Id:vpsingh1303@gmail.com</p>
      <p>Address:Noida,India</p>
    </div>
  );
}

export default Footer;