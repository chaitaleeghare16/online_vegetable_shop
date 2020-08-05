import React, { Component } from "react";
import "./Styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <span id="contactus">Contact Us ...</span>
        <span id="phone">
          <FontAwesomeIcon icon="phone-square" size="2x" id="phone" />
        </span>
      </div>
    );
  }
}

export default Footer;
