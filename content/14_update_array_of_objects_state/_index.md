+++
archetype = "chapter"
title = "14. Actualizar estado de array de objetos"
weight = 14
+++

Se quiere crear un array `cars` de objetos `car` que tengan propiedades `carYear`, `carMake` y `carModel`

El siguiente código define tres propiedades con estado:
- `carYear` se inicializa al año actual
- `carMake` y `carModel` se inicializan como strings vacíos

Tres funciones para actualizar el valor de las variables segun el evento pasado cuando ocurre algun cambio `onChange`

```jsx {title="Component.jsx"}
import React, {useState} from 'react'

function Component() {
  
  const [carYear, setCarYear] = useState(new Date().getFullYear())
  const [carMake, setCarMake] = useState("")
  const [carModel, setCarModel] = useState("")

  function handlYearChange(event){    
    setCarYear(event.target.value)
  }

  function handleMakeChange(event){
    setCarMake(event.target.value)
  }

  function handleModelChange(event){
    setCarModel(event.target.value)
  }
  
  return(    
    <>
      <input type="number" value={carYear} onChange={handlYearChange}/><br />
      <input type="text" value={carMake} onChange={handleMakeChange}/><br />
      <input type="text" value={carModel} onChange={handleModelChange}/><br />
      <button>Añadir carro</button>

      <h2>Carro a añadir:</h2>
      <p>Año: {carYear} Marca: {carMake} Model: {carModel} </p>
    </>
  )
}
export default Component
```

## Agregar objeto al array de objetos
Primero definir el array de objetos `cars` e inicializarlo vacío. Luego crear su función para actualizar (añadir carro), en esa sea crea un nuevo objeto y se añade a la lista con su _setter_, no olvidar el operador _spread_

Finalmente dentro del formulario llamar a la función

_Opcionalmente_ reestablecer los campos `input`

```jsx {title="Component.jsx"}
...
const [car, setCar] = useState([])
...
function handleAddCar(){
  const newCar = {
    year: carYear,
    make: carMake,
    model: carModel
  }
  
  setCars(c => [...c, newCar])
  
  setCarYear(new Date().getFullYear())
  setCarMake("")
  setCarModel("")
}
...
<button onClick={handleAddCar}>Añadir carro</button>
...
```

## Renderizar el array de objetos
Dentro del `return` usar el método `map` para imprimir cada propiedad de los elementos del array. No olvidar especificar el `key`
```jsx {title="Component.jsx"}
...
<h2>Carros</h2>
<ul>
  {cars.map((car, index) => <li key={index}>{car.year} {car.make} {car.model}</li>)}
</ul>
...
```

## Eliminar elementos
Definir la función para eliminar según los índices. Usar la función al hacer click en cada elemento `li` de la lista no ordenada `ul`. No olvidar que para trabajar con parámetros se debe pasar una función flecha `() => función(parámetro)`, de lo contrario se ejecuta inmediatamente
```jsx {title="Component.jsx"}
...
function handleRemoveCar(index){
  setCars(cars.filter((_, i) => i !== index))
}
...
  <li 
    onClick={() => handleRemoveCar(index)} 
    key={index}>{car.year} {car.make} {car.model}
  </li>)}
...
```