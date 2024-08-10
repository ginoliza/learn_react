import React, { useState } from "react";

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  console.log(time);

  function sayHi() {
    setTime(new Date().toLocaleTimeString());
  }
  setInterval(sayHi, 1000);
  

  return (
    <div className="container">
      <h1>{time.substring(0, 8)}</h1>
      <button onClick={sayHi}>Get Time</button>
    </div>
  );
}

export default App;
