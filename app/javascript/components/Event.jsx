import React from "react";
import { Link } from "react-router-dom";

class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = { event: { name: "" } };

        this.addHtmlEntities = this.addHtmlEntities.bind(this);
        this.deleteEvent = this.deleteEvent.bind(this);
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

    deleteEvent() {
        const {
          match: {
            params: { id }
          }
        } = this.props;
        const url = `/api/v1/events/destroy/${id}`;
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
          .then(() => this.props.history.push("/allevents"))
          .catch(error => console.log(error.message));
      }

    render() {
        const { event } = this.state;

        const eventDescription = this.addHtmlEntities(event.description);
    
        return (
          <div className="">
            <div className="hero position-relative d-flex align-items-center justify-content-center">
              <img
                src="https://via.placeholder.com/550x150"
                alt={`${event.name} image`}
                className="img-fluid position-absolute"
              />
              <div className="overlay bg-dark position-absolute" />
              <h1 className="display-4 position-relative text-white">
                {event.name}
              </h1>
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
                <div className="col-sm-12 col-lg-7">
                  <h5 className="mb-2">Event Description</h5>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${eventDescription}`
                    }}
                  />
                </div>
                <div className="col-sm-12 col-lg-2">
                  <button type="button" className="btn btn-danger" onClick={this.deleteEvent}>
                    Delete Event
                  </button>
                </div>
              </div>
              <Link to="/allevents" className="btn btn-link">
                Back to All Events
              </Link>
            </div>
          </div>
        );
      }
}
export default Event;