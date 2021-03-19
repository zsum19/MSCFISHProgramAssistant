import React from "react";
import { Link } from "react-router-dom";
import EventView from "./EventView";

export default (props) => ( 
    <div style = {{border: "1px solid #bbb"}} className = "events-view">
        <div className = "colored-heading">
            <h2 className = "text test"> EVENTS </h2>
        </div>
        <div className = "small-padding scroll-box"> 
        <EventView 
            title = "Deliver a Pizza Ball" 
            subtitle = "Service Event" 
            description = "Help the officers deliver a pizza ball in the most effective, efficent , and timeliest manner possible!"
            time = "9:00 AM - 11:00 AM CST"
        ></EventView>
        <EventView
            title = "Eat Hot Dogs"
            subtitle = "Social"
            description = "mmm hot dog"
            time = "3:00 AM - 3:15 AM CST"
        >  
        </EventView>
        </div>
  </div>
); 