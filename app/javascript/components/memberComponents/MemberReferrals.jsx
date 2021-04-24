import React from "react";
import { Link } from "react-router-dom";
import EventBadge from "../common/EventBadge";

class MemberReferrals extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            referrals: [],
            attendees: []
        }
    }

    componentDidMount() {
        const { member_id } = this.props;
        var url = `/api/v1/referrals/index/${member_id}`;

        fetch(url)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => this.setState({ referrals: response }))
          .catch(error => console.log(error.message));
        
        url = "/api/v1/attendees/index";
        fetch(url)
        .then(response => {
            if (response.ok) {
            return response.json();
            }
            throw new Error("Network response was not ok.");
        })
        .then(response => {
            this.setState({ attendees: response });
            // console.log('ATTENDESS:');
            // console.log(response);
        })
        .catch(() => this.props.history.push("/"));
    }

    getAttendeeName(attendees, id) {
        var name = "UNDEFINED"
        attendees.forEach(function (attendee) {
            if(attendee.id == id){
                name =  attendee.first_name + ' ' + attendee.last_name;
            }
        });
        return name;
    }

    getAttendeeEmail(attendees, id) {
        var email = "UNDEFINED"
        attendees.forEach(function (attendee) {
            if(attendee.id == id){
                email =  attendee.email;
            }
        });
        return email;
    }

    render() {
        const { referrals, attendees } = this.state;

        // console.log(attendees);

        const noReferrals = (
            <tr>
                <td>No referrals!</td>
            </tr>
        );

        if(attendees.length == 0) return noReferrals;

        const allReferrals = referrals.map((referral, index) => (
            <tr key={index}>
                <td><i>{referral.attendee_id}</i></td>
                <td>{this.getAttendeeName(attendees, referral.attendee_id)}</td>
                <td>{this.getAttendeeEmail(attendees, referral.attendee_id)}</td>
            </tr>
        ));        

        return (
            <>
            <table className = "small-padding announcement-scroll-box">
                <tbody>
                    <tr key='999999'>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                    {referrals.length > 0 ? allReferrals : noReferrals}
                </tbody>
            </table>
            </>
        );
      }
}
export default MemberReferrals;