import Header from "../components/Detalle/Header";
import BookingForm from "../components/Detalle/bookingForm";
import ImageGallery from "../components/Detalle/ImageGallery";
import Overview from "../components/Detalle/Overview";
import IncludeExclude from "../components/Detalle/IncludeExclude";
import Itinerary from "../components/Detalle/Itinerary";
import MorePackages from "../components/Detalle/MorePackages";
import Map from "../components/Detalle/Map";
import Information from "../components/Detalle/Information";
import '../styles/PackageDetail.css';

function PackageDetails() {
  return (
    <div>
      <Header />
      <div className="package-detail">
        <div className="information-container">
          <Information />
        </div>
        <BookingForm />
      </div>
      
      <ImageGallery />
      <Overview />
      <IncludeExclude />
      <Itinerary />
      <MorePackages />
      <Map />
    </div>
  );
}

export default PackageDetails;
