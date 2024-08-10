import React from "react";
import Login from "./Login";

var isLoggedIn = true;

function App() {
  return (
    <div 
      // operador ternario
      // className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}
      // otra notación con &&: la segunda condición se ejecuta, no existe else
      className="container">{isLoggedIn && <h1>Hello</h1>}
    </div>
  );
}

export default App;
