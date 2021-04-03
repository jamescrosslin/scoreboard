import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [isRunning, setRunning] = useState(false);
  const [time, setTime] = useState({ elapsedTime: 0, previousTime: 0 });

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(tick, 100);
      return () => {
        clearInterval(interval);
      };
    }
  });

  const tick = () => {
    if (isRunning) {
      const now = Date.now();
      setTime((time) => ({
        previousTime: now,
        elapsedTime: time.elapsedTime + (now - time.previousTime),
      }));
    }
  };

  const handleStopwatch = () => {
    !isRunning &&
      setTime((state) => ({
        elapsedTime: state.elapsedTime,
        previousTime: Date.now(),
      }));
    setRunning((state) => !state);
  };

  const handleResetTime = () => {
    setTime((_) => ({
      elapsedTime: 0,
      previousTime: Date.now(),
    }));
  };

  return (
    <div className="stopwatch">
      <h2>Stopwatch</h2>
      <span className="stopwatch-time">
        {Math.floor(time.elapsedTime / 1000)}
      </span>
      <button onClick={handleStopwatch}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={handleResetTime}>Reset</button>
    </div>
  );
}

export default Stopwatch;
