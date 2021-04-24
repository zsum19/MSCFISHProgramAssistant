import React from "react";
import { Link } from "react-router-dom";
import LinkButton from "../common/LinkButton";
import EventView from "../EventView";

class EventList extends React.Component {
    constructor() {
        super();
        this.state = {
            events: []
        }
    }

    componentDidMount() {
        const url = "/api/v1/events/index";
        fetch(url)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => {
            this.setState({ events: response });
          })
          .catch(error => console.log(error.message));
    }

    confirmDelete = (event) => {
        if(window.confirm("Delete Event?")) {
            const url = `/api/v1/events/destroy/${event.id}`;
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
            .then(() => this.props.history.push("/admin/Event%20List"))
            .catch(error => console.log(error.message));
        }
    }

    render() {
        const { events } = this.state;
        const allEvents = events.map((event, index) => (
            <div key={index} className="col-lg-4 col-md-6 m-a">
                <EventView 
                    title = {event.name}
                    location = {event.location}
                    event_type = {event.event_type}
                    max_size = {event.max_size}
                    tickets_sold = {event.tickets_sold}
                    description = {event.description}
                    date = {event.date}
                    id = {event.id}
                    admin = {true}
                    onClick = {() => this.confirmDelete(event)}
                ></EventView>
            </div>
        ));

        return (
            <div className="container-fluid mb-4 px-3">
                <div className="container-fluid d-flex justify-content-between my-3">
                    <h1 className="d-inline-block my-auto">Event List</h1>
                    {/* <LinkButton className =  "to-button pull-right p-0" to = "/event" text = "Create Event"/> */}
                    <Link
                    to= "/event"
                    className="btn btn-lg custom-button px-2 py-0 my-auto"
                    role="button"
                    style = {{
                        marginRight: "10px",
                        height: "30px"
                    }}
                    >
                        Create New
                    </Link>
                </div>
                <div className="row m-a">
                    {allEvents}
                </div>
            </div>
        );
      }
}
export default EventList;