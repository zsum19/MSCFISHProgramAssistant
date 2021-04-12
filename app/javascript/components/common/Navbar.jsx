import React from "react";
import { Link } from "react-router-dom";
import LinkButton from "./LinkButton";
import logo from "../MSC-FISH-LOGO.png";

export default (props) => (
    <div className="sidebar">
        <img src = {logo} alt = "MSC FISH logo" style={{width:'90%', margin:'auto', paddingTop:'5%' ,display:'block'}} ></img>
        <div className = "basic-navbar-content navbar-content">
            <Link className =  "custom-button lg" to = "/allevents">Events</Link>
            <Link className =  "custom-button lg" to = "/announcements">Announcements</Link>
            <Link className =  "custom-button lg" to = "/checkin/1">Check In</Link>
        </div>
        <div className = "priveleged-navbar-content navbar-content">
            <hr className = "priveleged-navbar-splitter"></hr>
            <Link className =  "custom-button lg" to = "/memberpage" text = "Member Page">Member Page</Link>
            <Link className =  "custom-button lg" to = "/admin" text = "Admin Page">Admin Page</Link>
            <a href="index/database_dump.zip" className =  "custom-button lg" download = "database_dump.zip">
                Download Database
            </a>
        </div>
    </div>
);
