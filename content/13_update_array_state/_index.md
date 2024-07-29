+++
archetype = "chapter"
title = "13. Actualizar Estado de Arrays"
weight = 13
+++

Importar `useState` de `react`, declarar la variable y su función setter (agregar valores por defecto). Imprimir los valores en una lista usando el método `map`, asignar un `key` único `index` por cada elemento

El método `map` toma como primer parámetro el elemento de la lista (`fruit`), el íncide segundo y tercero el array entero

```jsx {title="Component.jsx" hl_lines="4 10"}
import React, {useState} from 'react'

function Component() {
  const [fruits, setFruits] = useState(["manzana", "papaya", "plátano"])

  return(    
    <>
      <h1>Lista de frutas</h1>
      <ul>
        {fruits.map((fruit, index) => <li key={index}>{fruit}</li>)}
      </ul>
    </>
  )
}
export default Component
```

## Agregar elementos
Crear una función para agregar elementos al array, obtener el valor del elemento `input` mediante su `id` y agregarlo al array usando el operador _spread_ `...`
```jsx {title="Component.jsx"}
...
function addFruits(){
  const newFood = document.getElementById("foodInput").value
  setFruits([...fruits, newFood])
}
...
  <input type="text" id="foodInput" placeholder='Agrege fruta' />
  <button onClick={addFruits}>Agregar</button>
...
```

### Eliminar elementos
Definir una función para eliminar elementos del array segun su ´index´. Usarla al hacer click en el elemento, para poder pasar argumentos se debe usar una función flecha `() => función(argumento)`

El método `filter` crea un nuevo array con todos los elementos cuyo índice no es igual al ´index´ pasado en la función

```jsx {title="Component.jsx" hl_lines="8"}
...
function removeFruits(index){
  setFruits(fruits.filter((_, i) => i !== index))
}
...
  {fruits.map(
    (fruit, index) => 
    <li key={index} onClick={() => removeFruits(index)}>{fruit}</li>          
  )}
...
```