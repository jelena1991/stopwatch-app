import React, { useContext, useEffect, useRef, useState } from "react";
import StopwatchValue from "../models/StopwatchValue";

const StopwatchContext = React.createContext();

export default function useStopwatch() {
  return useContext(StopwatchContext);
}

export function StapwatchContextProvider({ children }) {
  const interval = 50;
  const [time, setTime] = useState(new StopwatchValue(0));
  const [isPaused, setIsPaused] = useState(true);

  const timeout = useRef();
  useEffect(() => {
    if (isPaused) return;
    timeout.current = setTimeout(() => {
      setTime(new StopwatchValue(time + interval));
    }, interval);
    return () => clearTimeout(timeout.current);
  }, [isPaused, time]);

  const start = () => setIsPaused(false);
  const stop = () => setIsPaused(true);
  const reset = () => setTime(new StopwatchValue(0));

  return (
    <StopwatchContext.Provider value={{ time, isPaused, start, stop, reset }}>
      {children}
    </StopwatchContext.Provider>
  );
}
