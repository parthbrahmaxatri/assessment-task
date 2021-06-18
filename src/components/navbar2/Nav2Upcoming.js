import React from "react";
import "./Nav2Upcoming.css";
import { Link } from "react-router-dom";

function Nav2Upcoming() {
  return (
    <div className="flex-container-2">
      <div className="flex-item-2 upcoming">
        Upcoming
      </div>
      <div className="flex-item-2">
        <Link to="/Archived" style={{ textDecoration: 'none' }}>Archived</Link>
      </div>
      <div className="flex-item-2">
        <Link to="/ATF" style={{ textDecoration: 'none' }}>All Time Favorites</Link>
      </div>
    </div>
  );
}

export default Nav2Upcoming;