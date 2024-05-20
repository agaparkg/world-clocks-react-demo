import React from "react";

function Aside() {
  return (
    <aside>
      <div className="add-clock-box">
        <button>Add Clock</button>
        <select name="timezone" id="timezone">
          <option>- Select a timezone -</option>
          <option>Africa/Ceuta</option>;
          <option>America/Argentina/Buenos_Aires</option>;
        </select>
      </div>
    </aside>
  );
}

export default Aside;
