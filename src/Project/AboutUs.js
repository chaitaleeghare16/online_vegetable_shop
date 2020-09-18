import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import logo from "../logo.jpg";
import Admin_User_Header from "./Admin_User_Header";

export class AboutUs extends Component {
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
          <span>
            <img
              id="logo"
              style={{
                height: "300px",
                width: "300px",
                marginTop: "10px",
                marginRight: "100px",
              }}
              src={logo}
              alt="logo"
            ></img>
          </span>
          <span>
            <pre>
              From the Farm realized the COVID-19 pandemic situation and its
              <br /> impact on us and hence created a platformto ease the way we
              <br />
              buy vegetables. we thought to make your life more healthier by
              <br />
              spending less and meanwhile help our farmers by reducing their
              <br /> losses and avoiding food wastage.
              <br></br>
              <strong style={{ color: "green", fontSize: "20px" }}>
                Engage your health through smarter and eco friendly food choice
              </strong>
            </pre>
          </span>
          <div>
            <Footer />
          </div>
        </div>
      );
    } else
      return (
        <div>
          <div>
            <Header />
          </div>

          <span>
            <img
              id="logo"
              style={{
                height: "300px",
                width: "300px",
                marginTop: "10px",
                marginRight: "100px",
              }}
              src={logo}
              alt="logo"
            ></img>
          </span>
          <span>
            <pre>
              From the Farm realized the COVID-19 pandemic situation and its
              <br /> impact on us and hence created a platformto ease the way we
              <br />
              buy vegetables. we thought to make your life more healthier by
              <br />
              spending less and meanwhile help our farmers by reducing their
              <br /> losses and avoiding food wastage.
              <br></br>
              <strong style={{ color: "green", fontSize: "20px" }}>
                Engage your health through smarter and eco friendly food choice
              </strong>
            </pre>
          </span>
          <div>
            <Footer />
          </div>
        </div>
      );
  }
}
export default AboutUs;
