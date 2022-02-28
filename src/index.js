import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MouseEventRecorder from "./components/MouseEventRecorder";
import Stopwatch from "./components/Stopwatch";
import "./models/StopwatchValue.js";
import { StapwatchContextProvider } from "./contexts/StopwatchContext";

ReactDOM.render(
  <React.StrictMode>
    <StapwatchContextProvider>
      <MouseEventRecorder>
        <Stopwatch />
      </MouseEventRecorder>
    </StapwatchContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
