import React, { Component } from "react";
import "./Styles/LogIn.css";
import {
  Link,
  BrowserRouter,
  Route,
  NavLink,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      allUsersDetails: [],
      error: {
        usernameerror: "",
        passworderror: "",
      },
      admintoken: false,
      usertoken: false,
    };
  }

  verifyUser = () => {
    var name = "";
    const username = this.state.username;
    const password = this.state.password;
    var userdetail = this.state.allUsersDetails;
    userdetail = JSON.parse(localStorage.getItem("UsersData"));

    for (var user of userdetail) {
      if (
        username === user.Email &&
        password === user.Password &&
        user.isAdmin === true
      ) {
        name = user.FirstName;
        const admindata = {
          email: username,
          fname: name,
        };
        alert("admin");
        sessionStorage.setItem("admintoken", true);
        sessionStorage.setItem("admindata", JSON.stringify(admindata));
        this.setState({ admintoken: true });
      }

      if (
        username === user.Email &&
        password === user.Password &&
        user.isAdmin === false
      ) {
        name = user.FirstName;
        const userdata = {
          email: username,
          fname: name,
        };
        alert("user");
        sessionStorage.setItem("usertoken", true);
        sessionStorage.setItem("userdata", JSON.stringify(userdata));
        this.setState({ usertoken: true });
      }
    }
    this.setState({
      username: "",
      password: "",
    });
  };
  componentDidMount = () => {
    this.setState({
      allUsersDetails: JSON.parse(localStorage.getItem("UsersData")),
    });
  };
  validLoginForm = (e) => {
    this.verifyUser();
  };

  OnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    var name = e.target.name;
    var value = e.target.value;
    console.log(name);
    switch (name) {
      case "username":
        if (name.length === 0) {
          this.setState({
            error: { usernameerror: "username should not be empty" },
          });
        } else if (!name.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
          this.setState({
            error: {
              usernameerror:
                "username should be your email and it should contain @ and .",
            },
          });
        } else {
          this.setState({
            error: { usernameerror: "username should not be empty" },
          });
        }

      case "password":
        if (value.length === 0) {
          this.setState({
            error: {
              passworderror: "password should not blank",
            },
          });
        } else if (!value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)) {
          this.setState({
            error: {
              passworderror: `password should conatin atleast 1 capital 1 special 
                character and minimum length of 8`,
            },
          });
        } else {
          this.setState({ error: { passworderror: "" } });
        }
    }
  };

  render() {
    if (this.state.admintoken) {
      return <Redirect to="/admin" />;
    }

    if (this.state.usertoken) {
      return <Redirect to="/user" />;
    }
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <form
            style={{ maxWidth: "500px", margin: "auto", marginTop: "100px" }}
          >
            <span className="input-container">
              <i className="fa fa-user icon"></i>
              <input
                className="input-field"
                type="text"
                placeholder="Username"
                // autoComplete="off"
                name="username"
                value={this.state.username}
                onChange={this.OnChange}
              />
            </span>
            <pre style={{ color: "red" }}>{this.state.error.usernameerror}</pre>

            <span className="input-container">
              <i className="fa fa-key icon"></i>
              <input
                className="input-field"
                type="password"
                placeholder="Password"
                // autoComplete="off"
                value={this.state.password}
                name="password"
                onChange={this.OnChange}
              />
            </span>
            <pre style={{ color: "red" }}>{this.state.error.passworderror}</pre>

            <button
              type="button"
              className="btn btn-primary"
              value={this.state.username}
              onClick={this.validLoginForm}
            >
              LogIn
            </button>
            <div>
              <b>need an account? click here </b>{" "}
              <span>
                <Link to="/signup">SignUp</Link>
              </span>
            </div>
          </form>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default LogIn;
