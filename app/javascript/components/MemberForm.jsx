import React from "react";

class MemberForm extends React.Component {
    constructor() {
        super();
    }
    
    test = () => {
        console.log("HELLO");
        this.props.test(this.props.member.id);
    }

    componentDidMount() {
        // console.log("Hello");
    }

    render() {
        let member = this.props.member;
        return (
            <form className="form-inline" onSubmit={this.test}>
                <label htmlFor={"email"+member.id}>Email:</label>
                <input type={"email"+member.id} id={"email"+member.id} placeholder={member.name} name={"email"+member.id}/>
                <label htmlFor={"pwd"+member.id}>Password:</label>
                <input type={"password"+member.id} id={"pwd"+member.id} placeholder={member.num_referrals} name={"pswd"+member.id}/>
                <label>
                    <input type="checkbox" name={"remember"+member.id}/> Remember me
                </label>
                <button type="submit">Submit</button>
            </form>
        );
      }
}
export default MemberForm;