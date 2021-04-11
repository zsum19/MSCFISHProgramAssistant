import React from "react";
import { Link } from "react-router-dom";
import EventBadge from "../common/EventBadge";

class MemberReferrals extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            referrals: []
        }
    }

    componentDidMount() {
        const { member_id } = this.props;
        const url = `/api/v1/referrals/index/${member_id}`;

        fetch(url)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => this.setState({ referrals: response }))
          .catch(error => console.log(error.message));
    }

    render() {
        const { referrals } = this.state;

        const allReferrals = referrals.map((referral, index) => (
            <tr>
                <td>{referral.attendee_id}</td>
            </tr>
        ));

        const noReferrals = (
            <tr>
                <td>No referrals!</td>
            </tr>
        );

        return (
            <div className = "small-padding announcement-scroll-box"> 
                <table>
                    <tbody>
                        <tr>
                            <th>Attendee ID</th>
                        </tr>
                        {referrals.length > 0 ? allReferrals : noReferrals}
                    </tbody>
                </table>
            </div>
        );
      }
}
export default MemberReferrals;