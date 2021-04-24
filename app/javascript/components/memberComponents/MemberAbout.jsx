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
                <p style={{textAlign:'center'}}><b>{member.num_referrals} Referrals</b></p>
            </div>
        );
      }
}
export default MemberAbout;