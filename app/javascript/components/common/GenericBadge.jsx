import React from "react";


export default class InfoBadge extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div
                style = {{
                    borderRadius: "10px",
                    fontWeight: "bold",
                    padding: "5px 10px",
                    border: "1px solid #bbb",
                    backgroundColor: "whitesmoke",
                    display: "inline-block",
                    marginRight: "5px",
                    marginBottom: "10px",
                    backgroundColor: this.props.bgColor,
                    color: this.props.color,
                    borderColor: this.props.color
                }}
            >
                {this.props.icon}
                {" "}
                {this.props.text}
            </div>
        );
    }
    
}
