import React from "react";

import RelatedImages from "../components/VistaDetalle/RelatedImages";
import PackageMap from "../components/VistaDetalle/PackageMap";
import MorePackages from "../components/VistaDetalle/MorePackages";
import BookingForm from "../components/VistaDetalle/BookingForm";

import "../../src/styles/VistaDetalle/VistaDetalle.css";
import PackageDetail from "../components/VistaDetalle/PackageDetail";

const VistaDetalle = () => {
  return (
    <div className="vista-detalle">
      <header className="vista-detalle-header">
        <h1>PACKAGE DETAIL</h1>
      </header>
      <div className="container">
        <div className="vista-detalle-container">
          <PackageDetail />
          <div className="vista-detalle-sidebar">
            <BookingForm />
            <RelatedImages />
            <PackageMap />
            <MorePackages />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VistaDetalle;
