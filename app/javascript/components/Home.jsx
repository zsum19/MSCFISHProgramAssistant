import React from "react";
import { Link } from "react-router-dom";
import AnnouncementsView from "./AnnouncementsView";
import LinkButton from "./common/LinkButton";
import EventsView from "./EventsView";

export default () => (
  
    
      
      <div className="center-desktop">

        
        <div>
          <h1>MSCFISH <i>Program Assistant</i></h1>
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
        <a href="index/database_dump.zip" download = "database_dump.zip">
          <button class = "btn btn-lg custom-button">Download Database</button>
        </a>
        
      </div>
   
  
);