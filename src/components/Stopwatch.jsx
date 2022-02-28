import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { useState } from "react";
import useStopwatch from "../contexts/StopwatchContext";

export default function Stopwatch() {
  const { time, isPaused, start, stop } = useStopwatch();
  console.log(isPaused);

  const action = useCallback(
    (event) => {
      event.stopPropagation();
      return isPaused ? start() : stop();
    },
    [isPaused]
  );

  const actionText = useMemo(() => {
    return isPaused ? "Start" : "Stop";
  }, [isPaused]);

  return (
    <>
      <h1>{`${time}`}</h1>
      <div>
        <button onClick={action}>{actionText}</button>
      </div>
    </>
  );
}
