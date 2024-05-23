import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import moment from "moment-timezone";

const localStorageData =
  JSON.parse(localStorage.getItem("listOfSelectedTZ")) || [];

const App = () => {
  const [timeZones] = useState(moment.tz.names());
  const [listOfSelectedTZ, setListOfSelectedTZ] = useState(localStorageData);
  const [selectedTZName, setSelectedTZName] = useState("");
  const [selectedTZTime, setSelectedTZTime] = useState("");

  // console.log(moment().tz("America/Los_Angeles").format("hh:mm:ss A"));
  // console.log(moment().tz("Asia/Bishkek").format("hh:mm:ss A"));

  const runTZTime = () => {
    // const newTZ = listOfSelectedTZ.map((tz) => {
    //   return { ...tz, zoneTime: moment.tz(tz.zoneName).format("hh:mm:ss A") };
    // });

    // setListOfSelectedTZ(newTZ);

    setListOfSelectedTZ((prevTZList) => {
      return prevTZList.map((tz) => ({
        ...tz,
        zoneTime: moment.tz(tz.zoneName).format("hh:mm:ss A"),
      }));
    });

    // setListOfSelectedTZ(prevTZList => {
    //   return prevTZList.map((tz) => {
    //     return { ...tz, zoneTime: moment.tz(tz.zoneName).format("hh:mm:ss A") };
    //   });
    // })
  };

  useEffect(() => {
    let intervalId;

    if (listOfSelectedTZ.length) {
      intervalId = setInterval(() => {
        runTZTime();
      }, 1000);
    }

    return () => clearInterval(intervalId);
    // }, []);
  }, [listOfSelectedTZ]);

  const updateLocalStorage = (newList) => {
    localStorage.setItem("listOfSelectedTZ", JSON.stringify(newList));
  };

  const handleAddClock = () => {
    // debugger;
    const tzIndex = timeZones.indexOf(selectedTZName);
    const tzTimeIndex = listOfSelectedTZ.findIndex((item) => {
      return item.zoneName === selectedTZName;
    });

    if (tzIndex > -1 && tzTimeIndex < 0) {
      const newList = [...listOfSelectedTZ]; // ["America/Los_Angeles", ...]

      const newTZObj = {
        id: tzIndex,
        zoneName: selectedTZName,
        zoneTime: selectedTZTime,
      };

      newList.push(newTZObj);

      updateLocalStorage(newList);
      setListOfSelectedTZ(newList);
    } else {
      alert("Select a different timezone.");
    }
  };

  const handleSelectChange = (e) => {
    const value = e.target.value;

    if (value !== "- Select a timezone -") {
      setSelectedTZName(value);
      setSelectedTZTime(moment().tz(value).format("hh:mm:ss A"));
    }
  };

  // listOfSelectedTZ = [
  // {
  //   id: 1,
  //   zoneName: "Asia/Bishkek",
  //   zoneTime: "11:23:00 PM"
  // },
  //   {
  //     id: 2,
  //     zoneName: "Asia/Tashkent",
  //     zoneTime: "12:23:00 PM"
  //   },
  // ]

  const handleTZBoxRemove = (id) => {
    const newTZ = listOfSelectedTZ.filter((tz) => tz.id !== id);

    updateLocalStorage(newTZ);
    setListOfSelectedTZ(newTZ);
  };

  return (
    <div className="App">
      <Header />
      <Main
        handleTZBoxRemove={handleTZBoxRemove}
        handleSelectChange={handleSelectChange}
        handleAddClock={handleAddClock}
        timeZones={timeZones}
        listOfSelectedTZ={listOfSelectedTZ}
      />
    </div>
  );
};

export default App;
