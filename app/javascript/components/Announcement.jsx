import React from "react";
import { Link } from "react-router-dom";

class Announcement extends React.Component {
    constructor(props) {
        super(props);
        this.state = { announcement: { name: "" } };

        this.addHtmlEntities = this.addHtmlEntities.bind(this);
        this.deleteAnnouncement = this.deleteAnnouncement.bind(this);
    }

    componentDidMount() {
        const {
          match: {
            params: { id }
          }
        } = this.props;
    
        const url = `/api/v1/announcements/show/${id}`;
    
        fetch(url)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => this.setState({ announcement: response }))
          .catch(() => this.props.history.push("/announcements"));
    }

    addHtmlEntities(str) {
        return String(str)
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">");
    }

    deleteAnnouncement() {
        const {
          match: {
            params: { id }
          }
        } = this.props;
        const url = `/api/v1/announcements/destroy/${id}`;
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
          .then(() => this.props.history.push("/announcements"))
          .catch(error => console.log(error.message));
      }

    render() {
        const { announcement } = this.state;

        const announcementContent = this.addHtmlEntities(announcement.content);
    
        return (
          <div className="">
            <div className="hero position-relative d-flex align-items-center justify-content-center">
              <img
                src="https://via.placeholder.com/550x150"
                alt={`${announcement.id} image`}
                className="img-fluid position-absolute"
              />
              <div className="overlay bg-dark position-absolute" />
              <h1 className="display-4 position-relative text-white">
                {announcement.id}
              </h1>
            </div>
            <div className="container py-5">
              <div className="row">
                <div className="col-sm-12 col-lg-3">
                  <ul className="list-group">
                    <h5 className="mb-2">Date</h5>
                    <li>
                        {announcement.created_at}
                    </li>
                  </ul>
                </div>
                <div className="col-sm-12 col-lg-7">
                  <h5 className="mb-2">Content</h5>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${announcementContent}`
                    }}
                  />
                </div>
                <div className="col-sm-12 col-lg-2">
                  <button type="button" className="btn btn-danger" onClick={this.deleteAnnouncement}>
                    Delete Announcement
                  </button>
                </div>
              </div>
              <Link to="/announcements" className="btn btn-link">
                Back to All Announcements
              </Link>
            </div>
          </div>
        );
      }
}
export default Announcement;