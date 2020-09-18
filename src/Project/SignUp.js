import React, { Component } from "react";

import "./Styles/SignUp.css";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Noty from "noty"; // use for notification and alert box
import { store } from "react-notifications-component"; //use for notification

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FirstName: "",
      Address: "",
      Email: "",
      Pincode: "",
      Phone: "",
      City: "",
      Password: "",
      ConfirmPassword: "",
      firstnameError: "",
      AddressError: "",
      CityError: "",
      PincodeError: "",
      PhoneError: "",
      passwordError: "",
      emailError: "",
      confirmpasswordError: "",
      isValid: false,
    };
  }

  validForm = () => {
    console.log("inside vali form" + this.state.isValid);
    return this.state.isValid;
  };

  onchange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    var name = e.target.name;
    var value = e.target.value;
    var isValid = this.state.isValid;
    // console.log(name + " " + value + " " + isValid);

    switch (name) {
      case "FirstName":
        console.log(name);
        if (value.length === 0) {
          this.setState({ firstnameError: "name should not be blank" });
          isValid = false;
          console.log(isValid);
        } else if (!value.match(/^[a-zA-Z ]{1,}$/)) {
          this.setState({ firstnameError: "name should contain characters" });
          isValid = false;
          console.log(isValid);
        } else {
          this.setState({ firstnameError: " " });
          isValid = true;
          console.log(isValid);
        }
        break;

      case "Address":
        console.log(name);
        if (value.length === 0) {
          this.setState({ AddressError: "Address Should Not Be Blank" });
          isValid = false;
          console.log(isValid);
        } else {
          this.setState({ AddressError: "" });
          isValid = true;
          console.log(isValid);
        }
        break;

      case "Email":
        console.log(name);
        if (value.length === 0) {
          this.setState({ emailError: "Email should not be blank" });
          isValid = false;
          console.log(isValid);
        } else if (!value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,}$/)) {
          this.setState({ emailError: "Email should contain . and @" });
          isValid = false;
          console.log(isValid);
        } else if (value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,}$/)) {
          this.setState({ emailError: "" });
          isValid = true;
          console.log(isValid);
        }
        break;
      case "City":
        if (value.length === 0) {
          this.setState({ CityError: "city Should Not Be Blank" });
          isValid = false;
        } else {
          this.setState({ CityError: "" });
          isValid = true;
          console.log(isValid);
        }
        break;
      case "Phone":
        if (value.length === 0) {
          this.setState({ PhoneError: "Phone number Should Not Be Blank" });
          isValid = false;
          console.log(isValid);
        } else if (value.length > 0 && !value.match(/^[0-9 ]{1,10}$/)) {
          this.setState({
            PhoneError: "it contains only numbers and length should be 10",
          });
          isValid = false;
          console.log(isValid);
        } else {
          this.setState({ PhoneError: " " });
          isValid = true;
          console.log(isValid);
        }
        break;

      case "PinCode":
        if (value.length === 0) {
          this.setState({ PincodeError: "Pincode Should Not Be Blank" });
          isValid = false;
          console.log(isValid);
        } else {
          this.setState({ PincodeError: "" });
          isValid = true;
          console.log(isValid);
        }
        break;
      case "Password":
        if (value.length === 0) {
          this.setState({
            passwordError: "password should not blank",
          });
          isValid = false;
          console.log(isValid);
        } else if (!value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{1,8}/)) {
          this.setState({
            passwordError: `password should conatin atleast 1 capital 1 special
                  character and minimum length of 8`,
          });
          isValid = false;
          console.log(isValid);
        } else if (value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{1,8}/)) {
          this.setState({
            passwordError: "",
          });
          isValid = true;
          console.log(isValid);
        }
        break;
      case "ConfirmPassword":
        if (value.length === 0) {
          this.setState({
            confirmpasswordError: " Confirm Password should not blank",
          });
          isValid = false;
          console.log(isValid);
        } else if (this.state.Password !== value) {
          this.setState({
            confirmpasswordError: "Password And Confirm Password Not Match",
          });
          isValid = false;
          console.log(isValid);
        } else {
          this.setState({ confirmpasswordError: "" });
          isValid = true;
          console.log(isValid);
        }
    }
    return this.setState({ isValid: isValid });
  };
  submitData = (e) => {
    var validForm = this.validForm();

    var allUserDetails = JSON.parse(localStorage.getItem("UsersData"));
    var a = true;
    if (allUserDetails != null) {
      allUserDetails.map((user) => {
        if (user.Email === this.state.Email) {
          a = false;
        }
      });
    }
    if (allUserDetails === null) {
      allUserDetails = [];

      if (validForm) {
        const userDetails = {
          isAdmin: false,
          FirstName: this.state.FirstName,
          Email: this.state.Email,
          Password: this.state.Password,
          ConfirmPassword: this.state.ConfirmPassword,
        };
        allUserDetails.push(userDetails);
        localStorage.setItem("UsersData", JSON.stringify(allUserDetails));

        store.addNotification({
          title: "",
          message: "Data added to localstorage",
          type: "warning",
          insert: "top",
          container: "top-right",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration: 800,
            onScreen: true,
          },
        });
        this.props.history.push("/login");
      }
    } else if (allUserDetails !== null) {
      if (validForm) {
        if (a) {
          const userDetails = {
            isAdmin: false,
            FirstName: this.state.FirstName,
            Email: this.state.Email,
            Password: this.state.Password,
            ConfirmPassword: this.state.ConfirmPassword,
          };
          allUserDetails.push(userDetails);
          localStorage.setItem("UsersData", JSON.stringify(allUserDetails));

          store.addNotification({
            title: "",
            message: "Data added to localstorage",
            type: "warning",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 800,
              onScreen: true,
            },
          });
          this.props.history.push("/login");
        } else {
          let n = new Noty({
            type: "success",
            layout: "topRight",
            text:
              "Your Email is already registered,please Registered with new email",
            theme: "bootstrap-v4",
            buttons: [
              Noty.button("ok", "btn btn-primary", () => {
                n.close();
              }),
            ],
          }).show();
        }
      } else {
        let n = new Noty({
          type: "success",
          layout: "topRight",
          text: "Please fill all the details",
          theme: "bootstrap-v4",
          buttons: [
            Noty.button("ok", "btn btn-primary", () => {
              n.close();
            }),
          ],
        }).show();
      }
    }
  };

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>

        <div className="box" style={{ marginLeft: "400px" }}>
          <div style={{ color: "red", marginLeft: "600px" }}>
            * Required Field{" "}
          </div>
          <form autoComplete="off">
            <table>
              <tr>
                <td>
                  <input
                    type="text"
                    name="FirstName"
                    value={this.state.FirstName}
                    onChange={this.onchange}
                    placeholder="Full Name"
                    required
                    className="form-control"
                  />
                  <span style={{ color: "red" }}>
                    {" "}
                    {this.state.firstnameError}
                  </span>
                </td>
                <td style={{ color: "red" }}>*</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="Address"
                    value={this.state.Address}
                    onChange={this.onchange}
                    placeholder="Address"
                    required
                    className="form-control"
                  />
                  <span style={{ color: "red" }}>
                    {" "}
                    {this.state.AddressError}
                  </span>
                </td>
                <td style={{ color: "red" }}>*</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="Email"
                    value={this.state.Email}
                    onChange={this.onchange}
                    placeholder="Email"
                    required
                    className="form-control"
                  />
                  <span style={{ color: "red" }}> {this.state.emailError}</span>
                </td>
                <td style={{ color: "red" }}>*</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="City"
                    value={this.state.City}
                    onChange={this.onchange}
                    placeholder="City"
                    required
                    className="form-control"
                  />
                  <span style={{ color: "red" }}> {this.state.CityError}</span>
                </td>
                <td style={{ color: "red" }}>*</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="Pincode"
                    value={this.state.Pincode}
                    onChange={this.onchange}
                    placeholder="Pincode"
                    required
                    className="form-control"
                  />
                  <span style={{ color: "red" }}>
                    {" "}
                    {this.state.PincodeError}
                  </span>
                </td>
                <td style={{ color: "red" }}>*</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="Phone"
                    value={this.state.Phone}
                    onChange={this.onchange}
                    placeholder="Phone Number"
                    required
                    className="form-control"
                  />
                  <span style={{ color: "red" }}> {this.state.PhoneError}</span>
                </td>
                <td style={{ color: "red" }}>*</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="password"
                    name="Password"
                    value={this.state.Password}
                    onChange={this.onchange}
                    placeholder="Password"
                    required
                    className="form-control"
                  />
                  <span style={{ color: "red" }}>
                    {" "}
                    {this.state.passwordError}
                  </span>
                </td>
                <td style={{ color: "red" }}>*</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="password"
                    name="ConfirmPassword"
                    value={this.state.ConfirmPassword}
                    onChange={this.onchange}
                    placeholder="ConfirmPassword"
                    required
                    className="form-control"
                  />
                  <span style={{ color: "red" }}>
                    {" "}
                    {this.state.confirmpasswordError}
                  </span>
                </td>
                <td style={{ color: "red" }}>*</td>
              </tr>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.submitData}
                style={{ width: "200px", marginRight: "420px" }}
              >
                Sign up
              </button>
            </table>
          </form>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default SignUp;
