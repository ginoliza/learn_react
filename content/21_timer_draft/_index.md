+++
archetype = "chapter"
title = "21. Borrador de cronómetro"
weight = 21
+++

```jsx {title="Component.jsx"}
import { useState, useEffect, useRef } from "react";

function Component() {
  const count = useRef(0);
  const intervalRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        count.current++;
        setRenderCount(count.current);  // Trigger re-render
        // console.log(count.current);
      }, 1);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  function start() {
    setIsRunning(true);
  }

  function stop() {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  }

  function reset() {
    count.current = 0;
    setRenderCount(count.current);
  }

  return (
    <>
      <p>{count.current}</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
export default Component;

```