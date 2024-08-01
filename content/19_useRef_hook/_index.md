+++
archetype = "chapter"
title = "19. Hook useRef"
weight = 19
+++

"Use reference" no re-renderiza cuando su valor cambia (a diferencia de `useState`). Se usa cuando se quiere que un componente 'recuerde' alguna información pero que no re-renderice nuevamente

Es util para:
- Acceder o interactuar con elementos del DOM
- Manejar _focus_, animaciones y transiciones
- Administrar temporizadores e intérvalos

## useState
Se tiene una variable con estado inicializada en 0, su _setter_ y su función de actualización que le suma 1. Además se imprime por consola cada que el componente se re-renderiza. El boton `Add` usa la función de actualización

Se observa en el navegador y por terminal que cada que el botón es presionado cambia el valor de 5 y el componente es renderizado nuevamente

```jsx {title="Component.jsx"}
import { useState } from "react"

function Component(){
  const [number, setNumber] = useState(0)

  console.log("Component.jsx re-rendered")

  function handleClick(){
    setNumber(n => n + 1)
  }
  
  return(
    <>
      <p>{number}</p>
      <button onClick={handleClick}>Add</button>
    </>
  )
}

export default Component
```

## useRef
En caso se desee que el valor de la variable cambie pero no visiblemente se usa `useRef` (importando de react). Se inicializa en su propiedad `current` en 0, se tiene su función de actualización que le suma 1. El botón `Add` usa la función de actualización

Adicionalmente se imprime por consola cada que se re-renderiza y se tiene un botón para imprimir por consola el valor de la variable

Se observa que el valor de la variable no cambia visiblemente y no hay un re-renderizado, pero al presionar el botón `Print Log` se vé que el valor sí cambia

```jsx {title="Component.jsx"}
import { useRef, useState } from "react"

function Component(){
  const number = useRef(0);

  console.log("Component.jsx re-rendered");

  function handleClick(){
    number.current++;
  }

  function printLog(){
    console.log(`number: ${number.current}`);
  }
  
  return(
    <>
      <p>{number.current}</p>
      <button onClick={handleClick}>Add</button>
      <button onClick={printLog}>Print Log</button>
    </>
  )
}

export default Component
```

## ref
Es un atributo especial usado para crear referencias a elementos. Al imprimir la variable por consola se ve que es un objeto html. Se puede acceder al elemento usando el método `.current` de la variable, de esa manera se le puede dar enfoque y cambiar su color de fondo
```jsx {title="Component.jsx" hl_lines="4 9-12 17"}
...
function Component(){
  
  const inputRef = useRef(null)

  console.log("Component.jsx re-rendered");
  console.log(inputRef);

  function handleClick(){
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "yellow";
  }

  return(
    <>
      <button onClick={handleClick}>Focus</button>
      <input type="text" ref={inputRef}/>
    </>
  )
}
...
```