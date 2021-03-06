import React, { useState } from "react";
import EventsDemo from "./components/EventsDemo";
import FormDemo from "./components/FormDemo";
import "./App.css";

const App = () => {
  const [demo, setDemo] = useState("Events");

  const handleClick = () => {
    demo === "Events" ? setDemo("Form") : setDemo("Events");
  };

  return (
    <div className="App">
      <button onClick={() => handleClick()}>Change to {demo} demo</button>
      {demo === "Events" ? <EventsDemo /> : <FormDemo />}
    </div>
  );
};

export default App;
