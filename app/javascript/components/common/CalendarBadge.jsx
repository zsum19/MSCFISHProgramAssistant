import React from "react";
import GenericBadge from "./GenericBadge";

export default (props) => ( 
    <GenericBadge 
        text = {props.text}
        icon = {<i class="far fa-calendar"></i>} 
        bgColor = "hsl(320, 66%, 90%)"
        color = "hsl(320, 66%, 30%)"
    >
    </GenericBadge>
); 