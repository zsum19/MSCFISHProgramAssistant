import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./common/Navbar";
import Events from "./Events";

import "./css/Home.css";

class AllEvents extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        
        return (
            <div style = {{width: "100vw", height: "100vh"}}>
                <Navbar/>
                <div className="homeMainContent">
                    <div className="container-fluid px-0">
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
                            <Events></Events>
                        </main>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default AllEvents;