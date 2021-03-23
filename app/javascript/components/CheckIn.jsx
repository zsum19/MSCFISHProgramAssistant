import React from "react";
import { Link } from "react-router-dom";

class CheckIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            referral: "",
            members: [],
            event_id: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
    }

    componentDidMount() {
        console.log(this.props.match.params.event_id);
        this.setState({ event_id: this.props.match.params.event_id});
        let memberList = [];
        const url = "/api/v1/members/index";
        fetch(url)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => this.setState({ members: response }))
          .catch(error => console.log(error.message));
    }

    stripHtmlEntities(str) {
        return String(str)
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    tryUpdate(){
        const url = "/api/v1/attendees/update";
        const { name, email, referral } = this.state;
    
        if (name.length == 0)
          return;
    
        const body = {
            name, 
            email
        };
    
        const token = document.querySelector('meta[name="csrf-token"]').content;
        fetch(url, {
          method: "PATCH",
          headers: {
            "X-CSRF-Token": token,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        })
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => this.props.history.push(`/`))
          .catch(error => console.log(error.message));
    }

    onSubmit(e) {
        e.preventDefault();
        const url = "/api/v1/attendees/create";
        const { name, email, referral, event_id } = this.state;
    
        if (name.length == 0)
          return;
    
        const body = {
            name, 
            email,
            referral,
            event_id
        };
    
        const token = document.querySelector('meta[name="csrf-token"]').content;
        fetch(url, {
          method: "POST",
          headers: {
            "X-CSRF-Token": token,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        })
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => this.props.history.push(`/`))
          .catch(error => this.tryUpdate());
    }

    render() {
        const { members } = this.state;
        let memberOptionItems = members.map((members, index) => (
          <option value={members.name}>{members.name}</option>
        ));
        return (
          <div className="container mt-5">
            <div className="row">
              <div className="col-sm-12 col-lg-6 offset-lg-3">
                <h1 className="font-weight-normal mb-5">
                  Check in to Run The Ramps 2021
                </h1>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      required
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="form-control"
                      required
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="referral">Referred By</label>
                    <select
                      name="referral"
                      id="referral"
                      className="form-control"
                      value="Test"
                      //For future joining of tables
                      onChange={this.onChange}
                    >
                      {memberOptionItems}
                    </select>
                  </div>
                  <button type="submit" className="btn custom-button mt-3">
                    Check In
                  </button>
                  <Link to="/" className="btn btn-link mt-3">
                    Back to Home
                  </Link>
                </form>
              </div>
            </div>
          </div>
        );
      }
}
export default CheckIn;