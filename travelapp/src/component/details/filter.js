import axios from "axios";
import React, { Component } from "react";
import "./details.css";

const url = "https://travelapilive.herokuapp.com/traveldetail?category=";
class filter extends Component {
  handlefilter = (event) => {
    let id1 = event.target.value;
    axios.get(`${url}${id1}`).then((response) => {
      this.props.perfilter(response.data);
    });
  };
  render() {
    return (
      <>
        <div className="filterSection" onChange={this.handlefilter}>
          <h4>Filter</h4>
          <form>
            <div className="form-check">
              <label>
                <input
                  type="radio"
                  className="form-check-input"
                  name="entertain"
                  value=""
                />
                All
              </label>
            </div>
            <div className="form-check">
              <label>
                <input
                  type="radio"
                  className="form-check-input"
                  name="entertain"
                  value="1"
                />
                Historical Monumnents
              </label>
            </div>
            <div className="form-check">
              <label>
                <input
                  type="radio"
                  className="form-check-input"
                  name="entertain"
                  value="2"
                />
                Mountains
              </label>
            </div>
            <div className="form-check">
              <label>
                <input
                  type="radio"
                  className="form-check-input"
                  name="entertain"
                  value="3"
                />
                Wildlife sanctuaries
              </label>
            </div>
          </form>
        </div>
      </>
    );
  }
}
export default filter;
