import React from "react";
import { Link } from "react-router-dom";
import LocaleBadge from "./common/LocaleBadge";
import TypeBadge from "./common/TypeBadge";
import CalendarBadge from "./common/CalendarBadge";

export default (props) => ( 
    <div className = "single-post event-view">
        <h2 className = "event-heading">{props.title}</h2>
        <TypeBadge text = {props.subtitle}></TypeBadge>
        <LocaleBadge text = "Simp Drill Field"></LocaleBadge>
        <CalendarBadge text = "June 9, 2021"></CalendarBadge>
        <p className = "single-event-description">{props.description}</p>
        <p className = "subtitle">{props.time}</p>
    </div>    
); 