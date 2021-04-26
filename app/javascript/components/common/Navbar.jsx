import React from "react";
import { Link } from "react-router-dom";
import LinkButton from "./LinkButton";
import logo from "../MSC-FISH-LOGO.png";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current_member: {}
        };
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
        const adminOnly = (
            <div className = "priveleged-navbar-content navbar-content">
                <hr className = "priveleged-navbar-splitter"></hr>
                <Link className =  "custom-button lg" to = "/memberpage" text = "Member Page">Member Page</Link>
                <Link className =  "custom-button lg" to = "/admin" text = "Admin Page">Admin Page</Link>
                <a href="index/database_dump.zip" className =  "custom-button lg" download = "database_dump.zip">
                    Download Database
                </a>
                <Link className =  "custom-button lg" to = "/members/sign_out" onClick={() => window.location.href="/members/sign_out"} text = "Sign Out">Sign Out</Link>
            </div>
        );
        const memberOnly = (
            <div className = "priveleged-navbar-content navbar-content">
                <hr className = "priveleged-navbar-splitter"></hr>
                <Link className =  "custom-button lg" to = "/memberpage" text = "Member Page">Member Page</Link>
                <Link className =  "custom-button lg" to = "/members/sign_out" onClick={() => window.location.href="/members/sign_out"} text = "Sign Out">Sign Out</Link>
            </div>
        );
        const everyone = (
            <div className = "priveleged-navbar-content navbar-content">
                <hr className = "priveleged-navbar-splitter"></hr>
                <Link className =  "custom-button lg" to = "/members/auth/google_oauth2" onClick={() => window.location.href="/members/auth/google_oauth2"} text = "Sign In">Sign In</Link>
            </div>
        );

        const { current_member } = this.state;
        const adminSeg = (current_member && current_member.role_id > 2) ? memberOnly : adminOnly;
        const memberSeg = (current_member == undefined || Object.keys(current_member).length == 0) ? everyone : adminSeg;

        return (
            <div className="sidebar">
                <img src = {logo} alt = "MSC FISH logo" style={{width:'90%', margin:'auto', paddingTop:'5%' ,display:'block'}} ></img>
                <div className = "basic-navbar-content navbar-content">
                    <Link className =  "custom-button lg" to = "/">Home</Link>
                    <Link className =  "custom-button lg" to = "/allevents">Events</Link>
                    <Link className =  "custom-button lg" to = "/announcements">Announcements</Link>
                </div>
                {memberSeg}
            </div>
        );
      }
}
export default Navbar;
