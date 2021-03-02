import React from "react";
import { Link } from "react-router-dom";

export default (props) => ( 
    <Link
        to= {props.to}
        className="btn btn-lg custom-button"
        role="button"
        style = {{
            marginRight: "10px"
        }}
    >
        {props.text}
    </Link>
); 