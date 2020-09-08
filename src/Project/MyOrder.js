import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";

export class MyOrder extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        from myorder
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default MyOrder;
