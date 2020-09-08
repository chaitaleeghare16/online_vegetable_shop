import React, { Component } from "react";
import "./Styles/LogIn.css";
import { Link, BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
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
    };
  }

  verifyUser = () => {
    const username = this.state.username;
    const password = this.state.password;
    const userdetail = this.state.allUsersDetails;

    var flag = 0;
    var isLoggedIn = false;
    var name = "";
    for (var user of userdetail) {
      if (
        username === user.Email &&
        password === user.Password &&
        user.isAdmin === false
      ) {
        flag = 1;
        name = user.FirstName;
        isLoggedIn = true;

        break;
      }

      if (
        username === user.Email &&
        password === user.Password &&
        user.isAdmin === true
      ) {
        flag = 2;
        name = user.FirstName;
        isLoggedIn = true;
        break;
      }
    }

    if (flag === 1 && isLoggedIn == true) {
      this.props.history.push(`/home/${name}`);
    }
    if (flag === 2 && isLoggedIn == true) {
      this.props.history.push(`/admin/${name}`);
    }

    if (flag == 0) {
      alert("login failed");
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
    if (this.state.username.length == 0) {
      this.setState({
        error: { usernameerror: "uername should not be empty" },
      });
      // alert(this.state.error.passworderror)
    } else if (this.state.password.length == 0) {
      this.setState({
        error: { passworderror: "password should not be empty" },
      });
      // alert(this.state.error.passworderror)
    }

    this.verifyUser();
  };

  OnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <form
            a
            style={{ maxWidth: "500px", margin: "auto", marginTop: "150px" }}
          >
            <span class="input-container">
              <i class="fa fa-user icon"></i>
              <input
                class="input-field"
                type="text"
                placeholder="Username"
                autoComplete="off"
                name="username"
                value={this.state.username}
                onChange={this.OnChange}
              />
            </span>
            <pre style={{ color: "red" }}>{this.state.error.usernameerror}</pre>

            <span class="input-container">
              <i class="fa fa-key icon"></i>
              <input
                class="input-field"
                type="password"
                placeholder="Password"
                autoComplete="off"
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
