import React from "react";
import GenericBadge from "./GenericBadge";

export default (props) => ( 
    <GenericBadge 
        text = {props.text} 
        bgColor = "hsl(185, 66%, 90%)"
        color = "hsl(185, 66%, 20%)"
    ></GenericBadge>
); 