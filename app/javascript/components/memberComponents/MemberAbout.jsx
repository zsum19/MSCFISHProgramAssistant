import React from "react";
import { Link } from "react-router-dom";

class MemberAbout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            member: {}
        }
    }

    render() {
        const { member } = this.props;

        console.log(this.props);

        return (
            <div>
                <p>Name: {member.first_name + " " + member.last_name}</p>
                <p>Email: {member.email}</p>
                <p>{member.num_referrals} Referrals</p>
            </div>
        );
      }
}
export default MemberAbout;