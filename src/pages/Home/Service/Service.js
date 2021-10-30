import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { _id, sName, sdescription, price, sImage, travel_time } = props.service;
  return (
    <div className="col-lg-4 col-md-6">
      <div className="single_place">
        <div className="thumb">
          <img src={sImage} alt="img" />
          <span className="prise">${price}</span>
        </div>
        <div className="place_info">
          <h3>{sName}</h3>
          <p>{sdescription}</p>
          <div className="d-flex justify-content-between">
            <span className="d-flex justify-content-center align-items-center">
              <Link to={`/booking/${_id}`}>
                <button className="btn btn-info">Book Now</button>
              </Link>
            </span>
            <div className="days">
              <span href="#">{travel_time} Days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
