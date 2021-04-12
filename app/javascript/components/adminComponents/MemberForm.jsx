import React from "react";

class MemberForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            role_id: "",
            roles: []
        }

        this.onChange = this.onChange.bind(this);
        this.confirmDelete = this.confirmDelete.bind(this);
    }
    
    updateMember = (id) => {
        const url = `/api/v1/members/update/${id}`;
        const { first_name, last_name, email, role_id} = this.state;
        console.log(this.state);
        const body = {
            first_name,
            last_name,
            email,
            role_id
        };
    
        const token = document.querySelector('meta[name="csrf-token"]').content;
        fetch(url, {
          method: "PATCH",
          headers: {
            "X-CSRF-Token": token,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        })
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => this.props.history.push(`/admin`))
          .catch(error => console.log(error.message));
    }

    onChange(e) {
        if(e.target.value == "") {
            let val = this.props.member[e.target.name];
            this.setState({ [e.target.name]: val });
        } 
        else {
            this.setState({ [e.target.name]: e.target.value });
        }
    }

    confirmDelete = (member) => {
        if(window.confirm("Delete Member?")) {
            const url = `/api/v1/members/destroy/${member.id}`;
            const token = document.querySelector('meta[name="csrf-token"]').content;
        
            fetch(url, {
            method: "DELETE",
            headers: {
                "X-CSRF-Token": token,
                "Content-Type": "application/json"
            }
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(() => this.props.history.push("/admin"))
            .catch(error => console.log(error.message));
        }
    }

    componentDidMount() {
        let member = this.props.member;
        this.setState({ first_name: member.first_name, last_name: member.last_name, email: member.email, role_id: member.role_id});

    }

    render() {
        let member = this.props.member;
        let roles = this.props.roles;
        let roleOptionItems = roles.map((role, index) => (
            <option key={index} value={role.id.toString()}>{role.name}</option>
        ));
        return (
            <form className="form-inline row my-1" onSubmit={() => this.updateMember(member.id)}>
                <div className="form-group col-md-2">
                    <input 
                        type="text"
                        id={"first_name_"+member.id} 
                        placeholder={member.first_name}
                        name="first_name"
                        className="form-control"
                        style={{width:'100%'}}
                        onChange={this.onChange}
                    />
                </div>
                <div className="form-group col-md-2">
                    <input 
                        type="text"
                        id={"last_name_"+member.id} 
                        placeholder={member.last_name} 
                        name="last_name"
                        className="form-control"
                        style={{width:'100%'}}
                        onChange={this.onChange}
                    />
                </div>
                <div className="form-group col-md-2">
                    <input 
                        type="text"
                        id={"email_"+member.id} 
                        placeholder={member.email} 
                        name="email"
                        className="form-control"
                        style={{width:'100%'}}
                        onChange={this.onChange}
                    />
                </div>
                <div className="form-group col-md-2">
                    <select
                      name="role_id"
                      type="text"
                      id="role_id"
                      className="form-control"
                      value= {this.state.role_id}
                      //For future joining of tables
                      style={{width:'100%'}}
                      onChange={this.onChange}
                    >
                      {roleOptionItems}
                    </select>
                  </div>
                <button type="submit" className="btn custom-button mx-3">Update</button>
                <button type="button" className="btn btn-danger mx-5" onClick={() => this.confirmDelete(member)}>Delete</button>
            </form>
        );
      }
}
export default MemberForm;