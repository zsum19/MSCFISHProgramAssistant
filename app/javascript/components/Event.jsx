import React from "react";
import { Link } from "react-router-dom";
import LinkButton from "./common/LinkButton";

class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = { event: { name: "" } };

        this.addHtmlEntities = this.addHtmlEntities.bind(this);
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
          .then(response => this.setState({ event: response }))
          .catch(() => this.props.history.push("/events"));
    }

    addHtmlEntities(str) {
        return String(str)
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">");
    }

    render() {
        const {
          match: {
            params: { id }
          }
        } = this.props;
        const { event } = this.state;

        const url = `/checkin/${id}`

        const eventDescription = this.addHtmlEntities(event.description);
    
        return (
          <div className="">
            <section className="jumbotron jumbotron-fluid text-center">
              <div className="container py-5">
                  <h1 className="display-4">{event.name}</h1>
              </div>
            </section>

            <div className="container py-5">
              <Link to="/allevents" className="btn btn-link">Back to All Events</Link>

              <div className="row">
                <div className="col-sm-12 col-lg-3">
                  <ul className="list-group">
                    <h5 className="mb-2">Location</h5>
                    <li>
                        {event.location}
                    </li>
                  </ul>
                </div>
                <div className="col-sm-12 col-lg-3">
                  <ul className="list-group">
                    <h5 className="mb-2">Event Type</h5>
                    <li>
                        {event.event_type}
                    </li>
                  </ul>
                </div>
                <div className="col-sm-12 col-lg-3">
                  <ul className="list-group">
                    <h5 className="mb-2">Event Date</h5>
                    <li>
                        {event.date}
                    </li>
                  </ul>
                </div>
                <LinkButton className="btn custom-button" to={url} text="Check In"></LinkButton>
              </div>
            </div>

            <div className="container py-5">
              <div className="row">
                <div className="col-sm-12 col-lg-3">
                  <ul className="list-group">
                    <h5 className="mb-2">Max Size</h5>
                    <li>
                        {event.max_size}
                    </li>
                  </ul>
                </div>
                <div className="col-sm-12 col-lg-3">
                  <ul className="list-group">
                    <h5 className="mb-2">Tickets Sold</h5>
                    <li>
                        {event.tickets_sold}
                    </li>
                  </ul>
                </div>
                <div className="col-sm-12 col-lg-3">
                  <ul className="list-group">
                    <h5 className="mb-2">People Checked In</h5>
                    <li>
                        {event.num_checked_in}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="container py-5">
              <div className="row">
                <div className="col-sm-12 col-lg-7">
                  <h5 className="mb-2">Event Description</h5>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${eventDescription}`
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      }
}
export default Event;