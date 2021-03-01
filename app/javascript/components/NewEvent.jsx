import React from "react";
import { Link } from "react-router-dom";

class NewEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
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
        const { name, max_size, tickets_sold, num_checked_in, date, description } = this.state;
    
        if (name.length == 0 || date.length == 0)
          return;
    
        const body = {
          name,
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
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Event name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      required
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="max_size">Max Size</label>
                    <input
                      type="number"
                      name="max_size"
                      id="max_size"
                      min="0"
                      className="form-control"
                      required
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="tickets_sold">Tickets Sold</label>
                    <input
                      type="number"
                      name="tickets_sold"
                      id="tickets_sold"
                      min="0"
                      className="form-control"
                      required
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="num_checked_in">Number of People Checked In</label>
                    <input
                      type="number"
                      name="num_checked_in"
                      id="num_checked_in"
                      min="0"
                      className="form-control"
                      required
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="date">Date of Event</label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className="form-control"
                      required
                      onChange={this.onChange}
                    />
                  </div>
                  <label htmlFor="description">Event Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    rows="5"
                    required
                    onChange={this.onChange}
                  />
                  <button type="submit" className="btn custom-button mt-3">
                    Create Event
                  </button>
                  <Link to="/events" className="btn btn-link mt-3">
                    Back to All Events
                  </Link>
                </form>
              </div>
            </div>
          </div>
        );
      }
}
export default NewEvent;