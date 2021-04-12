import React from "react";
import { Link } from "react-router-dom";
import EventView from "./EventView";


class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
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
          .then(response => this.setState({ events: response }))
          .catch(() => this.props.history.push("/"));
      }

    render() {
        const { events } = this.state;
        // console.log("EVENTS:", events);
        const allEvents = events.map((event, index) => (
            <div key={index} className="col-md-6 col-lg-4">
                <EventView 
                    title = {event.name}
                    location = {event.location}
                    event_type = {event.event_type}
                    max_size = {event.max_size}
                    tickets_sold = {event.tickets_sold}
                    description = {event.description}
                    date = {event.date}
                    id = {event.id}
                ></EventView>
            </div>
        ));
        const noEvent = (
            <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
                <h4>
                No events yet. Why not <Link to="/event">create one</Link>
                </h4>
            </div>
        );

        return (
            <>  
                <div className="row">
                {   events.length > 0 ? allEvents : noEvent}
                </div>      
            </>
        );
    }
}
export default Events;