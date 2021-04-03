import React from "react";
import AnnouncementForm from "./AnnouncementForm";

class UpdateAnnouncement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author_id: 1,
            event_id: 1,
            title: "",
            content: "",
            external: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
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
        .then(response => this.setState({ 
            author_id: response.author_id,
            event_id: response.event_id,
            title: response.title,
            content: response.content,
            external: response.external
        }))
        .catch(() => this.props.history.push("/events"));
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
        const {
          match: {
            params: { id }
          }
        } = this.props;

        const url = `/api/v1/announcements/update/${id}`;
        const { author_id, event_id, title, content, external } = this.state;
    
        const body = {
          author_id,
          event_id,
          title,
          content,
          external
        };
    
        const token = document.querySelector('meta[name="csrf-token"]').content;
        fetch(url, {
          method: "PATCH",
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
          .then(response => this.props.history.push("/admin/Announcement%20List"))
          .catch(error => console.log(error.message));
    }
    
    render() {
        return (
          <div className="container mt-5">
            <div className="row">
              <div className="col-sm-12 col-lg-6 offset-lg-3">
                <h1 className="font-weight-normal mb-5">
                  Edit announcement
                </h1>
                <AnnouncementForm onSubmit={this.onSubmit} onChange={this.onChange} btnLabel="Update Announcement" state={this.state} />
              </div>
            </div>
          </div>
        );
      }
}
export default UpdateAnnouncement;