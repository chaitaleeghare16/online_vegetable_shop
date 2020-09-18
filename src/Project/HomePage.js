import React, { Component } from "react";
import Cart from "./Cart";
import tomato from "../tomato.jpeg";
import ginger from "../ginger.jpeg";
import potato from "../potato.jpeg";
import logo from "../logo.jpg";
import onion from "../onion.jpeg";

import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import "./Styles/Header.css";
import "./Styles/homeFooter.css";
import { store } from "react-notifications-component";
import Noty from "noty";
const img_path = [tomato, onion, potato, ginger];
const products = [
  {
    id: 1,
    name: "Tomato",
    img: 0,
    price: 19,
    unit: "kg",
    stock: "In Stock",
    count: 0,
  },
  {
    id: 2,
    name: "Onion",
    img: 1,
    price: 40,
    unit: "kg",
    stock: "In Stock",
    count: 0,
  },
  {
    id: 3,
    name: "Potato",
    img: 2,
    price: 60,
    unit: "kg",
    stock: "In Stock",
    count: 0,
  },

  {
    id: 4,
    name: "Ginger",
    img: 3,
    price: 30,
    unit: "gm",
    stock: "In Stock",
    count: 0,
  },
];

export class Home extends Component {
  constructor(props) {
    super(props);
  }

  calculatTotalAmount() {
    var sum = 0;
    var cart_items = JSON.parse(localStorage.getItem("cart"));
    cart_items.map((items, index) => {
      sum += items.count * items.price;
    });
    localStorage.setItem("total", JSON.stringify(sum));
  }

  handleAddData = (i) => {
    // console.log(nameofuser);

    //document.getElementById("msg").innerHTML = "*** please login first ***";
    // store.addNotification({
    //   title: "",
    //   message: "Please Login First",
    //   type: "warning",
    //   insert: "top",
    //   container: "top-right",
    //   animationIn: ["animated", "fadeIn"],
    //   animationOut: ["animated", "fadeOut"],
    //   dismiss: {
    //     duration: 1000,
    //     onScreen: true,
    //   },
    //   id: i,
    // });

    let n = new Noty({
      type: "success  ",
      layout: "topRight",
      text: "You have to login first",
      theme: "bootstrap-v4",
      animationIn: ["animated", "fadeIn"],
      buttons: [
        Noty.button("ok", "btn btn-primary", () => {
          n.close();
        }),
      ],
    }).show();
  };

  // intialize cart and product variable
  componentDidMount() {
    var arr = JSON.parse(localStorage.getItem("product"));
    var total = JSON.parse(localStorage.getItem("total")) || 0;

    if (arr == null) {
      arr = [];
      products.map((items) => {
        arr.push(items);

        localStorage.setItem("product", JSON.stringify(arr));
      });
    }

    localStorage.setItem("total", JSON.stringify(total));
  }
  render() {
    var a = JSON.parse(localStorage.getItem("product"));
    if (a == null) {
      this.componentDidMount();
    }

    return (
      <div>
        <div>
          <Header />
        </div>
        <div id="msg" style={{ color: "red", fontSize: "30px" }}></div>
        {JSON.parse(localStorage.getItem("product")).map((items, index) => (
          <ul class="list pl0 mt0 measure center">
            <li class="flex items-center lh-copy pa3 ph0-l bb b--black-10">
              <img class="w3 h3 w4-ns h4-ns br-100" src={img_path[index]} />
              <div class="pl3 flex-auto">
                <span class="f6 db black-70">{items.name}</span>
                <span class="f6 db black-90">
                  <strong>Price :</strong>
                  {items.price}/{items.unit}
                </span>
                <span class="f6 db black-70">{items.stock}</span>

                <button
                  className="btn btn-danger"
                  value={index}
                  onClick={() => this.handleAddData(index)}
                >
                  ADD to cart
                </button>
              </div>
            </li>
          </ul>
        ))}

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
