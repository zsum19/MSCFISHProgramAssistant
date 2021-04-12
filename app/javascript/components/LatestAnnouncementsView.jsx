import React from "react";
import { Link } from "react-router-dom";
import AnnouncementView from "./AnnouncementView";
import EventBadge from "./common/EventBadge"

class LatestAnnouncementsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            announcements: []
        };
    }

    componentDidMount() {
        const url = "/api/v1/announcements/index/true";
        fetch(url)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => this.setState({ announcements: response }))
          .catch(() => this.props.history.push("/"));
      }

    render() {
        const { announcements } = this.state;
        const allAnnouncements = announcements.map((announcement, index) => (
            <div key={index} className="col-lg-12">               
                <div className = "single-post announcement-view">
                    <h2 className = "post-heading">{announcement.title}</h2>
                    <EventBadge text = {announcement.event_id}></EventBadge>
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
                No announcements yet. Why not <Link to="/new_announcement">create one</Link>
                </h4>
            </div>
        );

        return (
            <div style = {{border: "1px solid #bbb"}} className = "announcements-view">
                <div className = "colored-heading">
                    <h2 className = "text test"> LATEST ANNOUNCEMENTS </h2>
                </div>
                <div className = "small-padding scroll-box"> 
                    <div className="row">
                        {announcements.length > 0 ? allAnnouncements : noAnnouncement}
                    </div>
                </div>
            </div>               
        );
    }
}
export default LatestAnnouncementsView;