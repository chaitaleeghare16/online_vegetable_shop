import React, { Component } from "react";
import "./Styles/admin.css";
import Footer from "./Footer";
import Admin_User_Header from "./Admin_User_Header";

export class Admin extends Component {
  constructor(props) {
    super(props);
    var adminlogin = sessionStorage.getItem("admintoken");
    this.state = {
      vegetableName: "",
      price: "",
      inStock: "",
      vegetabledetails: [],
      adminname: "",
      isadminlogin: adminlogin,
    };
  }

  HandleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentDidMount = () => {
    this.setState({
      vegetabledetails: JSON.parse(localStorage.getItem("vegetabledetails")),
    });

    var data = JSON.parse(sessionStorage.getItem("admindata"));
    this.setState({ adminname: data.fname });
  };

  SubmitData = (d) => {
    d.preventDefault();

    var name = this.state.vegetableName;

    var price = this.state.price;
    var stock = this.state.inStock;
    var data = this.state.vegetabledetails;

    var obj = { name, price, stock };

    if (data == null) {
      data = [];
    }

    data.push(obj);

    localStorage.setItem("vegetabledetails", JSON.stringify(data));
    alert("vegetable detail added into storage");

    this.setState({
      vegetableName: "",
      price: "",
      inStock: "",
    });
  };

  render() {
    if (this.state.isadminlogin) {
      return (
        <div>
          <div>
            <Admin_User_Header />
          </div>
          <div>
            <h2>Welcome {this.state.adminname} (Admin)</h2>
          </div>
          <span>
            <table
              class="table-bordered"
              style={{
                marginTop: "80px",
                marginLeft: "260px",
              }}
            >
              <tr>
                <th>
                  <label>Vegetable_Name :</label>
                </th>
                {/* <td><input type="text" name='vegetableName' value={this.state.vegetableName} onChange={this.HandleChange} style={{width:'180px'}}/></td> */}
                <td>
                  <select
                    name="vegetableName"
                    onChange={this.HandleChange}
                    style={{ width: "180px" }}
                  >
                    <option value="">Select</option>
                    <option value="onion">Onion</option>
                    <option value="tomato">Tomato</option>
                    <option value="potato">Potato</option>
                    <option value="ginger">Ginger</option>
                  </select>
                </td>
              </tr>

              <tr>
                <th>
                  <label>Vegetable_Price :</label>
                </th>
                <td>
                  <input
                    type="text"
                    name="price"
                    value={this.state.price}
                    onChange={this.HandleChange}
                  ></input>
                </td>
              </tr>

              <tr>
                <th>
                  <label>Item In Stock:</label>
                </th>
                <td>
                  <input
                    type="text"
                    name="inStock"
                    value={this.state.inStock}
                    onChange={this.HandleChange}
                  ></input>
                </td>
              </tr>

              <td></td>
              <td>
                <button type="submit" value="" onClick={this.SubmitData}>
                  Submit
                </button>
              </td>
            </table>
          </span>

          {/* <span>
          <center>
            <table
              class="table-bordered"
              style={{
                border: "2px solid blue",
                marginTop: "-212px",
                marginLeft: "440px",
              }}
            >
              <thead>
                <tr>
                  <th>OrderId</th>
                  <th>Status</th>

                  <th
                    colSpan="2"
                    style={{ marginLeft: "40px", textAlign: "center" }}
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>pending</td>

                  <td>
                    <button className="btn btn-primary">Approved</button>
                  </td>
                  <td>
                    <button className="btn btn-primary">Rejected</button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>pending</td>

                  <td>
                    <button className="btn btn-primary">Approved</button>
                  </td>
                  <td>
                    <button className="btn btn-primary">Rejected</button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>pending</td>

                  <td>
                    <button className="btn btn-primary">Approved</button>
                  </td>
                  <td>
                    <button className="btn btn-primary">Rejected</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </center>
        </span> */}
          <div>
            <Footer />
          </div>
        </div>
      );
    }
  }
}

export default Admin;
