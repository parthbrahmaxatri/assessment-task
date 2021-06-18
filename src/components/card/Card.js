import React from "react";
import "./Card.css";
import CardFooter from "./CardFooter";
import CardTag from "./CardTag";

function Card({
  cardImage,
  registrationEndTime,
  cardTitle,
  startTime,
  fees,
  currency,
  venue,
  description,
  tags,
  showUsers,
  user1,
  user2,
  user3,
  user4,
  user5,
  usersRegistered,
}) {
  return (
    <div className="Card">
      <div className="imageContainer">
        <img className="Card__img" src={cardImage} alt="" />
        {new Date().toLocaleString() < registrationEndTime
          ? <div><div className="pulsating-circle"></div><h6 className="bottom-right">Registrations <strong>open</strong> till{" "}
          <strong>{registrationEndTime}</strong></h6></div>
          : null}
      </div>

      <h3 className="Card__title">{cardTitle}</h3>
      <div className="Card-flex-container">
        <div className="Card-flex-item-1">
          <h5 className="Card-flex-item-header">Starts on</h5>
          <h5 className="classH5">{startTime}</h5>
        </div>
        <div className="Card-flex-item-2">
          <h5 className="Card-flex-item-header">Entry Fee</h5>
          <h5 className="classH5">{fees + " " + currency}</h5>
        </div>
        <div className="Card-flex-item-3">
          <h5 className="Card-flex-item-header">Venue</h5>
          <h5 className="classH5">{venue}</h5>
        </div>
      </div>
      <hr />
      <h5 className="Card__desc">
        {description.length > 140
          ? description.substring(0, 140) + "..."
          : description.substring(0, 140)}
      </h5>
      <div className="tagsContainer">
        <div className="tagsClass">
          {tags.map((tag) => (
            <CardTag tag={tag} />
          ))}
        </div>
      </div>
      <hr />
      <div className="Card__users">
        <div>
          {showUsers && (
            <CardFooter
              user1={user1}
              user2={user2}
              user3={user3}
              user4={user4}
              user5={user5}
              usersRegistered={usersRegistered}
            />
          )}
        </div>
        <img
          className="registerNow"
          src="https://files.codingninjas.in/0000000000001272.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Card;