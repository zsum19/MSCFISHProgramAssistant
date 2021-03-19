import React from "react";
import { Link } from "react-router-dom";
import AnnouncementsView from "./AnnouncementsView";
import LinkButton from "./common/LinkButton";
import EventsView from "./EventsView";

export default () => (
  
    
      <div style = {{width: "100vw", height: "100vh", backgroundColor: "whitesmoke"}}>
        <div className="center-desktop">

          
          <div>
            <h1 className = "heading">MSCFISH <i>Program Assistant</i></h1>
          </div>
        
          <div className="left">
            <AnnouncementsView></AnnouncementsView>
          </div>
  
          <div className="right">
            <EventsView></EventsView>
          </div>
          
          <LinkButton className =  "to-button" to = "/events" text = "Events"></LinkButton>
          <LinkButton className =  "to-button" to = "/announcements" text = "Announcements"></LinkButton>
          <LinkButton className =  "to-button" to = "/CheckIn" text = "Check In"></LinkButton>
        
        </div>
      </div>
  
);