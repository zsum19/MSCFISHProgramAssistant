import React from "react";
import { Link } from "react-router-dom";

class Announcement extends React.Component {
    constructor(props) {
        super(props);
        this.state = { announcement: { name: "" } };

        this.addHtmlEntities = this.addHtmlEntities.bind(this);
    }

    componentDidMount() {
        const {
          match: {
            params: { id }
          }
        } = this.props;
    
        const url = `/api/v1/announcements/show/${id}`;
    
        fetch(url)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => this.setState({ announcement: response }))
          .catch(() => this.props.history.push("/announcements"));
    }

    addHtmlEntities(str) {
        return String(str)
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">");
    }

    render() {
        const { announcement } = this.state;

        const announcementContent = this.addHtmlEntities(announcement.content);
    
        return (
          <div className="">
            <section className="jumbotron jumbotron-fluid text-center">
              <div className="container py-5">
                  <h1 className="display-4">{announcement.title}</h1>
              </div>
            </section>

            <div className="container py-5">
              <Link to="/announcements" className="btn btn-link">
                Back to All Announcements
              </Link>
              
              <div className="row">
                <div className="col-sm-12 col-lg-7">
                  <h5 className="mb-2">Content</h5>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${announcementContent}`
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="container py-5">
              <div className="row">
                <div className="col-sm-12 col-lg-3">
                  <ul className="list-group">
                    <h5 className="mb-2">Date</h5>
                    <li>
                        {announcement.created_at}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      }
}
export default Announcement;