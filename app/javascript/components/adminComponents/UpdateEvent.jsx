import React from "react";
import { Link } from "react-router-dom";

import EventForm from "./EventForm";

class UpdateEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            location: "",
            event_type: "",
            max_size: 0,
            tickets_sold: 0,
            num_checked_in: 0,
            date: "",
            description: ""
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
  
      const url = `/api/v1/events/show/${id}`;
  
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => this.setState({ 
            name: response.name,
            location: response.location,
            event_type: response.event_type,
            max_size: response.max_size,
            tickets_sold: response.tickets_sold,
            num_checked_in: response.num_checked_in,
            date: response.date,
            description: response.description
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

        const url = `/api/v1/events/update/${id}`;
        const { name, location, event_type, max_size, tickets_sold, num_checked_in, date, description } = this.state;
    
        if (name.length == 0 || date.length == 0)
          return;
    
        const body = {
          name,
          location,
          event_type,
          max_size,
          tickets_sold,
          num_checked_in,
          date,
          description
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
          .then(response => this.props.history.push("/admin/Event%20List"))
          .catch(error => console.log(error.message));
    }
    
    render() {
        return (
          <div className="container mt-5">
            <div className="row">
              <div className="col-sm-12 col-lg-6 offset-lg-3">
                <h1 className="font-weight-normal mb-5">
                  Edit event
                </h1>
                <EventForm onSubmit={this.onSubmit} onChange={this.onChange} btnLabel="Update Event" state={this.state} />
              </div>
            </div>
          </div>
        );
      }
}
export default UpdateEvent;