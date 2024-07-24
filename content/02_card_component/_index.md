+++
archetype = "chapter"
title = "2. className, imagen, css"
weight = 2
+++

Tipicamente contienen una imagen, un título y una descripción

## Configurar proyecto
Con los pasos de la lección anterior y:
- Eliminar `App.css`
- En `App.jsx` sólo dejar la función y el export

## className, imágen y CSS
Crear un componente `Card.jsx`, importarlo en `App.jsx` y usarlo dentro del return. La **propiedad** `className` se usa para identificar el elemento en React. 

```jsx {title="App.jsx"}
import Card from "./Card"

function App() {

  return (    
    <Card/>      
  )
}

export default App
```

Card es un elemento que contiene una imagen, un título y un texto descriptivo. La **imagen** se debe encontrar en `./src/assets/`

```jsx {title="Card.jsx"}
import profilePic from './assets/profile.jpg'

function Card() {
    return(
        <div className="card">
            {/* Si no se tiene una imagen disponible se puede usar: */}
            {/* https://via.placeholder.com/150 */}
            <img className='card-image' src={profilePic} alt="profile picture" />
            <h2 className='card-title' >Gino Liza</h2>
            <p className='card-text'>I learn courses and play guitar</p>
        </div>
    )
}

export default Card
```

Usando los `className` se puede estilizar cada elemento

```css {title="index.css"}
.card {
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 5px 5px 5px red;
  padding: 20px;
  margin: 10px;
  text-align: center;
  max-width: 250px;
  display: inline-block;
}

.card .card-image{
  max-width: 60%;
  height: auto;
  border-radius: 50%;
  margin-bottom: 10px;
}

.card .card-title{
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  color: gray;
}

.card .card-text {
  font-family: Arial, Helvetica, sans-serif;
  color: green;
}
```