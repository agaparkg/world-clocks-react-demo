import React from "react";
import SingleTZBox from "./SingleTZBox";

function Section({ listOfSelectedTZ, handleTZBoxRemove }) {
  return (
    <section>
      {listOfSelectedTZ.map((tzBox) => {
        return (
          <SingleTZBox
            handleTZBoxRemove={handleTZBoxRemove}
            key={tzBox.id}
            tzBox={tzBox}
          />
        );
      })}
      {/* <div className="single-timezone">
        <span>X</span>
        <h3 className="single-clock">Africa/Ceuta</h3>
        <div>11:14:03 PM</div>
      </div>
      <div className="single-timezone">
        <span>X</span>
        <h3 className="single-clock">America/Argentina/Buenos_Aires</h3>
        <div>09:14:03 PM</div>
      </div>
      <div className="single-timezone">
        <span>X</span>
        <h3 className="single-clock">Asia/Bishkek</h3>
        <div>02:14:03 AM</div>
      </div> */}
    </section>
  );
}

export default Section;
