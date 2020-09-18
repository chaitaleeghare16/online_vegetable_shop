import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Bootstrap from "./Bootstrap";

import LogIn from "./Project/LogIn";
import SignUp from "./Project/SignUp";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Admin from "./Project/Admin";
import Header from "./Project/Header";
import Cart from "./Project/Cart";
import AboutUs from "./Project/AboutUs";
import MyOrder from "./Project/MyOrder";
import Home from "./Project/Home";
import Footer from "./Project/Footer";
import HomePage from "./Project/HomePage";
import ContactUs from "./Project/ContactUs";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

import Noty from "noty";
import "../node_modules/noty/lib/noty.css";
import "../node_modules/noty/lib/themes/bootstrap-v4.css";

import "./Project/Styles/Footer.css";
import "animate.css";

function App() {
  return (
    <div>
      <ReactNotification />
      <div className="App">
        <Switch>
          <Route path="/cart" exact component={Cart}></Route>
          <Route path="/aboutus" exact component={AboutUs}></Route>
          <Route path="/contactus" exact component={ContactUs}></Route>
          <Route path="/myorder" component={MyOrder}></Route>
          <Route path="/user" exact component={Home}></Route>
          <Route path="/admin" component={Admin}></Route>

          <Route path="/login" exact component={LogIn} />
          <Route path="/signup" exact component={SignUp} />

          <Route path="/" exact component={HomePage} />
        </Switch>
      </div>
      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
