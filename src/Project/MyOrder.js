import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Admin_User_Header from "./Admin_User_Header";
import tomato from "../tomato.jpeg";
import ginger from "../ginger.jpeg";
import potato from "../potato.jpeg";

import onion from "../onion.jpeg";

const img_path = [tomato, onion, potato, ginger];
export class MyOrder extends Component {
  constructor(props) {
    super(props);

    var userlogin = sessionStorage.getItem("usertoken");
    this.state = {
      isuserloggedin: userlogin,
      useremail: "",
      username: "",
      orderDetails: [],
    };
  }

  DeleteItem = (index, e) => {
    alert("on delete");

    var order = JSON.parse(localStorage.getItem("order"));
    order.splice(index, 1);
    localStorage.setItem("order", JSON.stringify(order));

    window.location.reload();
  };

  componentDidMount() {
    var userdata = JSON.parse(sessionStorage.getItem("userdata"));
    this.setState({ useremail: userdata.email, username: userdata.fname });
    var order = JSON.parse(localStorage.getItem("order"));
    this.setState({ orderDetails: order });
  }

  render() {
    if (this.state.isuserloggedin) {
      var orderDetails = this.state.orderDetails;
      return (
        <div>
          <div>
            <Admin_User_Header />
          </div>

          <div style={{ color: "green" }}>
            {" "}
            Welcome {this.state.username}
            <br /> Happy Shopping!
          </div>
          <div>
            <div style={{ color: "black", marginLeft: "800px" }}>
              <strong> UserDetails</strong>
            </div>
            <div style={{ color: "black", marginLeft: "800px" }}>
              Email:<span style={{ color: "red" }}>{this.state.useremail}</span>{" "}
            </div>
            <div style={{ color: "black", marginLeft: "660px" }}>
              Name : <span style={{ color: "red" }}>{this.state.username}</span>
              <hr />
            </div>
          </div>
          {orderDetails === null
            ? "Please place order first"
            : orderDetails.map((items, index) => {
                console.log(items);

                for (let i = 0; i < orderDetails.length; i++) {
                  for (let j = 0; j < orderDetails.length; j++) {
                    return (
                      <div>
                        <table style={{ marginLeft: "400px" }}>
                          <tr>
                            <td>
                              <img
                                src={img_path[items.img]}
                                className="w2 h2 w3-ns h3-ns br-100"
                              />
                            </td>

                            <td>
                              <ul style={{ listStyle: " none" }}>
                                <li>
                                  <strong>Name:</strong>
                                  {items.name}
                                </li>
                                <li>
                                  <strong>Price:</strong>
                                  {items.price}/{items.unit}
                                </li>
                                <li>
                                  <strong>Quantity:</strong> {items.count}{" "}
                                  {items.unit}
                                </li>

                                <li>
                                  <strong>OrderDate:</strong>
                                  {items.orderdate}
                                </li>
                                <li className="flex items-center lh-copy pa3 ph0-l bb b--black-20"></li>
                              </ul>
                            </td>
                          </tr>
                        </table>
                      </div>
                    );
                  }
                }
              })}
          <div>
            <Footer />
          </div>
        </div>
      );
    } else {
      alert("please login first");
    }
  }
}

export default MyOrder;
