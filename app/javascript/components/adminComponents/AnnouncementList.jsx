import React from "react";
import { Link } from "react-router-dom";
import LinkButton from "../common/LinkButton";
import AnnouncementView from "../AnnouncementView";

class AnnouncementList extends React.Component {
    constructor() {
        super();
        this.state = {
            announcements: []
        }
    }

    test(id) {
        console.log(id);
    }

    componentDidMount() {
        const url = "/api/v1/announcements/index";
        fetch(url)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => {
            this.setState({ announcements: response });
          })
          .catch(error => console.log(error.message));
    }

    confirmDelete = (announcement) => {
        if(window.confirm("Delete Announcement?")) {
            const url = `/api/v1/announcements/destroy/${announcement.id}`;
            const token = document.querySelector('meta[name="csrf-token"]').content;
        
            fetch(url, {
            method: "DELETE",
            headers: {
                "X-CSRF-Token": token,
                "Content-Type": "application/json"
            }
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(() => this.props.history.push("/admin/Announcement%20List"))
            .catch(error => console.log(error.message));
        }
    }

    render() {
        const { announcements } = this.state;
        const allAnnouncements = announcements.map((announcement, index) => (
            <div key={index} className="col-lg-4 col-md-6 m-a">
                <AnnouncementView 
                    title = {announcement.title}
                    content = {announcement.content}
                    author = {announcement.member_id}
                    date_posted = {announcement.date_posted}
                    id = {announcement.id}
                    event_id = {announcement.event_id}
                    onClick = {() => this.confirmDelete(announcement)}
                    admin = {true}
                ></AnnouncementView>
            </div>
        ));

        return (
            <div className="container-fluid mb-4 px-3">
                <div className="container-fluid d-flex justify-content-between my-3">
                    <h1 className="d-inline-block">Announcement List</h1>
                    <LinkButton className =  "to-button pull-right" to = "/announcement" text = "Create Event"/>
                </div>
                <div className="row m-a">
                    {allAnnouncements}
                </div>
            </div>
        );
      }
}
export default AnnouncementList;