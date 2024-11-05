import React from "react";
import "./App.css";
import { JokesWrapper } from "./JokesWrapper";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

library.add(faRotateRight);

function App() {
  return (
    <div className="App">
      <JokesWrapper />
    </div>
  );
}

export default App;
