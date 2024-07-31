+++
archetype = "chapter"
title = "17. Reloj digital"
weight = 17
+++

## Reloj básico
Se crea una variable cone estado time inicializada con el tiempo actual y su función _setter_, aún no hay función de actualización. Se muestra la variable dentro del `h2` separado en horas, minutos y segundos.

```jsx {title="Component.jsx"}
import { useState, useEffect } from 'react'

function Component() {
  
  const [time, setTime] = useState(new Date());

  return(
    <>   
      <h1>Digital clock</h1>
      <h2>{time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</h2>      
    </>    
  )
}
export default Component
```
## Función de actualización
Se usa el hook `useEffect` y la función `setInterval` para actualizar la hora cada 1000 milisegundos (1 segundo). Este tipo de `useEffect` con corchetes vacíos `[]` corre sólo cuando el componente se monta al DOM, de no poner `[]` la función `useEffect` correría constantemente.

```jsx {title="Component.jsx" hl_lines="4-9"}
...
const [time, setTime] = useState(new Date());

useEffect(() => {
  const intervalId = setInterval(() => {
    setTime(new Date());
  }, 1000)
  console.log("actualizando hora");
}, [])
...
```

## Formatear hora
Hasta ahora las horas, minutos y segundos se muestran de un sólo dígito, se crea la función `padZero` para que el tiempo se muestre siempre de 2 dígitos; la función `formatTime` retorna la hora, minutos y segundos en formato de 12h y se agrega el meridiano (AM/PM)

```jsx {title="Component.jsx"}
function padZero(number){
  return number < 10 ? "0" + number : number;
}

function formatTime(){
  let hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const meridiem = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;   

  return `${padZero(hours)}:${minutes}:${seconds} ${meridiem}`
}
```