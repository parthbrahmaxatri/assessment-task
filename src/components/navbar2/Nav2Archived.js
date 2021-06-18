import React from "react";
import "./Nav2Archived.css";
import { Link } from "react-router-dom";

function Nav2Archived() {
  return (
    <div className="flex-container-2">
      <div className="flex-item-2">
        <Link to="/" style={{ textDecoration: 'none' }}>Upcoming</Link>
      </div>
      <div className="flex-item-2 archived">
        Archived
      </div>
      <div className="flex-item-2">
        <Link to="ATF" style={{ textDecoration: 'none' }}>All Time Favorites</Link>
      </div>
    </div>
  );
}

export default Nav2Archived;