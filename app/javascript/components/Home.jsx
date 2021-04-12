import React from "react";
import { Link } from "react-router-dom";
import AnnouncementsView from "./LatestAnnouncementsView";
import LinkButton from "./common/LinkButton";
import LatestEventsView from "./LatestEventsView";
import Navbar from "./common/Navbar";

export default () => (
  

      <div style = {{width: "100vw", height: "100vh"}}>
        
        <Navbar/>
        
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
            

            
            
        </div>       
      </div>
    </div>
);
