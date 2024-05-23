import React from "react";
import SingleOption from "./SingleOption";

function Aside({ timeZones, handleAddClock, handleSelectChange }) {
  return (
    <aside>
      <div className="add-clock-box">
        <button onClick={handleAddClock}>Add Clock</button>
        <select onChange={handleSelectChange} name="timezone" id="timezone">
          <option>- Select a timezone -</option>
          {timeZones.map((zone, ind) => {
            return <SingleOption key={ind} zone={zone} />;
          })}
        </select>
      </div>
    </aside>
  );
}

export default Aside;
