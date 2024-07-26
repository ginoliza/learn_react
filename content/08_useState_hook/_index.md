+++
archetype = "chapter"
title = "8. Hook useState"
weight = 8
+++

## Hook
Función especial que permite que componentes funcionales usen carácteristicas de React sin escribir componentes clase. Si las funciones comienzan con `use...` probablemente son hooks de react. El más usado es `useState`

## useState
Hook de React que permite la creación de una variable con estado (_stateful_) y una función _setter_ para actualizar su valor en el DOM Virtual `[name, setName]`

Crear un componente, importarlo y usarlo en `App.jsx`. Importar `React, {useState}` de `react`
```jsx {title="Component.jsx"}
function Component() {
  var counter = 0;
  const incrementar = ()=>{
    counter++;
    console.log(counter);
  }
  
  return(    
    <>
      <p>{counter}</p>
      <button onClick={incrementar}>Incrementar</button>
    </>
  )
}

export default Component
```
Al hacer click el valor de `counter` incrementa, pero no se ve reflejado en pantalla, sólo en terminal.

Para usar `useState` se debe importar de `react`, usar `[variable, setVariable] = useState(default)` (puede dejarse vacío) y usar la función setter en una función interna para modificar el valor de la variable

```jsx {title="Component.jsx"}
import React, {useState} from "react"

function Component() {
  const [age, setAge] = useState(0)

  const updateAge = () => {
    setAge(age+1)
  }
  
  return(    
    <>
      <p>Edad: {age}</p>
      <button onClick={updateAge}>Incrementar</button>
    </>
  )
}

export default Component
```

### Ejercicio 1
Agregar un entero `age` y una función que sume 1; y un booleano `isStudent` que cambie su valor de `true` a `false` y visceversa

```jsx {title="Component.jsx"}
...
function Component() {
  const [name, setName] = useState("gino")
  const [age, setAge] = useState(0)
  const [isStudent, setIsStudent] = useState(false)

  const updateName = () => {
    setName(name + "o")
  }
  
  const updateAge = () => {
    setAge(age+1)
  }  
  
  const toggleStudent = () =>{
    setIsStudent(!isStudent)
  }

  return(    
    <>
      <p>Nombre: {name}</p>
      <button onClick={updateName}>Cambiar nombre</button>

      <p>Edad: {age}</p>
      <button onClick={updateAge}>Incrementar</button>

      <p>Es estudiante: {isStudent ? "Sí": "No"}</p>
      <button onClick={toggleStudent}>Cambiar estado</button>
    </>
  )
}
...
```

### Ejercicio 2
Crear un componente `Counter.jsx` que contenga un contador con 3 botones: incremento, reiniciar, decremento. Estilizar
```jsx {title="Counter.jsx"}
const [counter, setCounter] = useState(0)

const increment = () => {
  setCounter(counter + 1)
}

const reset = () => {
  setCounter(0)
}

const decrement = () => {
  setCounter(counter - 1)
}

return(    
  <div className="contenedor">
    <h1 className="número">{counter}</h1>
    
    <button onClick={decrement} className="boton">Decrementar</button>
    <button onClick={reset} className="boton">Reiniciar</button>
    <button onClick={increment} className="boton">Incrementar</button>
    
  </div>
)
```

```css {title="index.css"}
.contenedor{
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}

.número{
  font-size: 4em;
  margin-top: 0;
  margin-bottom: 20px;
  text-align: center;
}

.boton{  
  background-color: greenyellow;
  margin: 0px 10px;  
  font-size: 2em;
  cursor: pointer;
}

.boton:hover{
  background-color: lightblue;
}
```