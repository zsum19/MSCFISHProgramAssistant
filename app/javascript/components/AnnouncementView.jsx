import React from "react";
import { Link } from "react-router-dom";
import EventBadge from "./common/EventBadge";
import LocaleBadge from "./common/LocaleBadge";
import LinkButton from "./common/LinkButton";



export default (props) => ( 
    <div className = "single-post announcement-view">
        <h2 className = "post-heading">{props.title}</h2>
        <EventBadge text = {props.eventName}></EventBadge>
        <p className = "single-event-description">{props.description}</p>
        <p 
            style = {{
                fontSize: "medium",
                fontWeight: "lighter"
            }}
        > - <i>{props.author}</i></p>
        <p className = "subtitle">{props.time}</p>
    </div>    
); 