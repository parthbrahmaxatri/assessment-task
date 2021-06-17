import React from "react";
import "./Nav1.css";

function Nav1() {
  return (
    <div className="flex-container-1">
      <div className="flex-item all-events">
        <img src="https://www.codingninjas.com/assets-landing/images/all-events-selected.svg" alt="" />All Events
      </div>
      <div className="flex-item">
        <img src="https://www.codingninjas.com/assets-landing/images/webinar-unselected.svg" alt="" />Webinars
      </div>
      <div className="flex-item">
        <img src="https://www.codingninjas.com/assets-landing/images/coding-events-unselected.svg" alt="" />Coding Events
      </div>
      <div className="flex-item">
        <img src="https://files.codingninjas.in/bootcamp_events_unselected-5397.png" alt="" />Bootcamp Events
      </div>
      <div className="flex-item">
        <img src="https://files.codingninjas.in/workshop_unselected-5395.png" alt="" />Workshops
      </div>
    </div>
  );
}

export default Nav1;