import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  
  const [backgroundColor, setBackgroundColor] = useState("");

  function mouseIn(){
    setBackgroundColor("black");
  }

  function mouseOut() {
    setBackgroundColor("white");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOver={mouseIn}
        onMouseOut={mouseOut}
        style={{backgroundColor: backgroundColor}}
      >
        Submit</button>
    </div>
  );
}

export default App;
