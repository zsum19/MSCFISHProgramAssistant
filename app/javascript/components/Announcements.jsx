import React from "react";
import { Link } from "react-router-dom";
import EventBadge from "./common/EventBadge"
import Navbar from "./common/Navbar";
class Announcements extends React.Component {
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
            <div key={index} className="col-md-6 col-lg-4">               
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
                No announcements yet. Why not <Link to="/announcement">create one</Link>
                </h4>
            </div>
        );

        return (
            <div style = {{width: "100vw", height: "105vh", backgroundColor: "whitesmoke"}}>
                <Navbar/>
                <div className="container-fluid">
                    <section className="jumbotron jumbotron-fluid text-center">
                    <div className="container py-5">
                        <h1 className="display-4">MSC Fish Announcements</h1>
                        <p className="lead text-muted">
                        A list of all current announcements.
                        </p>
                    </div>
                    </section>
                    <div className="py-5">
                    <main className="container">
                        <Link to="/" className="btn btn-link">Home</Link>
                        <Link to="/announcement" className="btn custom-button pull-right">Create New Announcement</Link>
                        <div className="row">
                        {announcements.length > 0 ? allAnnouncements : noAnnouncement}
                        </div>
                    </main>
                    </div>
                </div>
            </div>
        );
    }
}
export default Announcements;