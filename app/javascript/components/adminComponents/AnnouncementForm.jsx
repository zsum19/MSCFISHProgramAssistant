import React from "react";
import { Link } from "react-router-dom";

class AnnouncementForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { onSubmit, onChange, btnLabel, state } = this.props;
        return (
            <>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                <label htmlFor="title">Announcement Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    className="form-control"
                    required
                    onChange={onChange}
                    value={state.title}
                />
                </div>
                <div className="form-group">
                <label htmlFor="content">Announcement Content</label>
                <textarea
                    className="form-control"
                    id="content"
                    name="content"
                    rows="5"
                    required
                    onChange={onChange}
                    value={state.content}
                />
                </div>
                <div className="form-group">
                <label htmlFor="external">Announcement Type</label>
                <select
                    type="select"
                    name="external"
                    id="external"
                    className="form-control"
                    required
                    onChange={onChange}
                    value={state.external}
                >
                    <option value={false}>Internal</option>
                    <option value={true}>External</option>
                </select>
                </div>
                <button type="submit" className="btn custom-button mt-3">
                {btnLabel}
                </button>
                <Link to="/admin/Announcement%20List" className="btn btn-link mt-3">
                Back to Admin Page
                </Link>
            </form>
            </>
        );
    }
}
export default AnnouncementForm;