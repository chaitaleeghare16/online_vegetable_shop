import React, { Component } from "react";
import { ProductDisplayintoCart } from "./ProductDisplayintoCart";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    var userlogin = sessionStorage.getItem("usertoken");
    this.state = {
      isuserloggedin: userlogin,
    };
  }

  render() {
    if (this.state.isuserloggedin) {
      return <div>{<ProductDisplayintoCart />} </div>;
    }
  }
}

export default Cart;
