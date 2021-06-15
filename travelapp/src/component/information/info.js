import React, { Component } from "react";
import "./info.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const url = "https://travelapilive.herokuapp.com/travel";

var settings = {
  dots: true,
};

class info extends Component {
  constructor() {
    super();

    this.state = {
      perDetail: "",
    };
  }

  handlePerDetail = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <>
            <div className="container-fluid infoContainer">
              <div className="travelDetailContainer">
                <div className="photoContainer">
                  <div>
                    <Slider {...settings}>
                      <div>
                        <img
                          src={item.collections[0].photo1}
                          key={item._id}
                          alt="goa"
                          className="imageSlider"
                        />
                      </div>
                      <div>
                        <img
                          src={item.collections[0].photo2}
                          key={item._id}
                          alt="goa"
                          className="imageSlider"
                        />
                      </div>
                      <div>
                        <img
                          src={item.collections[0].photo3}
                          key={item._id}
                          alt="goa"
                          className="imageSlider"
                        />
                      </div>
                      <div>
                        <img
                          src={item.collections[0].photo4}
                          key={item._id}
                          alt="goa"
                          className="imageSlider"
                        />
                      </div>
                      <div>
                        <img
                          src={item.collections[0].photo5}
                          key={item._id}
                          alt="goa"
                          className="imageSlider"
                        />
                      </div>
                    </Slider>
                  </div>
                </div>
                <div className="priceContainer">
                  <p className="packageName" key={item._id}>
                    {item.name}
                  </p>
                  <p>
                    <FontAwesomeIcon icon={["fas", "rupee-sign"]} />
                    {item.price}
                  </p>
                  <div className="infoBox">
                    <div>
                      <p>Themes</p>
                      <div>
                        <div className="icons">
                          <p className="iconImage">
                            <img src={item.icons[0].image} alt="icons" />
                          </p>
                          <p className="iconsExplain">{item.icons[0].name}</p>
                        </div>
                        <div className="icons">
                          <p className="iconImage">
                            <img src={item.icons[1].image} alt="icons" />
                          </p>
                          <p className="iconsExplain">{item.icons[1].name}</p>
                        </div>
                        <div className="icons">
                          <p className="iconImage">
                            <img src={item.icons[2].image} alt="icons" />
                          </p>
                          <p className="iconsExplain">{item.icons[2].name}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p>Facilities</p>
                      <div>
                        <div className="icons">
                          <p className="iconImage">
                            <img src={item.facility[0].image} alt="icons" />
                          </p>
                          <p className="iconsExplain">
                            {item.facility[0].name}
                          </p>
                        </div>
                        <div className="icons">
                          <p className="iconImage">
                            <img src={item.facility[1].image} alt="icons" />
                          </p>
                          <p className="iconsExplain">
                            {item.facility[1].name}
                          </p>
                        </div>
                        <div className="icons">
                          <p className="iconImage">
                            <img src={item.facility[2].image} alt="" />
                          </p>
                          <p className="iconsExplain">
                            {item.facility[2].name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link to={`/booking/${item._id}`}>
                    <button className="btn btn-success"> Book Now</button>
                  </Link>
                </div>
              </div>
              <div className="travelInfoContainer">
                <h4>Overview</h4>
                <p>{item.overview}</p>
                <h4>Schedule Insights</h4>
                <Tabs>
                  <TabList>
                    <Tab>Day 1</Tab>
                    <Tab>Day 2</Tab>
                    <Tab>Day 3</Tab>
                  </TabList>
                  <TabPanel>
                    <p>{item.schedule[0].day1}</p>
                    <p>{item.schedule[0].para}</p>
                  </TabPanel>
                  <TabPanel>
                    <p>{item.schedule[1].day2}</p>
                    <p>{item.schedule[1].para}</p>
                  </TabPanel>
                  <TabPanel>
                    <p>{item.schedule[2].day3}</p>
                    <p>{item.schedule[2].para}</p>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </>
        );
      });
    }
  };
  render() {
    return <>{this.handlePerDetail(this.state.perDetail)}</>;
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    axios.get(`${url}/${id}`).then((response) => {
      this.setState({ perDetail: response.data });
      sessionStorage.setItem("name", response.data[0].name);
      sessionStorage.setItem("price", response.data[0].price);
    });
  }
}
export default info;
