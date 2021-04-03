import React from "react";
import { Link } from "react-router-dom";
import EventBadge from "./common/EventBadge";
import LocaleBadge from "./common/LocaleBadge";
import LinkButton from "./common/LinkButton";

export default (props) => ( 
    <div className = "single-post announcement-view">
        <h2 className = "post-heading">{props.title}</h2>
        <EventBadge text = {props.event_id}></EventBadge>
        <p className = "single-event-description">{props.content}</p>
        <p 
            style = {{
                fontSize: "medium",
                fontWeight: "lighter"
            }}
        > - <i>{props.author}</i></p>
        <p className = "subtitle">{props.date_posted}</p>

        {(props.admin == false || props.admin == undefined) ? (
        <Link to={`/announcement/${props.id}`} className="btn custom-button">
            View Announcement
        </Link>
        ) : (
        <>
            <Link to={`/announcement/edit/${props.id}`} className="btn custom-button">
                Edit
            </Link>
            <button type="button" className="btn btn-danger pull-right" onClick={props.onClick}>Delete</button>
         </>
        )}
    </div>    
); 