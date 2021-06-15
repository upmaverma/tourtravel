import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./search.css";

const url = "https://travelapilive.herokuapp.com/location";

class search extends Component {
  constructor() {
    super();

    this.state = {
      statename: "",
    };
  }

  renderState = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <>
            <option value={item.state}>{item.state_name}</option>
          </>
        );
      });
    }
  };
  handleState = (event) => {
    this.props.history.push(`/details/${event.target.value}`);
  };
  render() {
    return (
      <>
        <div className="conatiner-fluid header">
          <div className="headerContent">
            <div className="symbol">
              <img
                src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/f2f22ecd2a65a7ec0948116753b647f9/98c24a1e-c36e-4c33-8147-1f9d62a6131d_rw_1200.gif?h=5a5b72634dd8e27f4af7fc6a7ae01862"
                alt="symbol"
                className="animatedSymbol"
              />
            </div>
            <div className="row">
              <div className="col-sm">
                <h1 className="contentHeading">Welcome to our india</h1>
                <p className="contentPara">
                  Better to see something once than hear about it a thousand
                  times
                </p>
              </div>
            </div>
            <div className="container searchArea">
              <div className="row">
                <div className="col-md-7 selectcity">
                  <div className="form-group">
                    <select
                      className="form-control"
                      id="selectCity"
                      onChange={this.handleState}
                    >
                      <option value="1">Select Your State</option>
                      {this.renderState(this.state.statename)}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  componentDidMount() {
    axios.get(url).then((response) => {
      this.setState({ statename: response.data });
    });
  }
}

export default withRouter(search);
