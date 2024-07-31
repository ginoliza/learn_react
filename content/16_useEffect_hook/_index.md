+++
archetype = "chapter"
title = "16. Hook useEffect"
weight = 16
+++

Hook de React que ejecuta código cuando:-
- El componente re-renderiza
- El componente es montado
- El componente es montado y algún valor cambia

El primer y tercer caso son parecidos, sin embargo el tercer caso sólo se ejecuta en caso cambie la variable especificada. El primero se ejecuta por cualquier motivo

Se usa principalmente con:
- _Event listeners_
- Manipulación del DOM
- Suscripciones (actualizaciones en tiempo real)
- Obtener datos de una API
- Realizar limpieza (_cleanup_) cuando se desmonta un componente

## Cuando el componente se re-renderiza
`useEffect(() => {})` corre siempre: al ser montado y sobre cualquier cambio, ya que no se especifica ninguna variable que pueda cambiar
```jsx {title="Component.jsx" hl_lines="4 6-8 10-12 18"}
import { useState, useEffect } from 'react'

function Component() {
  const [count, setCount] = useState(0)

  function increase(){
    setCount(c => c + 1)
  }

  useEffect(() => {
    console.log(`${count} cambió`)
  });

  return(
    <>   
      <h2>Counter</h2>   
      <p>{count}</p>
      <button onClick={increase}>Increase</button>
    </>    
  )
}
export default Component
```
## Cuando el componente se monta
`useEffect(() => {}, [<vacío>])` corre sólo cuando el componente se monta al DOM. En este caso se puede ver por consola que sólo se ejecuta al cargar la página y no cuando cambia `count`
```jsx {title="Component.jsx"}
...
useEffect(() => {
  console.log(`${count} cambió`)
}, []);
...
```
## Cuando el componente se monta y algún valor cambia
`useEffect(() => {}, [variable])` sólo corre cuando cambia la variable(s) especificada dentro de corchetes `[]`. En este caso se imprime por consola cada que cambia `count` 
```jsx {title="Component.jsx"}
...
useEffect(() => {
  console.log(`${count} cambió`)
}, [count]);
...
```

## Más de una variable
Dentro de los corchetes `[]` se pueden especificar varias variables. Entonces el código correrá cuando alguna cambie
```jsx {title="Component.jsx"}
import { useState, useEffect } from 'react'

function Component() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(1)

  function increase1(){
    setCount1(c => c + 1)
  }

  function increase2(){
    setCount2(c => c + 1)
  }

  useEffect(() => {
    console.log(`A: ${count1} cambió`)
    console.log(`B: ${count2} cambió`)
  }, [count1]);

  return(
    <>   
      <h2>Counter</h2>   
      <p>A: {count1}</p>
      <button onClick={increase1}>Increase</button>
      <br />
      <p>B: {count2}</p>
      <button onClick={increase2}>Increase</button>
    </>    
  )
}
export default Component
```

Entonces si se pone sólo una variable entre corchetes, el código sólo se ejecutará cuando cambie esa especificamente
```jsx {title="Component.jsx"}
useEffect(() => {
  console.log(`A: ${count1} cambió`)
  console.log(`B: ${count2} cambió`)
}, [count1]);
```

## Return (opcional) - limpieza
El `return () => {}` se puede colocar opcionalmente al final del `useEffect`, se usa principalmente para limpiar/liberar recursos

Ej - se tiene un programa que define las variables de alto y ancho de la ventana del navegador con `window.innerWidth` y `window.innerHeight`, se define su función de actualización y se actualizan las variables con sus respectivos _setter_. Finalmente se utiliza la función cada vez que se cambia el tamaño de la ventana con un _event listener_ `window.addEventListener("resize", función)` y se imprime por consola. 

Al correr este programa y cambiar las dimensiones de la ventana del navegador se pueden ver muchos logs por terminal debido a las actualizaciones.
```jsx {title="Component.jsx"}
import { useState, useEffect } from 'react'

function Component() {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)
  
  window.addEventListener("resize", updateDimensions);
  console.log("EVENT LISTENER ADDED");

  function updateDimensions(){
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useEffect(() => {
    updateDimensions();
  })

  return(
    <>   
      <p>{width} x {height}</p>
    </>    
  )
}
export default Component
```

Englobar en un `useEffect` con corchetes vacíos sin embargo sólo genera un log ya que sólo se ejecuta al inicio cuando el componente es montado

```jsx {title="Component.jsx"}
...
useEffect(() => {
  window.addEventListener("resize", updateDimensions);
  console.log(`EVENT LISTENER ADDED ${width} x ${height} `);
}, [])
...
```

Al especificar sólo una variable (`width`), el código corre sólo cuando cambia la altura, no el ancho. 
```jsx {title="Component.jsx" hl_lines="5"}
...
useEffect(() => {
  window.addEventListener("resize", updateDimensions);
  console.log(`EVENT LISTENER ADDED ${width} x ${height} `);
}, [width])
...
```

El usar el `return` permitirá liberar el _event listener_ e imprimirá por consola
```jsx {title="Component.jsx" hl_lines="5-8"}
useEffect(() => {
  window.addEventListener("resize", updateDimensions);
  console.log(`EVENT LISTENER ADDED ${width} x ${height} `);

  return() => {
    window.removeEventListener("resize", updateDimensions);
    console.log(`EVENT LISTENER REMOVED`);
  }
}, [width])
```

## Múltiples useEffect
Se pueden tener useEffects específicos para ciertas cosas. Al agregar un `useEffect` adicional, el título del documento cambiará cada que se modifique `height`
```jsx {title="Component.jsx" hl_lines="6-10"}
useEffect(() => {
  window.addEventListener("resize", updateDimensions);
  console.log(`EVENT LISTENER ADDED ${width} x ${height} `);
}, [width])

useEffect(() => {
  window.addEventListener("resize", updateDimensions);
  document.title = `height changed: ${height}`
}, [height])
```