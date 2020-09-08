import React, { Component } from "react";
import "./Styles/Header.css";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cart from "./Cart";
import AboutUs from "./AboutUs";
import MyOrder from "./MyOrder";

import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Footer from "./Footer";
import Admin from "./Admin";
import Home from "./Home";
//import HomePage from "./HomePage";
import Product from "./Product";

export class Header extends Component {
  render() {
    return (
      <div id="header">
        <img id="logo" src="logo.jpeg" alt="logo"></img>

        <span id="home">
          <Link className="link" to="/">
            Home
          </Link>
        </span>
        <span id="homeicon">
          <FontAwesomeIcon className="homeicon" icon="home" size="1x" />
        </span>

        <span id="aboutus">
          <Link className="link" to="/aboutus">
            About_Us
          </Link>
        </span>
        <span id="infoicon">
          <FontAwesomeIcon className="infoicon" icon="info" size="xs" />
        </span>

        <span id="contactus">
          <Link className="link" to="/contactus">
            Contact_Us
          </Link>
        </span>
        <span id="phone">
          <FontAwesomeIcon icon="phone-square" size="1x" id="phone" />
        </span>

        <span id="myorder">
          <Link className="link" to="/myorder">
            MyOrder
          </Link>
        </span>
        <span id="ordericon">
          <FontAwesomeIcon className="ordericon" icon="list-alt" size="1x" />
        </span>

        <span id="cart">
          <Link className="link" to="/cart">
            Cart
          </Link>
        </span>
        <span id="carticon">
          <FontAwesomeIcon
            className="carticon"
            icon="shopping-cart"
            size="1x"
          />
        </span>

        {/* <span id='logout'>login</span>  */}
        <span id="login">
          <Link className="link" to="/login">
            Login
          </Link>
        </span>

        <span id="logout">
          <Link className="link" to="/login">
            LogOut
          </Link>
        </span>
      </div>
    );
  }
}

export default Header;
