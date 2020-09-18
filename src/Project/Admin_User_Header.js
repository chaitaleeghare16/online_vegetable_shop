import React, { Component } from "react";
import "./Styles/Header.css";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cart from "./Cart";
import AboutUs from "./AboutUs";
import MyOrder from "./MyOrder";
import logo from "../logo.jpg";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Footer from "./Footer";
import Admin from "./Admin";
import Home from "./Home";
//import HomePage from "./HomePage";
import Product from "./Product";

export class Admin_User_Header extends Component {
  render() {
    return (
      <div>
        <link type="text/css" rel="stylesheet" href="Header.css" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <div id="header">
          <div>online Vegetable Shop</div>
          <img id="logo" src={logo} alt="logo"></img>

          <span id="home">
            <Link className="link" to="/user">
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

          <span id="logout">
            <Link
              className="link"
              to="/login"
              style={{ color: "red", marginTop: "10px" }}
            >
              <strong>LogOut</strong>
            </Link>
          </span>
        </div>
      </div>
    );
  }
}

export default Admin_User_Header;
