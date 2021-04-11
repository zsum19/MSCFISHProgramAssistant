import React from "react";
import { Link } from "react-router-dom";
import LocaleBadge from "./common/LocaleBadge";
import TypeBadge from "./common/TypeBadge";
import CalendarBadge from "./common/CalendarBadge";
import AttendanceBadge from "./common/AttendanceBadge";
import RemainingTicketsBadge from "./common/RemainingTicketsBadge";
import { checkPropTypes } from "prop-types";

function calculateRemainingTickets(max_size, tickets_sold){
    let max_size_as_num = parseInt(max_size);
    let tickets_sold_as_num = parseInt(tickets_sold);
    return max_size_as_num - tickets_sold_as_num;
}

function formatDay(time_stamp){
    // console.log("TIME STAMP: ", time_stamp);
    let date = getDate(time_stamp);
    let fields = date.split("-");
    let y = fields[0], m = fields[1], d = fields[2];
    let m_string = "";
    let m_as_num = parseInt(m);
    switch (m_as_num) {
        case 1:
            m_string = "January"
            break;
        case 2:
            m_string = "February"
            break;
        case 3:
            m_string = "March"
            break;
        case 4:
            m_string = "April"
            break;
        case 5:
            m_string = "May"
            break;
        case 6:
            m_string = "June"
            break;
        case 7:
            m_string = "July"
            break;
        case 8:
            m_string = "August"
            break;
        case 9:
            m_string = "September"
            break;
        case 10:
            m_string = "October"
            break;
        case 11:
            m_string = "November"
            break;
        case 12:
            m_string = "December"
            break;
        default: 
            m_string = "Error"
    }
    return m_string + " " + d + ", " + y;
}
function getDate(ts){
    // return ts;
    return ts.split("T")[0];
};
function getTime(ts){
    return ts.split("T")[1];
}

export default (props) => ( 
    <div className = "single-post event-view">
        <h2 className = "event-heading">{props.title}</h2>
        <TypeBadge text = {props.event_type}></TypeBadge>
        <AttendanceBadge text = {props.tickets_sold}></AttendanceBadge>
        <RemainingTicketsBadge text = {calculateRemainingTickets(props.max_size, props.tickets_sold)}></RemainingTicketsBadge>
        <LocaleBadge text = {props.location}></LocaleBadge>
        <CalendarBadge text = {formatDay(props.date)}></CalendarBadge>
        
        <p className = "single-event-description">{props.description}</p>
        <p className = "subtitle">{getTime(props.date)}</p>

        {(props.admin == false || props.admin == undefined) ? (
        <>
            <Link to={`/event/${props.id}`} className="btn custom-button">
                View Event
            </Link>
            <Link to={`/checkin/${props.id}`} className="btn custom-button">
                Check In
            </Link>
        </>
        ) : (
        <>
            <Link to={`/event/edit/${props.id}`} className="btn custom-button">
                Edit
            </Link>
            <Link to={`/checkin/${props.id}`} className="btn custom-button">
                Check In Link
            </Link>
            <button type="button" className="btn btn-danger pull-right" onClick={props.onClick}>
                Delete
            </button>
         </>
        )}
    </div>    
); 