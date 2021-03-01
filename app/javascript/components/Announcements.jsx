import React from "react";
import { Link } from "react-router-dom";

class Announcements extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            announcements: []
        };
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
          .then(response => this.setState({ announcements: response }))
          .catch(() => this.props.history.push("/"));
      }

    render() {
        const { announcements } = this.state;
        const allAnnouncements = announcements.map((announcement, index) => (
            <div key={index} className="col-md-6 col-lg-4">
                <div className="card mb-4">
                    <div className="card-header">
                        {announcement.created_at}
                    </div>
                    <div className="card-body">
                        <h5 className="card-text">{announcement.content}</h5>
                    </div>
                    <div className="card-footer">
                        {announcement.author_id}
                        <Link to={`/announcement/${announcement.id}`} className="btn custom-button">
                        View Announcement
                        </Link>
                    </div>
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
            <>
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
                    <div className="text-right mb-3">
                    <Link to="/announcement" className="btn custom-button">
                        Create New announcement
                    </Link>
                    </div>
                    <div className="row">
                    {announcements.length > 0 ? allAnnouncements : noAnnouncement}
                    </div>
                    <Link to="/" className="btn btn-link">
                    Home
                    </Link>
                </main>
                </div>
            </>
        );
    }
}
export default Announcements;