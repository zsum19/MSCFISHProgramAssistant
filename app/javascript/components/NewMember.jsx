import React from "react";
import { Link } from "react-router-dom";
import LinkButton from "./common/LinkButton";

class NewMember extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            role_id: 1,
            first_name: "John",
            last_name: "Doe",
            email: "johndoe@gmail.com",
            num_referrals: 0,
            current_member: {},
            roles: []
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
    }

    componentDidMount() {
      var url = `/api/v1/members/currentMember`;
  
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => this.setState({current_member: response}))
        .catch(error => console.log(error.message));

      url = `/api/v1/roles/index`;
  
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => this.setState({roles: response}))
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
    
    onSubmit(e) {
        e.preventDefault();
        const url = "/api/v1/members/create";
        const { role_id, first_name, last_name, email, num_referrals } = this.state;
    
        const body = {
          role_id,
          first_name,
          last_name,
          email,
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
        const { current_member, roles } = this.state;

        if(current_member == undefined || Object.keys(current_member).length == 0) return (
            <div className="container-fluid vh-100 row">
                <div className="col-12 align-self-center">
                    <h1 className="m-auto d-flex justify-content-center">You should not be here!</h1>
                    <h4 className="m-auto d-flex justify-content-center">Or you should sign in</h4>
                    <div className="my-4 d-flex justify-content-center">
                    {/* <Link className =  "custom-button lg" to = "/members/auth/google_oauth2" onClick={() => window.location.href="/members/auth/google_oauth2"} text = "Sign In">Sign In</Link> */}
                    </div>
                </div>
            </div>
        );

        if(current_member.role_id > 2 ) return (
            <div className="container-fluid vh-100 row">
                <div className="col-12 align-self-center">
                    <h1 className="m-auto d-flex justify-content-center">You should not be here!</h1>
                    <h4 className="m-auto d-flex justify-content-center">If you think this is an issue, contact your director or chair.</h4>
                </div>
            </div>
        );

      //   if(roles == undefined) return (
      //     <div className="container-fluid vh-100 row">
      //         <div className="col-12 align-self-center">
      //             <h1 className="m-auto d-flex justify-content-center">No Role Error!</h1>
      //             <h4 className="m-auto d-flex justify-content-center">If you think this is an issue, contact your director or chair.</h4>
      //         </div>
      //     </div>
      // );
        let roleOptionItems = roles.map((role, index) => (
          <option key={index} value={role.id.toString()}>{role.name}</option>
        ));

        return (
          <div className="container mt-5">
            <div className="row">
              <div className="col-sm-12 col-lg-6 offset-lg-3">
                <h1 className="font-weight-normal mb-5">
                  Create a new member
                </h1>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">First Name</label>
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
                    <label htmlFor="name">Last Name</label>
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
                    <label htmlFor="name">Email</label>
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
                <div className="form-group">
                <label htmlFor="external">Related Event</label>
                <select
                    type="select"
                    name="role_id"
                    id="role_id"
                    className="form-control"
                    required
                    onChange={this.onChange}
                    value={this.state.role_id}
                >
                    {roleOptionItems}
                </select>
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