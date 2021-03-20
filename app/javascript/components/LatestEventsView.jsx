import React from "react";
import { Link } from "react-router-dom";
import EventView from "./EventView";
import Events from "./Events";

export default (props) => ( 
    <div style = {{border: "1px solid #bbb"}} className = "events-view">
        <div className = "colored-heading">
            <h2 className = "text test"> LATEST EVENTS </h2>
        </div>
        <div className = "small-padding scroll-box"> 

            <div className = "col-md-12 col-lg-12">
                <Events></Events>
            </div>
        
        </div>
  </div>
); 