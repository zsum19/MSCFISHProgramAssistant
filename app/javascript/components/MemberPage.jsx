import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./common/Navbar";

import MemberAnnouncements from "./memberComponents/MemberAnnouncements";
import MemberAbout from "./memberComponents/MemberAbout";
import MemberReferrals from "./memberComponents/MemberReferrals";

import "./css/MemberPage.css"

class MemberPage extends React.Component {
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
        if(Object.keys(current_member).length == 0) return null;

        return (
            <div style = {{width: "100vw", height: "100vh", backgroundColor: "whitesmoke"}}>
                <Navbar/>
                <div className="container d-flex flex-column p-3 h-100">
                    <h1 className="my-5">{current_member.first_name}'s Dashboard</h1>
                    <div className="container mainContent">
                        <div className="row h-100">
                            <div className="col col-md-5 h-100">
                                <div className="d-flex flex-column justify-content-between h-100">
                                    <div className="p-2 dashItem announcements">
                                        <h3 className="title">Announcements</h3>
                                        <MemberAnnouncements/>
                                    </div>
                                    <div className="p-2 dashItem about">
                                        <h3>About</h3>
                                        <MemberAbout member={current_member}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-md-7 h-100">
                                <div className="p-2 h-100 dashItem referrals">
                                    <h3>Referrals</h3>
                                    <MemberReferrals member_id={current_member.id}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
      }
}
export default MemberPage;