import React from "react";
import { Component } from "react";
import "./booking.css";

const url = "https://travelapilive.herokuapp.com/placeBooking";

class booking extends Component {
  constructor() {
    super();
    this.state = {
      package: sessionStorage.getItem("name"),
      name: "",
      email: "",
      mobile: "",
      price: sessionStorage.getItem("price"),
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = () => {
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then(this.props.history.push("/viewBooking"));
  };
  render() {
    return (
      <>
        <div className="container-fluid bookingContainer ">
          <div className="container ">
            <div className="formContainer">
              <div className="card">
                <div className="card-header">
                  <h5>Your Details</h5>
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label>Package Name</label>
                      <input
                        type="text"
                        name="package"
                        className="form-control"
                        value={this.state.package}
                        readOnly
                      />
                    </div>
                    <div className="form-group">
                      <label>Your Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={this.state.name}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Your Email</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Your Mobile number</label>
                      <input
                        type="text"
                        name="mobile"
                        className="form-control"
                        value={this.state.mobile}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Price</label>
                      <input
                        type="text"
                        name="price"
                        className="form-control"
                        value={this.state.price}
                        readOnly
                      />
                    </div>
                    <button
                      className="btn btn-success bookBtn"
                      onClick={this.handleSubmit}
                    >
                      Book
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default booking;
