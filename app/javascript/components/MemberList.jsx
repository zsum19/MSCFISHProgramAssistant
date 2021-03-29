import React from "react";
import { Link } from "react-router-dom";
import MemberForm from "./MemberForm";

class MemberList extends React.Component {
    constructor() {
        super();
        this.state = {
            members: []
        }
    }

    test(id) {
        console.log(id);
    }

    componentDidMount() {
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
    }

    render() {
        const { members } = this.state;
        let memberForms = members.map((member, index) => (
            <MemberForm key={member.id} member={member} test={this.test}></MemberForm>
        ));

        return (
            <div className="">
                {memberForms}
            </div>
        );
      }
}
export default MemberList;