import React from "react";
import { Link } from "react-router-dom";

export default (props) => ( 
    <div class = "single-post">
        <h2 className = "event-heading">{props.title}</h2>
        <p className = "subtitle">{props.subtitle}</p>
        <p className = "single-event-description">{props.description}</p>
        <p className = "subtitle">{props.time}</p>
    </div>    
); 