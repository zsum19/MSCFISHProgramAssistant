import React from "react";
import { Link } from "react-router-dom";
import AnnouncementForm from "./AnnouncementForm";

class NewAnnouncement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            member_id: 1,
            event_id: 1,
            title: "",
            content: "",
            external: false
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
        const { member_id, event_id, title, content, external } = this.state;
    
        const body = {
          member_id,
          event_id,
          title,
          content,
          external
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
          .then(response => this.props.history.push(`/admin/Announcement%20List`))
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
                <AnnouncementForm onSubmit={this.onSubmit} onChange={this.onChange} btnLabel="Create Announcement" state={this.state} />
              </div>
            </div>
          </div>
        );
      }
}
export default NewAnnouncement;