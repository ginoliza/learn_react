+++
archetype = "chapter"
title = "10. Seleccionador de color, inline style"
weight = 10
+++

Es posible usar el _event handler_ `onChange` con `input` de tipo `color` y asignar su valor a un estilo _inline_ de un elemento HTML. El estilo _inline_ debe ir dentro de dobles llaves `{{ }}` ya que es un objeto

Ej - Cambiar el color de un `div` usando un `input` de tipo `color`

```jsx {title="ColorPicker.jsx" hl_lines="15 19" wrap="false"}
import React, {useState} from 'react'

function ColorPicker(){
  const [color, setColor] = useState("#FFFFFF")
  
  function updateColor(event){
    setColor(event.target.value)
  }


  return(
    <>
      <>
        <h1>Color Picker</h1>
        <div style={{backgroundColor: color}}>
          <p>Selected Color: {color}</p>
        </div>
        <label>Select a Color:</label>
        <input type="color" value={color} onChange={updateColor}/>
      </>
    </>
  )
}

export default ColorPicker
```