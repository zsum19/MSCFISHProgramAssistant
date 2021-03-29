import React from "react";
import { Link } from "react-router-dom";
import LinkButton from "./common/LinkButton";
import MemberList from "./MemberList";

class AdminPage extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        console.log("Hello");
    }

    render() {
        return (
            <div className="">
                <h1>Hello World!</h1>
                <MemberList></MemberList>
                <LinkButton className =  "to-button" to = "/member/create" text = "Add Member"></LinkButton>
                <Link to="/" className="btn btn-link mt-3">
                    Home
                </Link>
            </div>
        );
      }
}
export default AdminPage;