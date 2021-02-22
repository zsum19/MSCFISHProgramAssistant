import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">MSC Fish - Program Assistant</h1>
        <p className="lead">
          More info to be put here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum libero error enim!
        </p>
        <hr className="my-4" />
        <Link
          to="/events"
          className="btn btn-lg custom-button"
          role="button"
        >
          View Programs
        </Link>
      </div>
    </div>
  </div>
);