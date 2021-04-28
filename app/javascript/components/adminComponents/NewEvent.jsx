import React from "react";
import { Link } from "react-router-dom";

import LinkButton from "../common/LinkButton";
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
            description: "",
            current_member: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
    }

    componentDidMount() {
      const url = `/api/v1/members/currentMember`;
  
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => this.setState({current_member: response}))
        .catch(error => console.log(error.message));
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
        const { current_member } = this.state;

        if(current_member == undefined || Object.keys(current_member).length == 0) return (
            <div className="container-fluid vh-100 row">
                <div className="col-12 align-self-center">
                    <h1 className="m-auto d-flex justify-content-center">You should not be here!</h1>
                    <h4 className="m-auto d-flex justify-content-center">Or you should sign in</h4>
                    <div className="my-4 d-flex justify-content-center">
                    <Link className =  "custom-button lg" to = "/members/auth/google_oauth2" onClick={() => window.location.href="/members/auth/google_oauth2"} text = "Sign In">Sign In</Link>
                    </div>
                </div>
            </div>
        );

        if(current_member.role_id > 2 ) return (
            <div className="container-fluid vh-100 row">
                <div className="col-12 align-self-center">
                    <h1 className="m-auto d-flex justify-content-center">You should not be here!</h1>
                    <h4 className="m-auto d-flex justify-content-center">If you think this is an issue, contact your director or chair.</h4>
                </div>
            </div>
        );
        return (
          <div className="container mt-5">
            <div className="row">
              <div className="col-sm-12 col-lg-6 offset-lg-3">
                <h1 className="font-weight-normal mb-5">
                  Create a new event
                </h1>
                <EventForm onSubmit={this.onSubmit} onChange={this.onChange} btnLabel="Create Event" state={this.state}/>
              </div>
            </div>
          </div>
        );
      }
}
export default NewEvent;