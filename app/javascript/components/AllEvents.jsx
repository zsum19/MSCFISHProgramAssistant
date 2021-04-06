import React from "react";
import { Link } from "react-router-dom";
import Events from "./Events";


class AllEvents extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        
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
                    <Link to="/" className="btn btn-link">Home</Link>
                    <Link to="/event" className="btn custom-button pull-right">Create New Event</Link>
                    <div className="row">
                        
                        <Events></Events>
                        
                    </div>
                </main>
                </div>
            </>
        );
    }
}
export default AllEvents;