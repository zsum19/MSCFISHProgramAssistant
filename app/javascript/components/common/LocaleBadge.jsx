import React from "react";
import GenericBadge from "./GenericBadge";

export default (props) => ( 
    <GenericBadge 
        text = {props.text}
        icon = {<i class="fas fa-map-marker-alt"></i>} 
        bgColor = "hsl(275, 66%, 90%)"
        color = "hsl(275, 66%, 30%)"
    >
    </GenericBadge>
); 