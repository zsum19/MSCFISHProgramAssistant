import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">MSC Fish - Program Assistant</h1>
        <p className="lead">
          MSCFISHPA Homepage For Navigation Ease!
        </p>
        <hr className="my-4" />
        <Link
          to="/events"
          className="btn btn-lg custom-button"
          role="button"
        >
          View Events
        </Link>
        <Link
          to="/announcements"
          className="btn btn-lg custom-button"
          role="button"
        >
          View Announcements
        </Link>
        <Link
          to="/CheckIn"
          className="btn btn-lg custom-button"
          role="button"
        >
          Check In
        </Link>
      </div>
    </div>
  </div>
);