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

        this.state = {
            current_member: {}
        }
    }

    componentDidMount() {
        const url = `/api/v1/members/currentMember`;
    
        fetch(url)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => this.setState({current_member: response}))
          .catch(error => console.log(error.message));
    }

    render() {
        const { current_member } = this.state;

        if(current_member == undefined || Object.keys(current_member).length == 0) return (
            <div className="container-fluid vh-100 row">
                <div className="col-12 align-self-center">
                    <h1 className="m-auto d-flex justify-content-center">You should not be here!</h1>
                    <h4 className="m-auto d-flex justify-content-center">Or you should sign in</h4>
                    <div className="my-4 d-flex justify-content-center">
                    <LinkButton className="to-button" to = "/members/auth/google_oauth2" text = "Sign In"></LinkButton>
                    </div>
                </div>
            </div>
        );

        if(current_member.role_id > 2 ) return (
            <div className="container-fluid vh-100 row">
                <div className="col-12 align-self-center">
                    <h1 className="m-auto d-flex justify-content-center">You should not be here!</h1>
                    <h4 className="m-auto d-flex justify-content-center">If you think this is an issue, contact your director or chair.</h4>
                </div>
            </div>
        );

        const superAdminTabsComp = [
            <MemberList key={1} label="Member List"/>,
            <EventList key={2} label="Event List"/>,
            <AnnouncementList key={3} label="Announcement List"/>
            ];
        const adminTabsComp = [
            <EventList key={2} label="Event List"/>,
            <AnnouncementList key={3} label="Announcement List"/>
            ];;
        const tabsComponents = (current_member && current_member.role_id == 1) ? superAdminTabsComp : adminTabsComp;

        const { activeTab } = this.props.match.params;
        return (
            <div style = {{width: "100vw", height: "100vh"}}>
                <Navbar/>
                <div className="container p-3">
                    <h1>Admin Page</h1>
                    <Tabs
                        components=
                        {tabsComponents}

                        activeTab={activeTab}
                    />

                    
                </div>
            </div>
        );
      }
}
export default AdminPage;