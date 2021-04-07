import React from "react";
import { Link } from "react-router-dom";

class MemberAbout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            member: {
                first_name: "", 
                last_name: "", 
                email: "",
                num_referral: 0
            }
        }
    }

    componentDidMount() {
        const { member_id } = this.props;
      
          const url = `/api/v1/members/show/${member_id}`;
      
          fetch(url)
            .then(response => {
              if (response.ok) {
                return response.json();
              }
              throw new Error("Network response was not ok.");
            })
            .then(response => this.setState({ member: response }))
            .catch(error => console.log(error.message));
    }

    render() {
        const { member } = this.state;

        return (
            <div>
                <p>Name: {member.first_name + " " + member.last_name}</p>
                <p>Email: {member.email}</p>
                <p>{member.num_referral} Referrals</p>
            </div>
        );
      }
}
export default MemberAbout;