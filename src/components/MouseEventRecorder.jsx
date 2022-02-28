import React, { useCallback, useEffect, useRef } from "react";
import { useState } from "react";
import useStopwatch from "../contexts/StopwatchContext";

export default function MouseEventRecorder({ children }) {
  const { time, reset } = useStopwatch();
  const [events, setEvents] = useState([]);

  const onMouseClick = useCallback(
    (event) => {
      setEvents((values) => [
        { time, x: event.clientX, y: event.clientY },
        ...values,
      ]);
    },
    [time]
  );

  const resetEverything = useCallback((event) => {
    event.stopPropagation();
    reset();
    setEvents([]);
  });

  const EventLog = useCallback(() => {
    const listItem = (event, index) => (
      <li key={index}>{`${event.time}: ${event.x}, ${event.y}`}</li>
    );
    return <ul>{events.map(listItem)}</ul>;
  }, [events]);

  return (
    <div className="app" onClick={onMouseClick}>
      {children}
      <button onClick={resetEverything}>Reset</button>
      <div>
        <EventLog />
      </div>
    </div>
  );
}
