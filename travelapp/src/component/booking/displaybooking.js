import React from "react";
import axios from "axios";
import { Component } from "react";
import "./booking.css";

const url = "https://travelapilive.herokuapp.com/booking";

class displaybooking extends Component {
  constructor() {
    super();
    this.state = {
      bookings: "",
    };
  }
  handleBooking = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <>
            <tbody>
              <tr>
                <td>{item._id}</td>
                <td>{item.package}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>{item.price}</td>
              </tr>
            </tbody>
          </>
        );
      });
    }
  };
  render() {
    return (
      <>
        <div className="container viewBookingContainer">
          <div className="bookingTable">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Pakcage Name</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile No.</th>
                  <th>Price</th>
                </tr>
              </thead>
              {this.handleBooking(this.state.bookings)}
            </table>
          </div>
        </div>
      </>
    );
  }
  componentDidMount() {
    axios.get(url).then((response) => {
      this.setState({ bookings: response.data });
    });
  }
}
export default displaybooking;
