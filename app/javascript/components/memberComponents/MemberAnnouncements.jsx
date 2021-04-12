import React from "react";
import { Link } from "react-router-dom";
import EventBadge from "../common/EventBadge";

class MemberAnnouncements extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            announcements: []
        }
    }

    componentDidMount() {
        const url = `/api/v1/announcements/index/false`;
    
        fetch(url)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => this.setState({ announcements: response }))
          .catch(error => console.log(error.message));
    }

    render() {
        const { announcements } = this.state;

        const allAnnouncements = announcements.map((announcement, index) => (
            <div key={index} className="col-lg-12">               
                <div className = "single-post announcement-view">
                    <h2 className = "post-heading">{announcement.title}</h2>
                    <EventBadge text = {announcement.event_id}/>
                    <p className = "single-event-description">{announcement.content}</p>
                    <p 
                        style = {{
                            fontSize: "medium",
                            fontWeight: "lighter"
                        }}
                    > - <i>{announcement.member_id}</i></p>
                    <p className = "subtitle">{announcement.date_posted}</p>
                    <Link to={`/announcement/${announcement.id}`} className="btn custom-button">
                    View Announcement
                    </Link>
                </div>                 
            </div>
        ));

        const noAnnouncement = (
            <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
                <h4>
                No announcements!
                </h4>
            </div>
        );

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