import { React, useEffect, useState } from "react";
import "./ATF.css";
import TagsSidebar from "../parts/sidebar/TagsSidebar";
import Card from "../components/card/Card";
import Nav2ATF from "../components/navbar2/Nav2ATF";

function ATF() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.codingninjas.com/api/v3/events?event_category=ALL_EVENTS&event_sub_category=All%20Time%20Favorites&tag_list=&offset=0"
    )
      .then((res) => res.json())
      .then((res2) => setEvents(res2.data.events));
  }, []);

  return (
    <div>
      <Nav2ATF />

      <div className="flex-container-3">
        <div className="flex-item-3-1">
          {events.map((singleEvent) => (
            <span className="cardKiClass">
              <Card
                cardImage={singleEvent.mobile_cover_picture}
                registrationEndTime={new Date(
                  singleEvent.registration_end_time * 1000
                ).toLocaleString()}
                cardTitle={singleEvent.name}
                startTime={new Date(
                  singleEvent.event_start_time * 1000
                ).toLocaleString()}
                fees={singleEvent.fees === 0 ? "Free" : singleEvent.fees}
                currency={singleEvent.fees === 0 ? "" : singleEvent.currency}
                venue={singleEvent.venue}
                description={singleEvent.short_desc}
                tags={singleEvent.card_tags}
                showUsers={singleEvent.registered_users.show_users_count}
                user1={
                  singleEvent.registered_users.show_users_count &&
                  (singleEvent.registered_users.top_users[0].image_url !== null
                    ? singleEvent.registered_users.top_users[0].image_url
                    : "https://files.codingninjas.in/0000000000001270.png")
                }
                user2={
                  singleEvent.registered_users.show_users_count &&
                  (singleEvent.registered_users.top_users[1].image_url !== null
                    ? singleEvent.registered_users.top_users[1].image_url
                    : "https://files.codingninjas.in/0000000000001270.png")
                }
                user3={
                  singleEvent.registered_users.show_users_count &&
                  (singleEvent.registered_users.top_users[2].image_url !== null
                    ? singleEvent.registered_users.top_users[2].image_url
                    : "https://files.codingninjas.in/0000000000001270.png")
                }
                user4={
                  singleEvent.registered_users.show_users_count &&
                  (singleEvent.registered_users.top_users[3].image_url !== null
                    ? singleEvent.registered_users.top_users[3].image_url
                    : "https://files.codingninjas.in/0000000000001270.png")
                }
                user5={
                  singleEvent.registered_users.show_users_count &&
                  (singleEvent.registered_users.top_users[4].image_url !== null
                    ? singleEvent.registered_users.top_users[4].image_url
                    : "https://files.codingninjas.in/0000000000001270.png")
                }
                usersRegistered={singleEvent.registered_users.other_users_count}
              />
            </span>
          ))}
        </div>

        <div className="flex-item-3-2">
          TAGS
          <TagsSidebar />
        </div>
      </div>
    </div>
  );
}

export default ATF;