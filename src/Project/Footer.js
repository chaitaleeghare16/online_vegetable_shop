import React, { Component } from "react";
import "./Styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Footer extends Component {
  render() {
    return (
      <div className="main-footer">
        <div className="container">
          <div className="contents">
            &copy;{new Date().getFullYear()} All Rights Reserved | Term of
            Service | Privacy
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
