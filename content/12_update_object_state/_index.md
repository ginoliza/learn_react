+++
archetype = "chapter"
title = "12. Actualizar estado de objetos"
weight = 12
+++

Importar `useState` de `react` para declarar un objeto con estado. Las propiedades se definen entre llaves `{}` con valores `key: value` y se separan por comas

Se puede acceder al objeto y sus valores dentro de un elemento HTML con llaves `{objeto.propiedad}`

## Función _setter_
Al actualizar el objeto con estado en su función de actualización, se usa la función _setter_ y en su parámetro se debe especificar la propiedad y el valor entre llaves `{}`. En este caso se asigna el valor que se pasa al ocurrir un cambio en el formulario

```jsx {title="Component.jsx" hl_lines="5-7 10-12 18"}
import React, {useState} from 'react'

function Component() {
  const [car, setCar] = useState({
    year: 1995,
    brand: "Toyota",
    model: "Tercel"
  })

  function updateCarYear(event){
    setCar({year: event.target.value})
  }

  return(    
    <>
      <h1>Car</h1>
      <label>Año </label><br />
      <input type="number" value={car.year} onChange={updateCarYear}/><br />
      <h3>Tienes un {car.brand} {car.model} del {car.year}</h3>

    </>
  )
}
export default Component
```
Al hacer esto las demás propiedades desaparecen y sólo queda la propiedad actualizada en la función _setter_. Usar `...objeto, ` antes de actualizar la propiedad 

```jsx {hl_lines="2"}
function updateCarYear(event){
  setCar({...car, year: event.target.value})
}
```

Finalmente se usa el _event handler_ `onChange` normalmente
```jsx {hl_lines="2"}
<label>Año </label><br />
<input type="number" value={car.year} onChange={updateCarYear}/><br />
```

## Código completo
Se agregan dos funciones para modificar la marca y modelo del objeto `car`
```jsx {title="Component.jsx" hl_lines="14-16 18-20 29 32"}
import React, {useState} from 'react'

function Component() {
  const [car, setCar] = useState({
    year: 1995,
    brand: "Toyota",
    model: "Tercel"
  })

  function updateCarYear(event){
    setCar({...car, year: event.target.value})
  }

  function updateCarBrand(event){
    setCar({...car, brand: event.target.value})
  }

  function updateCarModel(event){
    setCar({...car, model: event.target.value})
  }

  return(    
    <>
      <h1>Car</h1>
      <label>Año </label><br />
      <input type="number" value={car.year} onChange={updateCarYear}/><br />
      <hr />
      <label>Marca </label><br />
      <input type="text" value={car.brand} onChange={updateCarBrand}/><br />
      <hr />
      <label>Modelo </label><br />
      <input type="text" value={car.model} onChange={updateCarModel}/><br />
      <hr />

      <h3>Tienes un {car.brand} {car.model} del {car.year}</h3>
    </>
  )
}
export default Component
```