import React from "react";
import { Link } from "react-router-dom";

class EventForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { onSubmit, onChange, btnLabel, state } = this.props;
        return (
            <>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                <label htmlFor="name">Event Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    required
                    onChange={onChange}
                    value={state.name}
                />
                </div>
                <div className="form-group">
                <label htmlFor="location">Event Location</label>
                <input
                    type="text"
                    name="location"
                    id="location"
                    className="form-control"
                    required
                    onChange={onChange}
                    value={state.location}
                />
                </div>
                <div className="form-group">
                <label htmlFor="event_type">Event Type</label>
                <input
                    type="text"
                    name="event_type"
                    id="event_type"
                    className="form-control"
                    required
                    onChange={onChange}
                    value={state.event_type}
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
                    onChange={onChange}
                    value={state.max_size}
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
                    onChange={onChange}
                    value={state.tickets_sold}
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
                    onChange={onChange}
                    value={state.num_checked_in}
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
                    onChange={onChange}
                    value={state.date.substring(0,10)}
                />
                </div>
                <label htmlFor="description">Event Description</label>
                <textarea
                className="form-control"
                id="description"
                name="description"
                rows="5"
                required
                onChange={onChange}
                value={state.description}
                />
                <button type="submit" className="btn custom-button mt-3">
                {btnLabel}
                </button>
                <Link to="/admin/Event%20List" className="btn btn-link mt-3">
                Back to Admin Page
                </Link>
            </form>
            </>
        );
    }
}
export default EventForm;