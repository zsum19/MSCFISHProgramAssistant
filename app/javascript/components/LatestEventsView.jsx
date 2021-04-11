import React from "react";
import { Link } from "react-router-dom";
import EventView from "./EventView";
import Events from "./Events";



class LatestEvents extends React.Component {
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
                let res = response.json();
                console.log("RES", res);
                return res;
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => this.setState({ events: response }))
          .catch(() => this.props.history.push("/"));
      }

    render() {
        console.log("THIS.STATE", this.state);
        console.log("THIS.STATE.EVENTS", this.state.events);
        const { events } = this.state;
        //console.log("THIS.STATE", this.state);
        console.log("EVENTS:", events);
        var latestEvents = [];
        if(events.length > 5){
            console.log("latest event", events[0]);
            var latest = 5;
            for(var i = 0; i < latest; i++){
                latestEvents.push(events[i]);
            }
        }
        else {
            latestEvents = events;
        }
        const showEvents = latestEvents
        const allEvents = showEvents.map((event, index) => (
            <div key={index} className="col-lg-12">
                <EventView 
                    title = {event.name}
                    location = {event.location}
                    event_type = {event.event_type}
                    max_size = {event.max_size}
                    tickets_sold = {event.tickets_sold}
                    description = {event.description}
                    date = {event.date}
                    id = {event.id}
                    admin = {false}
                ></EventView>
            </div>
        ));
        const noEvent = (
            <div className="d-flex align-items-center justify-content-center">
                <h4>
                No events yet. Why not <Link to="/new_event">create one</Link>
                </h4>
            </div>
        );

        return (  
                <div className="row">
                    
                    <div className = "events-view post-view">
                        <div className = "colored-heading">
                            <h2 className = "text test"> LATEST EVENTS </h2>
                        </div>
                        <div className = "small-padding scroll-box"> 
                            
                                    <div className="row">
                                        {   events.length > 0 ? allEvents : noEvent}
                                    </div>      
                               
                        </div>
                    </div>
                    
                </div>
        );
    }
}
export default LatestEvents;

