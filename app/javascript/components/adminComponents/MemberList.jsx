import React from "react";
import LinkButton from "../common/LinkButton";
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
            <div className="container-fluid mb-4 px-3">
                <div className="container-fluid d-flex justify-content-between my-3">
                <h1 className="d-inline-block">Member List</h1>
                <LinkButton className =  "to-button pull-right" to = "/member/create" text = "Add Member"/>
                </div>
                <div className="row">
                    <div className="col-md-2 ml-1">First Name</div>
                    <div className="col-md-2 ml-1">Last Name</div>
                    <div className="col-md-2 ml-1">Email</div>
                </div>
                {memberForms}
            </div>
        );
      }
}
export default MemberList;