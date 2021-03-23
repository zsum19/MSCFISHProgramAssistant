import React from "react";
import { Link } from "react-router-dom";

class NewAnnouncement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author_id: 1,
            event_id: 1,
            content: "",
            date_posted: "2021-02-28 00:00:00"
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
    }

    stripHtmlEntities(str) {
        return String(str)
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    onSubmit(e) {
        e.preventDefault();
        const url = "/api/v1/announcements/create";
        const { author_id, event_id, content, date_posted } = this.state;
    
        const body = {
          author_id,
          event_id,
          content,
          date_posted
        };
    
        const token = document.querySelector('meta[name="csrf-token"]').content;
        fetch(url, {
          method: "POST",
          headers: {
            "X-CSRF-Token": token,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        })
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => this.props.history.push(`/announcement/${response.id}`))
          .catch(error => console.log(error.message));
    }
    
    render() {
        return (
          <div className="container mt-5">
            <div className="row">
              <div className="col-sm-12 col-lg-6 offset-lg-3">
                <h1 className="font-weight-normal mb-5">
                  Create a new announcement
                </h1>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                  </div>
                  <label htmlFor="content">Announcement Content</label>
                  <textarea
                    className="form-control"
                    id="content"
                    name="content"
                    rows="5"
                    required
                    onChange={this.onChange}
                  />
                  <button type="submit" className="btn custom-button mt-3">
                    Create Announcement
                  </button>
                  <Link to="/announcements" className="btn btn-link mt-3">
                    Back to All Announcements
                  </Link>
                </form>
              </div>
            </div>
          </div>
        );
      }
}
export default NewAnnouncement;