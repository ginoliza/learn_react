+++
archetype = "chapter"
title = "9. onChange"
weight = 9
+++

Inicia una función cada vez que el valor de entrada cambia. Usado principalmente con elementos `form` ej - `input` `textarea` `select` `radio`. 

## onChange
Al igual que `onClick`, se debe usar `setState` de `react`, se define una variable y su _setter_ con `useState` (si se desea se pasa un valor por defecto). Se crea una función interna y se usa el _setter_ adentro con `event.target.value` para actualizar la variable; finalmente se pasa la función a la propiedad `onChange` del elemento HTML sin parametros

### input 
```jsx {title="Component.jsx" hl_lines="1 4 6-8 13-14"}
import React, {useState} from "react"

function Component(){
  const [name, setName] = useState("gino")
    
  function updateName(event){
    setName(event.target.value)
  }
  
  return(
    <>
      <form>
        <input value={name} type="text" onChange={updateName} /><br />
        <p>{name}</p>
      </form>
    </>
  )
}

export default Component
```
### textarea

```jsx {title="Component.jsx"}
...
const [comment, setComment] = useState("")  

function updateComment (event) {
  setComment(event.target.value)
}
...      
  <textarea value={comment} onChange={updateComment} placeholder="comment placeholder"></textarea>
  <p>{comment}</p>
...
```

### select
```jsx {title="Component.jsx"}
const [payment, setPayment] = useState("")

function updatePayment (event) {
  setPayment(event.target.value)
}
...
  <select value={payment} onChange={updatePayment}>
    <option value="">Select an option</option>
    <option value="visa">Visa</option>
    <option value="mastercard">Mastercard</option>
  </select>
  <p>{payment}</p>
```
### radio
Se debe verificar en una propiedad `checked` si la variable es estrictamente `===` igual al string, entonces sobre el evento de cambio `onChange` se ejecutará la función interna para modificar el valor de la variable

```jsx {title="Component.jsx" hl_lines="10-11"}
const [shipping, setShipping] = useState("Delivery")

function updateShipping(event){
  setShipping(event.target.value)
}

  <label>Pick Up</label>
  <input 
    type="radio" value="Pick Up"
    checked={shipping === "Pick Up"}
    onChange={updateShipping}
  />

  <label>Delivery</label>
  <input 
    type="radio" value="Delivery"
    checked={shipping === "Delivery"}
    onChange={updateShipping}
  />
  <p>Shipping: {shipping}</p>
```