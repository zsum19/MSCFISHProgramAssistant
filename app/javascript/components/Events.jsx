import React from "react";
import { Link } from "react-router-dom";

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
        const allEvents = events.map((event, index) => (
            <div key={index} className="col-md-6 col-lg-4">
                <div className="card mb-4">
                <div className="card-body">
                    <h5 className="card-title">{event.name}</h5>
                    <Link to={`/event/${event.id}`} className="btn custom-button">
                    View Event
                    </Link>
                    </div>
                </div>
            </div>
        ));
        const noEvent = (
            <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
                <h4>
                No events yet. Why not <Link to="/new_event">create one</Link>
                </h4>
            </div>
        );

        return (
            <>
                <section className="jumbotron jumbotron-fluid text-center">
                <div className="container py-5">
                    <h1 className="display-4">MSC Fish Events</h1>
                    <p className="lead text-muted">
                    A list of all current events.
                    </p>
                </div>
                </section>
                <div className="py-5">
                <main className="container">
                    <div className="text-right mb-3">
                    <Link to="/event" className="btn custom-button">
                        Create New Event
                    </Link>
                    </div>
                    <div className="row">
                    {events.length > 0 ? allEvents : noEvent}
                    </div>
                    <Link to="/" className="btn btn-link">
                    Home
                    </Link>
                </main>
                </div>
            </>
        );
    }
}
export default Events;