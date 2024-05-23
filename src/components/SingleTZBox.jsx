import React from "react";

function SingleTZBox({ tzBox, handleTZBoxRemove }) {
  return (
    <div className="single-timezone">
      <span onClick={() => handleTZBoxRemove(tzBox.id)}>X</span>
      <h3 className="single-clock">{tzBox.zoneName}</h3>
      <div>{tzBox.zoneTime}</div>
    </div>
  );
}

export default SingleTZBox;
