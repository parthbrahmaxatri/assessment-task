import React from "react";
import "./Nav2ATF.css";
import { Link } from "react-router-dom";

function Nav2ATF() {
  return (
    <div className="flex-container-2">
      <div className="flex-item-2">
        <Link to="/" style={{ textDecoration: 'none' }}>Upcoming</Link>
      </div>
      <div className="flex-item-2">
        <Link to="/Archived" style={{ textDecoration: 'none' }}>Archived</Link>
      </div>
      <div className="flex-item-2 ATF">
        All Time Favorites
      </div>
    </div>
  );
}

export default Nav2ATF;