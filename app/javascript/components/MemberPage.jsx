import React from "react";
import { Link } from "react-router-dom";

class MemberPage extends React.Component {
    constructor() {
        super();
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