import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Events from "../components/Events";
import AllEvents from "../components/AllEvents";
import Event from "../components/Event";
import NewEvent from "../components/NewEvent";

import Announcements from "../components/Announcements";
import Announcement from "../components/Announcement";
import NewAnnouncement from "../components/NewAnnouncement";

import CheckIn from "../components/CheckIn";
import MemberPage from "../components/MemberPage";
import AdminPage from "../components/AdminPage";
import NewMember from "../components/NewMember"

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/allevents" exact component={AllEvents} />
      <Route path="/event/:id" exact component={Event} />
      <Route path="/event" exact component={NewEvent} />
      <Route path="/announcements" exact component={Announcements} />
      <Route path="/announcement/:id" exact component={Announcement} />
      <Route path="/announcement" exact component={NewAnnouncement} />
      <Route path="/checkin" exact component={CheckIn} />
      <Route path="/checkin/:event_id" exact component={CheckIn} />
      <Route path="/memberpage" exact component={MemberPage} />
      <Route path="/admin" exact component={AdminPage} />
      <Route path="/member/create" exact component={NewMember} />
    </Switch>
  </Router>
);