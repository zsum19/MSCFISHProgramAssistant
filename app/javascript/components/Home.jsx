import React from "react";
import { Link } from "react-router-dom";
import LinkButton from "./common/LinkButton";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">MSC Fish - Program Assistant</h1>
        <p className="lead">
          MSCFISHPA Homepage For Navigation Ease!
        </p>
        <hr className="my-4" />
        <LinkButton to = "/events" text = "Events"></LinkButton>
        <LinkButton to = "/announcements" text = "Announcements"></LinkButton>
        <LinkButton to = "/CheckIn" text = "Check In"></LinkButton>
      </div>
    </div>
  </div>
);