import React from "react";
import { Link } from "react-router-dom";

import logo from "../MSC-FISH-LOGO.png";

export default (props) => (
    <div className="sidebar">
        <img src = {logo} alt = "MSC FISH logo" style={{width:'90%', margin:'auto', paddingTop:'5%' ,display:'block'}} ></img>
        <Link className =  "custom-button lg" to = "/allevents">Events</Link>
        <Link className =  "custom-button lg" to = "/announcements">Announcements</Link>
        <Link className =  "custom-button lg" to = "/checkin/1">Check In</Link>
        <a href="index/database_dump.zip" className =  "custom-button lg" download = "database_dump.zip">
            Download Database
        </a>
    </div>
);