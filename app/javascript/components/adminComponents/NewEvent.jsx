import React from "react";
import { Link } from "react-router-dom";

import EventForm from "./EventForm";

class NewEvent extends React.Component {
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
        const url = "/api/v1/events/create";
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
          .then(response => this.props.history.push(`/event/${response.id}`))
          .catch(error => console.log(error.message));
    }
    
    render() {
        return (
          <div className="container mt-5">
            <div className="row">
              <div className="col-sm-12 col-lg-6 offset-lg-3">
                <h1 className="font-weight-normal mb-5">
                  Create a new event
                </h1>
                <EventForm onSubmit={this.onSubmit} onChange={this.onChange} btnLabel="Create Event"/>
              </div>
            </div>
          </div>
        );
      }
}
export default NewEvent;