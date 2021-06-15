import React from "react";
import "./details.css";
import { Link } from "react-router-dom";

const displaydetail = (props) => {
  const renderList = ({ displayData }) => {
    if (displayData) {
      if (displayData.length > 0) {
        return displayData.map((item) => {
          return (
            <>
              <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.nights}</td>
                <td>{item.inclusions}</td>
                <td>
                  <Link to={`/info/${item._id}`}>
                    <button className="btn btn-info">View Details</button>
                  </Link>
                </td>
              </tr>
            </>
          );
        });
      } else {
        return (
          <>
            <div className="nodata">
              <center>
                <h2>oops! sorry no package is available</h2>
              </center>
            </div>
          </>
        );
      }
    } else {
      return (
        <div className="item">
          <img
            src="https://cdn.dribbble.com/users/108183/screenshots/2301400/spinnervlll.gif"
            style={{ height: 400, width: 500 }}
            alt="loader"
          />
        </div>
      );
    }
  };
  return (
    <>
      <div className="travelList">
        <center>
          <h3>Travel Packages available!</h3>
        </center>
        <div className="row">
          <div className="col-sm">
            <div className="tableData">
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th>Package Name</th>
                    <th>Price</th>
                    <th>Nights</th>
                    <th>Inclusions</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>{renderList(props)}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default displaydetail;
