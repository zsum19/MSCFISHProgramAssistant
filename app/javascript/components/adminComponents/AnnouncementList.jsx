import React from "react";
import { Link } from "react-router-dom";
import LinkButton from "../common/LinkButton";
import AnnouncementView from "../AnnouncementView";

class AnnouncementList extends React.Component {
    constructor() {
        super();
        this.state = {
            announcements: [],
            members: [],
            events: []
        }
    }

    getMemberName(members, id) {
        var name = "UNDEFINED"
        members.forEach(function (member) {
            if(member.id == id){
                name =  member.first_name + ' ' + member.last_name;
            }
        });
        return name;
    }

    getEventName(events, id) {
        var name = "UNDEFINED"
        events.forEach(function (event) {
            if(event.id == id){
                name =  event.name;
            }
        });
        return name;
    }

    test(id) {
        console.log(id);
    }

    componentDidMount() {
        var url = "/api/v1/announcements/index";
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

          url = "/api/v1/members/index/";
          fetch(url)
          .then(response => {
              if (response.ok) {
              return response.json();
              }
              throw new Error("Network response was not ok.");
          })
          .then(response => this.setState({ members: response }))
          .catch(() => this.props.history.push("/"));
          
          url = "/api/v1/events/index";
          fetch(url)
          .then(response => {
              if (response.ok) {
              return response.json();
              }
              throw new Error("Network response was not ok.");
          })
          .then(response => this.setState({ events: response }))
          .catch(() => this.props.history.push("/"));
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
        const { announcements, members, events } = this.state;
        const allAnnouncements = announcements.map((announcement, index) => (
            <div key={index} className="col-lg-4 col-md-6 m-a">
                <AnnouncementView 
                    title = {announcement.title}
                    content = {announcement.content}
                    author = {this.getMemberName(members, announcement.member_id)}
                    date_posted = {announcement.date_posted}
                    id = {announcement.id}
                    event_id = {announcement.event_id}
                    event_name = {this.getEventName(events, announcement.event_id)}
                    onClick = {() => this.confirmDelete(announcement)}
                    admin = {true}
                ></AnnouncementView>
            </div>
        ));

        return (
            <div className="container-fluid mb-4 px-3">
                <div className="container-fluid d-flex justify-content-between my-3">
                    <h1 className="d-inline-block my-auto">Announcement List</h1>
                    {/* <LinkButton className =  "to-button pull-right p-0" to = "/announcement" text = "Create Event"/> */}
                    <Link
                    to= "/announcement"
                    className="btn btn-lg custom-button px-2 py-0 my-auto"
                    role="button"
                    style = {{
                        marginRight: "10px",
                        height: "30px"
                    }}
                    >
                        Create New
                    </Link>
                </div>
                <div className="row m-a">
                    {allAnnouncements}
                </div>
            </div>
        );
      }
}
export default AnnouncementList;