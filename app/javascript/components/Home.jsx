import React from "react";
import { Link } from "react-router-dom";
import LatestAnnouncementsView from "./LatestAnnouncementsView";
import LinkButton from "./common/LinkButton";
import LatestEventsView from "./LatestEventsView";
import Navbar from "./common/Navbar";

import "./css/Home.css";

export default () => (
      <div style = {{width: "100vw", height: "100vh"}}>
        <Navbar/>
        
        <div className = "py-5 homeMainContent">
          <div className="center-desktop">
            <div>
              <h1 className = "heading">MSC FISH <i>Program Assistant</i></h1>
            </div>

            <div className="container d-flex w-100 flex-wrap">
              <div className="left">
                <LatestAnnouncementsView></LatestAnnouncementsView>
              </div>
      
              <div className="right">
                <LatestEventsView></LatestEventsView>
              </div>
            </div>
        </div>       
      </div>
    </div>
);
