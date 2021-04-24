import React from "react";
import { Link } from "react-router-dom";
import EventBadge from "../common/EventBadge";

class MemberAnnouncements extends React.Component {
    constructor(props) {
        super(props);

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

    componentDidMount() {
        var url = `/api/v1/announcements/index/false`;
    
        fetch(url)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => this.setState({ announcements: response }))
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

    render() {
        const { announcements, members, events } = this.state;

        const noAnnouncement = (
            <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
                <h4>
                No announcements!
                </h4>
            </div>
        );

        if(members.length == 0 || events.length == 0) return noAnnouncement;

        const allAnnouncements = announcements.map((announcement, index) => (
            <div key={index} className="col-lg-12">               
                <div className = "single-post announcement-view">
                    <h2 className = "post-heading">{announcement.title}</h2>
                    <EventBadge text = {this.getEventName(events, announcement.event_id)}/>
                    <p className = "single-event-description">{announcement.content}</p>
                    <p 
                        style = {{
                            fontSize: "medium",
                            fontWeight: "lighter"
                        }}
                    > - <i>{this.getMemberName(members, announcement.member_id)}</i></p>
                    <p className = "subtitle">{announcement.date_posted}</p>
                    <Link to={`/announcement/${announcement.id}`} className="btn custom-button">
                    View Announcement
                    </Link>
                </div>                 
            </div>
        ));

        

        return (
            <div className = "small-padding announcement-scroll-box"> 
                <div className="row">
                    {announcements.length > 0 ? allAnnouncements : noAnnouncement}
                </div>
            </div>
        );
      }
}
export default MemberAnnouncements;