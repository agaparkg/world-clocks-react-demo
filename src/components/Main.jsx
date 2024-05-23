import React from "react";
import Aside from "./Aside";
import Section from "./Section";

function Main({
  timeZones,
  listOfSelectedTZ,
  handleAddClock,
  handleSelectChange,
  handleTZBoxRemove,
}) {
  return (
    <main>
      <Aside
        handleSelectChange={handleSelectChange}
        timeZones={timeZones}
        handleAddClock={handleAddClock}
      />
      <Section
        handleTZBoxRemove={handleTZBoxRemove}
        listOfSelectedTZ={listOfSelectedTZ}
      />
    </main>
  );
}

export default Main;
