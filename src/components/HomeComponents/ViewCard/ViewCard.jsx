import React from "react";
import "./ViewCard.css";
function ViewCard(props) {
  return (
    <div className="viewcard">
      <p className="number">{props.number}</p>
      <p className="string">{props.string}</p>
    </div>
  );
}

export default ViewCard;
