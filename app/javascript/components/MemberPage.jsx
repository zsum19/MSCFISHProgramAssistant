import React from "react";
import { Link } from "react-router-dom";
import MemberList from "./MemberList";

class MemberPage extends React.Component {
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
                <Link to="/" className="btn btn-link mt-3">
                    Home
                </Link>
            </div>
        );
      }
}
export default MemberPage;