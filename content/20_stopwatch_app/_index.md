+++
archetype = "chapter"
title = "20. Cronómetro"
weight = 20
+++

Este proyecto usa todo lo aprendido. Se tiene inicialmente una página web con 3 botones y dos elementos de tiempo. Al presionar el boton `Start` se observa por consola que los milisegundos sí estan corriendo, sin embargo no se visualiza en el navegador.
```jsx {title="Component.jsx"}
function Component() {
  let initialTime = Date.now();
  let elapsedTime = 0;

  function start(){
    console.log("starting timer");
    elapsedTime = Date.now() - initialTime;
    console.log(elapsedTime);
  }

  function stop() {
    console.log("stopping timer");
  }

  function reset(){
    console.log("resetting timer");
  }

  return (
    <>
    <h1>Timer</h1>
    <p>{initialTime}</p>
    <p>{elapsedTime}</p>
    <button onClick={start}>Start</button>
    <button onClick={stop}>Stop</button>
    <button onClick={reset}>Reset</button>
    </>
  );
}
export default Component;
```

## Con useState
Permite ver cambios en el navegador cada que presionamos el botón `Start`, sin embargo aún no se actualiza automáticamente
```jsx {title=""}
import { useState, useEffect, useRef } from "react";

...  
  const [elapsedTime, setElapsedTime] = useState(0);

  function start(){
    console.log("starting timer");
    setElapsedTime(Date.now() - initialTime);
  }
...
```