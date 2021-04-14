import React from "react";
import LinkButton from "../common/LinkButton";
import MemberForm from "./MemberForm";

class MemberList extends React.Component {
    constructor() {
        super();
        this.state = {
            members: [],
            roles: []
        }
    }

    onChange(evt) {
        function ToJSON(csv) {
          var lines = csv.split("\r\n");
          var result = [];
          var headers = lines[0].split(",");
    
          for (var i = 1; i < lines.length-1; i++) {
            var obj = {};
            var current_line = lines[i].split(",");
    
            for (var j = 0; j < headers.length; j++) {
              obj[headers[j]] = current_line[j];
            }
    
            result.push(obj);
          }
    
          return result;
        }
        
        function InOrderFetches(table, json, current) {
            if (current >= json.length) {
              return;
            }
            const url = `/api/v1/${table}/`;
            const token = document.querySelector('meta[name="csrf-token"]').content;
      
            var obj = json[current];
            var controller_method = `create`;
      
            fetch(url + controller_method, {
              method: "POST",
              headers: {
                "X-CSRF-Token": token,
                "Content-Type": "application/json"
              },
              body: JSON.stringify(obj)
            })
              .then(response => {
                if (response.ok) {
                  InOrderFetches(table, json, current+1);
                }
              })
        }

        function DeleteAndUpdate(table, json) {
            const url = `/api/v1/${table}/`;
            const token = document.querySelector('meta[name="csrf-token"]').content;
            var i = 0;
            fetch(url + `remigrate`, {
              method: "POST",
              headers: {
                "X-CSRF-Token": token,
                "Content-Type": "application/json"
              },
              body: JSON.stringify(json)
            })
              .then(response => {
                if (response.ok) {
                  InOrderFetches(table, json, 0);
                }
              })
        }

        var file = evt.target.files[0];
        if (file.name == "members.csv") {
            var reader = new FileReader();
            reader.file = file;
            reader.onload = function(e) {
                var json_data = ToJSON(e.target.result)
                DeleteAndUpdate('members', json_data);
            }
            reader.readAsText(file);
        }
    }

    test(id) {
        console.log(id);
    }

    componentDidMount() {
        const url = "/api/v1/members/index";
        fetch(url)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => {
            this.setState({ members: response });
            this.setState({ referral: this.state.members[0].name });
          })
          .catch(error => console.log(error.message));
        
        const url2 = "/api/v1/roles/index";
        fetch(url2)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => {
            this.setState({ roles: response });
          })
          .catch(error => console.log(error.message));
    }

    render() {
        const { members, roles } = this.state;
        let memberForms = members.map((member, index) => (
            <MemberForm key={member.id} member={member} roles={roles} test={this.test}></MemberForm>
        ));

        return (
            <div className="container-fluid mb-4 px-3">
                <div className="container-fluid d-flex justify-content-between my-3">
                <h1 className="d-inline-block">Member List</h1>
                <LinkButton className =  "to-button pull-right" to = "/member/create" text = "Add Member"/>
                <label for="file">Upload Members:</label>
                <input type="file" id="file" name="file" className="btn custom-button" onChange={this.onChange}/><br/>
                </div>
                <div className="row">
                    <div className="col-md-2 ml-1">First Name</div>
                    <div className="col-md-2 ml-1">Last Name</div>
                    <div className="col-md-2 ml-1">Email</div>
                    <div className="col-md-2 ml-1">Role</div>
                </div>
                {memberForms}
            </div>
        );
      }
}
export default MemberList;