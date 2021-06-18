import React from "react";
import "./CardFooter.css";

function CardFooter({user1, user2, user3, user4, user5, usersRegistered}) {
  return (
    <div>
        <img className="avatar" src={user1} alt="" />
        <img className="avatar" src={user2} alt="" />
        <img className="avatar" src={user3} alt="" />
        <img className="avatar" src={user4} alt="" />
        <img className="avatar" src={user5} alt="" />
        <h5 className="classH5">and <span className="number">{usersRegistered}</span> others registered
        </h5>
    </div>
  );
}

export default CardFooter;