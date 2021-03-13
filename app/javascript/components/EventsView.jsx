import React from "react";
import { Link } from "react-router-dom";
import EventView from "./EventView";

export default (props) => ( 
    <div style = {{border: "1px solid #bbb"}}>
        <div className = "colored-heading">
            <h2 className = "text test"> EVENTS </h2>
        </div>
        <div className = "small-padding scroll-box"> 
        <EventView 
            title = "Deliver a Pizza Ball" 
            subtitle = "Service Event" 
            description = "Help the officers deliver a pizza ball in the most effective, efficent , and timeliest manner possible!"
            time = "Tuesday, March 16th at 9:00 AM"
        ></EventView>
        <EventView
            title = "Eat Hot Dogs"
            subtitle = "Social"
            description = "mmm hot dog"
            time = "Wednesday, March 17th at 3:00 AM"
        >  
        </EventView>
        </div>
  </div>
); 