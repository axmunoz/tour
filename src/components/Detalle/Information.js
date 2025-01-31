import React from "react";
import { FaUserFriends, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "../../styles/packageDetail/Information.css";

function Information() {
  return (
    <div className="information-container">
      <h1 className="title">SUMMER HOLIDAY TO <br /> THE OXOLOTAN RIVER</h1>
      <div className="rating">
        ★★★★☆
      </div>
      <div className="price-container">
        <span className="price">$750</span>
        <span className="per-person">/ per person</span>
      </div>
      <div className="trip-details">
        <p><FaClock /> 7D/6N</p>
        <p><FaUserFriends /> pax: 10</p>
        <p><FaMapMarkerAlt /> Category: Hangout | Malaysia</p>
      </div>
      <div className="image-placeholder">
        1500x1000
      </div>
    </div>
  );
}

export default Information;
