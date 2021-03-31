import React from "react";
import { Link } from "react-router-dom";
import AnnouncementsView from "./LatestAnnouncementsView";
import LinkButton from "./common/LinkButton";
import LatestEventsView from "./LatestEventsView";

export default () => (
  

      <div style = {{width: "100vw", height: "100vh", backgroundColor: "whitesmoke"}}>
        
        <div class="sidebar">
          {/* <img src = "logo.jpeg" alt = "MSC FISH logo"></img> */}
          <Link className =  "custom-button lg" to = "/allevents">Events</Link>
          <Link className =  "custom-button lg" to = "/announcements">Announcements</Link>
          <Link className =  "custom-button lg" to = "/checkin/1">Check In</Link>
          <a href="index/database_dump.zip" className =  "custom-button lg" download = "database_dump.zip">
              Download Database
          </a>
        </div>
        
        <div className = "py-5">
          <div className="center-desktop">
            <div>
              <h1 className = "heading">MSC FISH <i>Program Assistant</i></h1>
            </div>
          
            <div className="left">
              <AnnouncementsView></AnnouncementsView>
            </div>
    
            <div className="right">
              <LatestEventsView></LatestEventsView>
            </div>
            
            <LinkButton className =  "to-button" to = "/allevents" text = "Events"></LinkButton>
            <LinkButton className =  "to-button" to = "/announcements" text = "Announcements"></LinkButton>
            <LinkButton className =  "to-button" to = "/checkin/1" text = "Check In"></LinkButton>
            <a href="index/database_dump.zip" download = "database_dump.zip">
              <button className = "btn btn-lg custom-button">Download Database</button>
            </a>
        </div>       
      </div>
    </div>
);