import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import "../../styles/VistaDetalle/PackageHeader.css";

const PackageHeader = () => {
  return (
    <div className="package-header">
      <div className="package-title">
        <h2>SUMMER HOLIDAY TO THE OXOLOTAN RIVER</h2>
        <div className="rating-stars">
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStarHalfAlt className="star" />
        </div>
      </div>
      
      <div className="package-price">
        <span className="price">$750</span>
        <span className="per-person">/ per person</span>
      </div>
    </div>
  );
};

export default PackageHeader;

