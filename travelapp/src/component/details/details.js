import axios from "axios";
import React, { Component } from "react";
import "./details.css";
import Filter from "./filter";
import DisplayDetail from "./displaydetail";
const url = "https://travelapilive.herokuapp.com/traveldetail?traveltype=";

class travelDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      traveldetail: "",
    };
  }

  setDataFilter = (sortedata) => {
    this.setState({ traveldetail: sortedata });
  };
  render() {
    return (
      <>
        <div className="container-fluid travelContainer">
          <div className="row">
            <div className="col-lg-3">
              <Filter
                perfilter={(data) => {
                  this.setDataFilter(data);
                }}
              />
            </div>
            <div className="col-lg-8">
              <DisplayDetail displayData={this.state.traveldetail} />
            </div>
          </div>
        </div>
      </>
    );
  }

  componentDidMount() {
    var id = this.props.match.params.id;
    axios.get(`${url}${id}`).then((response) => {
      this.setState({ traveldetail: response.data });
    });
  }
}

export default travelDetail;
