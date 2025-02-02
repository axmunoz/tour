import React from "react";
import PackageMeta from "./PackageMeta";
import PackageOverview from "./PackageOverview";
import PackageInclude from "./IncludeExclude";
import PackageItinerary from "./Itinerary";
import "../../styles/VistaDetalle/PackageDetail.css";
import PackageHeader from "./PackageHeader";

function PackageDetail() {
  return (
    <div className="single-packge-wrap">
      <div className="single-package-head d-flex align-items-center">
        <PackageHeader />
      </div>
      <PackageMeta />
      <div className="vista-detalle-image-placeholder">
        <span>1500x1000</span>
      </div>
      <div className="package-content-detail">
        <PackageOverview />
        <PackageInclude />
        <PackageItinerary />
      </div>
    </div>
  );
}

export default PackageDetail;
