import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import tomato from "../tomato.jpeg";
import ginger from "../ginger.jpeg";
import potato from "../potato.jpeg";
import onion from "../onion.jpeg";
import Admin_User_Header from "./Admin_User_Header";
import { Redirect, Link } from "react-router-dom";
import Noty from "noty"; // use for notification and alert box
import { store } from "react-notifications-component";

const img_path = [tomato, onion, potato, ginger];
export class ProductDisplayintoCart extends Component {
  constructor(props) {
    super(props);
    var userlogin = sessionStorage.getItem("usertoken");
    this.state = {
      isuserloggedin: userlogin,
      username: "",
      useremail: "",
      orderdata: [
        {
          ordernum: 0,
          date: 0,

          itemdata: [
            {
              itemname: "",
              itemprice: 0,
              quantity: 0,
            },
          ],
        },
      ],
    };
  }
  updateCount = (count, id, index) => {
    var cart_items = JSON.parse(localStorage.getItem("cart"));
    for (let i = 0; i < cart_items.length; i++) {
      if (id === cart_items[i].id) {
        cart_items[i].count += 1;
        break;
      }
    }

    localStorage.setItem("cart", JSON.stringify(cart_items));
    this.calculatTotalAmount();

    window.location.reload();
  };

  calculatTotalAmount() {
    var sum = 0;
    var cart_items = JSON.parse(localStorage.getItem("cart"));
    cart_items.map((items, index) => {
      sum += items.count * items.price;
    });
    localStorage.setItem("total", JSON.stringify(sum));
  }

  placeOrder() {
    var cart_items = JSON.parse(localStorage.getItem("cart"));
    var orderno = Math.random();
    let dateObj = new Date();
    let month = dateObj.getMonth();
    let day = String(dateObj.getDate()).padStart(2, "0");
    let year = dateObj.getFullYear();
    let output = day + "-" + month + "-" + year;
    cart_items.forEach(
      (item) => (
        (item.orderNo = Math.floor(orderno * 10) + 1), (item.orderdate = output)
      )
    );
    var order = JSON.parse(localStorage.getItem("order"));

    if (order == null) {
      localStorage.setItem("order", JSON.stringify(cart_items));
    } else {
      //we need to pass cart items as object instead of array so spreading array with spread operator
      order.push(...cart_items);
      localStorage.setItem("order", JSON.stringify(order));
    }

    // once the order is placed we need to remove items from the cart
    // below code will handle the situation by replacing the content with empty values
    var temp = [];
    var sum = 0;
    localStorage.setItem("cart", JSON.stringify(temp));
    localStorage.setItem("total", JSON.stringify(sum));

    store.addNotification({
      title: "",
      message: "To see orders go to MyOrder",
      type: "warning",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 1500,
      },
    });
  }

  componentDidMount() {
    var userdata = JSON.parse(sessionStorage.getItem("userdata"));
    this.setState({ username: userdata.fname, useremail: userdata.email });
  }

  render() {
    if (this.state.isuserloggedin) {
      var sum = JSON.parse(localStorage.getItem("total")) || 0;
      var cart_items = JSON.parse(localStorage.getItem("cart"));
      if (cart_items == null) {
        alert("cart is empty");
      }
      this.calculatTotalAmount();
      return (
        <div>
          <div>
            <Admin_User_Header />
          </div>
          <div style={{ color: "green" }}>
            Welcome to cart {this.state.username}
          </div>
          <div>
            {cart_items.map((items, index) => (
              <ul className="list pl0 mt0 measure center" key={items.id}>
                <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
                  <img
                    className="w2 h2 w3-ns h3-ns br-100"
                    src={img_path[items.img]}
                  />

                  <div className="pl3 flex-auto">
                    <span className="f6 db black-70">{items.name} </span>

                    <span className="f6 db black-70">
                      price :{items.price}/{items.unit}{" "}
                    </span>

                    <span style={{ marginLeft: "200px" }}>
                      count{" "}
                      <button
                        onClick={() =>
                          this.updateCount(items.count, items.id, index)
                        }
                      >
                        +
                      </button>
                      &nbsp;
                      {items.count}&nbsp;
                      <button
                        onClick={() =>
                          this.updateCount(items.count, items.id, index)
                        }
                      >
                        -
                      </button>
                      &nbsp;
                    </span>
                  </div>
                </li>
              </ul>
            ))}
          </div>

          <div style={{ marginLeft: "500px", marginTop: "40px" }}>
            <button
              className="btn btn-danger"
              style={{ width: "120px" }}
              onClick={() => this.placeOrder()}
            >
              Place Order
            </button>
          </div>

          <div
            className="list pl0 mt0 measure center"
            style={{ marginTop: "-20px" }}
          >
            Total Amount : {sum}{" "}
          </div>

          <div>
            <Footer />
          </div>
        </div>
      );
    }
  }
}

export default ProductDisplayintoCart;
