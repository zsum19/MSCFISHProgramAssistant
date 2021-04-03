import React from "react";
import GenericBadge from "./GenericBadge";

export default (props) => ( 
    <GenericBadge 
        text = {props.text}
        icon = {<i className="fas fa-ticket-alt"></i>} 
        bgColor = "hsl(50, 66%, 90%)"
        color = "hsl(50, 66%, 30%)"
    >
    </GenericBadge>
); 