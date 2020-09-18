import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./Header";
import Footer from "./Footer";
import "./Styles/Footer.css";
import Admin_User_Header from "./Admin_User_Header";

export class ContactUs extends Component {
  constructor(props) {
    super(props);
    var userlogin = sessionStorage.getItem("usertoken");
    this.state = {
      isuserloggedin: userlogin,
      username: "",
    };
  }
  componentDidMount() {
    var userdata = JSON.parse(sessionStorage.getItem("userdata"));
    this.setState({ username: userdata.fname });
  }

  render() {
    if (this.state.isuserloggedin) {
      return (
        <div>
          <div>
            <Admin_User_Header />
          </div>
          <div style={{ color: "red" }}> User {this.state.username}</div>

          <div style={{ marginTop: "100px" }}>
            <strong style={{ color: "green", fontSize: "20px" }}>
              <u>ContactUs</u>
              <span id="phone">
                <FontAwesomeIcon icon="phone-square" size="1x" id="phone" />
              </span>
            </strong>
            <br /> For any queries/concerns or if you want to connect with us as
            a business
            <br />
            partner,do reach out to us as at- <br />
            <strong>
              <u>fromthefarms@gmail.com</u>
            </strong>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <Header />
          </div>

          <div style={{ marginTop: "100px" }}>
            <strong style={{ color: "green", fontSize: "20px" }}>
              <u>ContactUs</u>
              <span id="phone">
                <FontAwesomeIcon icon="phone-square" size="1x" id="phone" />
              </span>
            </strong>
            <br /> For any queries/concerns or if you want to connect with us as
            a business
            <br />
            partner,do reach out to us as at- <br />
            <strong>
              <u>fromthefarms@gmail.com</u>
            </strong>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      );
    }
  }
}

export default ContactUs;
