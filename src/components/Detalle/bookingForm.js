import React from "react";
import "../../styles/packageDetail/BookingForm.css";

const BookingForm = () => {
  return (
    <div className="booking-container">
      <h3 className="form-title">BOOKING FORM</h3>
      <form className="booking-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="date" required />
        <input type="date" required />
        <button type="submit">INQUIRY NOW</button>
      </form>
    </div>
  );
};

export default BookingForm;
