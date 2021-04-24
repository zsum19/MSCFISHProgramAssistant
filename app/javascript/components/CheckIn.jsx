import React from "react";
import { Link } from "react-router-dom";

class CheckIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            referral: "",
            members: [],
            event_id: "",
            event_name: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
    }

    componentDidMount() {
        this.setState({ event_id: this.props.match.params.event_id});
        const url = "/api/v1/members/index";
        fetch(url)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => {
            this.setState({ members: response });
            this.setState({ referral: this.state.members[0].name });
          })
          .catch(error => console.log(error.message));

          const event_id = this.props.match.params.event_id;
          // console.log(event_id);

          const url2 = `/api/v1/events/show/${event_id}`;
          fetch(url2)
            .then(response => {
              if (response.ok) {
                return response.json();
              }
              throw new Error("Network response was not ok.");
            })
            .then(response => {
              this.setState({ event_name: response.name });
            })
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
        const { first_name, last_name, email } = this.state;
    
        if (first_name.length == 0)
          return;

        if (last_name.length == 0)
          return;
    
        const body = {
            first_name,
            last_name, 
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
          .then(response => {
            window.flash_messages.addMessage({ id: 'id', text: 'Checked In!', type: 'success' });
            this.props.history.push(`/`);
          })
          .catch(error => console.log(error.message));
    }

    onSubmit(e) {
        e.preventDefault();
        const url = "/api/v1/attendees/create";
        const { first_name, last_name, email, referral, event_id} = this.state;

        var referral_first_name = referral.split(" ")[0];
        var referral_last_name = referral.split(" ")[1];
    
        if (first_name.length == 0)
          return;

        if (last_name.length == 0)
          return;
    
        const body = {
            first_name,
            last_name,
            email,
            referral_first_name,
            referral_last_name,
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
          .then(response => {
            window.flash_messages.addMessage({ id: 'id', text: 'Checked In!', type: 'success' });
            this.props.history.push(`/`);
          })
          .catch(error => this.tryUpdate());
    }

    render() {
        const { members, event_name } = this.state;
        let memberOptionItems = members.map((members, index) => (
          <option key={index} value={members.first_name + " " + members.last_name}>{members.first_name + " " + members.last_name}</option>
        ));
        return (
          <div className="container mt-5">
            <div className="row">
              <div className="col-sm-12 col-lg-6 offset-lg-3">
                <h1 className="font-weight-normal mb-5">
                  Check in to {event_name}
                </h1>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label htmlFor="first_name">Your First Name</label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      className="form-control"
                      required
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="last_name">Your Last Name</label>
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
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
                      value={this.state.referral}
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