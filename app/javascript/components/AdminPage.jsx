import React from "react";
import { Link } from "react-router-dom";
import JSZip from "jszip";

import LinkButton from "./common/LinkButton";
import MemberList from "./adminComponents/MemberList";
import Tabs from "./util/Tabs"

import "./css/Tabs.css"
import EventList from "./adminComponents/EventList";

import Navbar from "./common/Navbar";
import AnnouncementList from "./adminComponents/AnnouncementList";

class AdminPage extends React.Component {
    constructor() {
        super();
    }

    onChange(evt) {
        function ToJSON(csv) {
            var lines = csv.split("\n");
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

        function DeleteAndUpdate(table, json) {
          const url = `/api/v1/${table}/`;
          const token = document.querySelector('meta[name="csrf-token"]').content;
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
                  for (var i = 0; i < json.length; i++) {
                    var obj = json[i];
                    var controller_method = `create`;

                    if (table == 'attendee') {
                      controller_method = `create_this_only`;
                    }

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
                            return response.json();
                          }
                          throw new Error("Network response was not ok.");
                        })
                    }
                }
              })
        }

        function handleFile(f) {
            JSZip.loadAsync(f)
                .then(function(zip) {
                    zip.file("events.csv").async("string").then(function (data) {
                      var json_data = ToJSON(data);
                      DeleteAndUpdate('events', json_data)
                    });
                    zip.file("roles.csv").async("string").then(function (data) {
                      // var json_data = ToJSON(data);
                      // DeleteAndUpdate('roles', json_data)
                    });
                    zip.file("members.csv").async("string").then(function (data) {
                      var json_data = ToJSON(data);
                      DeleteAndUpdate('members', json_data)
                    });
                    zip.file("announcements.csv").async("string").then(function (data) {
                      var json_data = ToJSON(data);
                      DeleteAndUpdate('announcements', json_data)
                    });
                    zip.file("attendees.csv").async("string").then(function (data) {
                      var json_data = ToJSON(data);
                      DeleteAndUpdate('attendees', json_data)
                    });
                    zip.file("eventattendances.csv").async("string").then(function (data) {
                      // var json_data = ToJSON(data);
                      // DeleteAndUpdate('eventattendances', json_data)
                    });
                    zip.file("referrals.csv").async("string").then(function (data) {
                      // var json_data = ToJSON(data);
                      // DeleteAndUpdate('referrals', json_data)
                    });
                });
        }
    
        var files = evt.target.files;
        for (var i = 0; i < files.length; i++) {
            handleFile(files[i]);
        }
    }

    componentDidMount() {
        // console.log("Hello");
    }

    render() {
        const { activeTab } = this.props.match.params;
        return (
            <div style = {{width: "100vw", height: "105vh", backgroundColor: "whitesmoke"}}>
                <Navbar/>
                <div className="container p-3">
                    <h1>Hello World!</h1>
                    <Tabs
                        components=
                        {[
                        <MemberList key={1} label="Member List"/>,
                        <EventList key={2} label="Event List"/>,
                        <AnnouncementList key={3} label="Announcement List"/>,
                        <AnnouncementList key={4} label="Referral List"/>
                        ]}

                        activeTab={activeTab}
                    />

                    <div>
                        <Link to="/" className="btn btn-link mt-3">Home</Link>
                        <LinkButton className =  "to-button" to = "/allevents" text = "Events"></LinkButton>
                        <LinkButton className =  "to-button" to = "/announcements" text = "Announcements"></LinkButton>
                        <div>
                            <a href="index/database_dump.zip" download = "database_dump.zip">
                                <button className = "btn btn-lg custom-button">Download Database</button>
                            </a>

                            <input type="file" id="file" name="file" multiple className="btn custom-button" onChange={this.onChange}/><br/>
                        </div>
                    </div>
                </div>
            </div>
        );
      }
}
export default AdminPage;