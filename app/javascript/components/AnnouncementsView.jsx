import React from "react";
import { Link } from "react-router-dom";
import AnnouncementView from "./AnnouncementView";

export default () => ( 
    <div style = {{border: "1px solid #bbb"}} className = "announcements-view">
        <div className = "colored-heading">
            <h2 className = "text test"> ANNOUNCEMENTS </h2>
        </div>
        <div className = "small-padding scroll-box"> 
            <AnnouncementView 
                title = "What's Up? My Name is Jared, I'm 19" 
                eventName = "Deliver a Pizza Ball" 
                description = "Hi I just wanted to let you know this event is worth 20 fish bucks1 Spend 'em wisely!"
                author = "Nicolas Belovoskey"
                time = "Tuesday, March 16th at 9:00 AM"
            ></AnnouncementView>
            <AnnouncementView
                title = "I love playing in the mud"
                eventName = "Chucky Cheese Social"
                description = "Help the kids with their chucky cheese games!"
                author = "Nicolas Belovoskey"
                time = "Wednesday, March 17th at 3:00 AM"
            >  
            </AnnouncementView>
            <AnnouncementView
                title = "I love playing in the mud"
                eventName = "Another One"
                description = "Help the kids with their chucky cheese games!"
                author = "Nicolas Belovoskey"
                time = "Wednesday, March 17th at 3:00 AM"
            >  
            </AnnouncementView>
        </div>
  </div>
); 