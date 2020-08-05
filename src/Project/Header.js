import React, { Component } from "react";
import "./Styles/Header.css";

import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cart from "./Cart";
import AboutUs from "./AboutUs";
import MyOrder from "./MyOrder";

import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Footer from "./Footer";
import Admin from "./Admin";
import Home from "./Home";
import HomePage from "./HomePage";
import Product from "./Product";

export class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <main id="header">
          <div></div>
          <div>
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
                AboutUs
              </Link>
            </span>
            <span id="infoicon">
              <FontAwesomeIcon className="infoicon" icon="info" size="xs" />
            </span>

            <span id="myorder">
              <Link className="link" to="/myorder">
                MyOrder
              </Link>
            </span>
            <span id="ordericon">
              <FontAwesomeIcon
                className="ordericon"
                icon="list-alt"
                size="1x"
              />
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
        </main>

        <Switch>
          <Route path="/cart" exact component={Cart}></Route>
          <Route path="/aboutus" exact component={AboutUs}></Route>
          <Route path="/myorder" exact component={MyOrder}></Route>
          <Route path="/home/:name" exact component={HomePage}></Route>
          <Route path="/admin/:name" exact component={Admin}></Route>

          <Route path="/login" exact component={LogIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/" exact component={Home} />
        </Switch>

        <Footer />
      </BrowserRouter>
    );
  }
}

export default Header;
