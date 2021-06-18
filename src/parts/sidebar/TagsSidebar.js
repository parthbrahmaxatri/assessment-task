import React, { useState, useEffect } from "react";
import "./TagsSidebar.css";

function TagsSidebar() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch("https://api.codingninjas.com/api/v3/event_tags")
      .then((res) => res.json())
      .then((res2) => setTags(res2.data.tags));
  }, [])

  const twelveTags = tags.slice(0, 12);

  return (
    <div className="tagItem">
      {twelveTags.map((tag) => {
        return <h1 className="tagItem__h1">{tag}</h1>;
      })}
      <h5 className="tagItem__h5">See more tags</h5>
    </div>
  );
}

export default TagsSidebar;