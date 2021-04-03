import React from "react";
import GenericBadge from "./GenericBadge";

export default (props) => ( 
    <GenericBadge 
        text = {props.text}
        icon = {<i className="fas fa-user-check"></i>} 
        bgColor = "hsl(5, 66%, 90%)"
        color = "hsl(5, 66%, 30%)"
    >
    </GenericBadge>
); 