import React from "react";
import { Link } from "react-router-dom";

class NewMember extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            role_id: 1,
            name: "John Doe",
            num_referrals: 0,
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
    }

    stripHtmlEntities(str) {
        return String(str)
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    onSubmit(e) {
        e.preventDefault();
        const url = "/api/v1/members/create";
        const { role_id, name, num_referrals } = this.state;
    
        const body = {
          role_id,
          name,
          num_referrals
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
          .then(response => this.props.history.push(`/admin`))
          .catch(error => console.log(error.message));
    }
    
    render() {
        return (
          <div className="container mt-5">
            <div className="row">
              <div className="col-sm-12 col-lg-6 offset-lg-3">
                <h1 className="font-weight-normal mb-5">
                  Create a new member
                </h1>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
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
                    <label htmlFor="num_referrals">Number of Referrals</label>
                    <input
                      type="number"
                      name="num_referrals"
                      id="num_referrals"
                      min="0"
                      className="form-control"
                      required
                      onChange={this.onChange}
                    />
                  </div>
                  <button type="submit" className="btn custom-button mt-3">
                    Create Member
                  </button>
                  <Link to="/admin" className="btn btn-link mt-3">
                    Admin Page
                  </Link>
                </form>
              </div>
            </div>
          </div>
        );
      }
}
export default NewMember;