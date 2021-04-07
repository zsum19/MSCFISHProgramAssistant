import React from "react";
import { Link } from "react-router-dom";

import LinkButton from "./common/LinkButton";
import MemberList from "./adminComponents/MemberList";
import Tabs from "./util/Tabs"

import "./css/Tabs.css"
import EventList from "./adminComponents/EventList";

import Navbar from "./common/Navbar";
import AnnouncementList from "./adminComponents/AnnouncementList";

class AdminPage extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        // console.log("Hello");
    }

    render() {
        const { activeTab } = this.props.match.params;
        return (
            <div style = {{width: "100vw", height: "100vh", backgroundColor: "whitesmoke"}}>
                <Navbar/>
                <div className="container p-3">
                    <h1>Admin Page</h1>
                    <Tabs
                        components=
                        {[
                        <MemberList key={1} label="Member List"/>,
                        <EventList key={2} label="Event List"/>,
                        <AnnouncementList key={3} label="Announcement List"/>,
                        <AnnouncementList key={4} label="Referral List"/>
                        ]}

                        activeTab={activeTab}
                    />
                    <Link to="/" className="btn btn-link mt-3">
                        Home
                    </Link>
                </div>
            </div>
        );
      }
}
export default AdminPage;