import React from "react";
import "./Card.css";
function Card(props) {
  return (
    <div className="inform">
      <div>
        <img src={props.img} />
        <p>{props.imgTitle}</p>
      </div>
      <div>
        <p>{props.title}</p>
        <p>{props.more}</p>
      </div>
    </div>
  );
}

export default Card;
