+++
archetype = "chapter"
title = "15. Lista to-do"
weight = 15
+++

Crear una lista que permita añadir elementos, eliminarlos y subir o bajar posición

## Estilos
{{% expand %}}
```css {title="index.css"}
body{
  background-color: hsl(0, 0%, 10%);
}
.to-do-list{
    font-family: Arial, sans-serif;
    text-align: center;
    margin-top: 100px;
}
h1{
    font-size: 4rem;
    color: white;
}
button{
    font-size: 1.7rem;
    font-weight: bold;
    padding: 10px 20px;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.5s ease;
}
.add-button{
    background-color: hsl(125, 47%, 54%);
}
.add-button:hover{
    background-color: hsl(125, 47%, 44%);
}
.delete-button{
    background-color: hsl(10, 90%, 50%);
}
.delete-button:hover{
    background-color: hsl(10, 90%, 40%);
}
.move-button{
    background-color: hsl(207, 90%, 64%);
}
.move-button:hover{
    background-color: hsl(207, 90%, 54%);
}
input[type="text"]{
    font-size: 1.6rem;
    padding: 10px;
    border: 2px solid hsla(0, 0%, 80%, 0.5);
    border-radius: 5px;
    color: hsla(0, 0%, 0%, 0.5);
}
ol{
    padding: 0;
}
li{
    font-size: 2rem;
    font-weight: bold;
    padding: 15px;
    background-color: hsl(0, 0%, 97%);
    margin-bottom: 10px;
    border: 3px solid hsla(0, 0%, 85%, 0.75);
    border-radius: 5px;
    display: flex;
    align-items: center;
}
.text{
    flex: 1;
}
.delete-button, .move-button{
    padding: 8px 12px;
    font-size: 1.4rem;
    margin-left: 10px;
} 
```
{{% /expand %}}

## Elemento individual (tareas)
Es una string con estado 
```jsx {title="ToDoList.jsx"}
...
const [newTask, setNewTask] = useState("");
...
function handleInputChange(event){
  setNewTask(event.target.value);
}
...
<input 
  type="text" 
  placeholder='Enter a task...'
  value={newTask} 
  onChange={handleInputChange} />
```
## Lista de tareas, renderizar

Es un array de strings inicializado con tres elementos; se tiene un campo `input` que al ocurrir un cambio cambia la variable con estado (tarea)

Se renderiza dentro de un `li` con el método `map` usando el primer parámetro como contenido y su índice como `key` único
```jsx {title="ToDoList.jsx"}
...
const [tasks, setTasks] = useState(["eat breakfast", "take a shower", "walk the dog"]);
...
// renderizar
<h1>To-do list</h1>
<div>
  <input 
    type="text" 
    placeholder='Enter a task...'
    value={newTask} 
    onChange={handleInputChange} />
</div>

<ol>        
  {tasks.map((task, index)=>
    <li key={index}>
      <span className="text">{task}</span>      
    </li>
  )}
</ol>

```


## Agregar elemento a la lista
Se usa una función de actualización, veriricando previamente si al eliminar espacios en blanco con el método `trim` se tiene un _string_ no vacío. Entonces se agrega la nueva tarea al final usando el operador _spread_ `...` y la convención de nombres `t`. Adicioalmente se reinicia el valor de la tarea para que el campo en el formulario quede vacío

La función se usa al hacer click en el botón `Add`

```jsx {title="ToDoList.jsx"}
...
function addTask(){    
  if(newTask.trim() !== ""){
    setTasks(t => [...t, newTask]);
    setNewTask("");
  }
}
...
<button 
  className="add-button" 
  onClick={addTask}>
  Add
  </button>
...
```

## Eliminar elemento de la lista
Se define una función tomando como parámetro el índice y se actualiza filtrando los elementos cuyo índice sea diferente al provisto. Tener en cuenta los nombres diferentes de los índices

La función se usa al hacer click en el botón `Delete` al lado del elemento de la lista
```jsx {title="ToDoList.jsx" hl_lines="11-15"}
...
function deleteTask(index){    
  const updatedTasks = tasks.filter((_, i) => i !== index);
  setTasks(updatedTasks);
}
...
<ol>        
  {tasks.map((task, index)=>
    <li key={index}>
      <span className="text">{task}</span>
      <button 
        className='delete-button'
        onClick={()=> deleteTask(index)}>
          Delete
      </button>      
    </li>
  )}
</ol>
...
```

## Mover arriba/abajo
Se definen dos funciones, adentro se verifica que el índice no rebase los límites. Se usa una variable auxiliar para copiar los contenidos de la lista de tareas usando el operador _spread_ `...`. Se intercambia el elemento con otro de arriba o abajo segun sea el caso, la variable auxiliar es útil para esto. Se actualiza la lista de tareas usando la variable auxiliar

Estas funciones se usan en dos botones al lado del botón `Add`

```jsx {title="ToDoList.jsx"}
...
function moveTaskUp(index){    
  
  if(index > 0){
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index - 1]] = 
    [updatedTasks[index - 1], updatedTasks[index]];
    setTasks(updatedTasks);
  }
}

function moveTaskDown(index){
  if(index < tasks.length - 1){
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index + 1]] = 
    [updatedTasks[index + 1], updatedTasks[index]];
    setTasks(updatedTasks);
  }
}
...
<button 
  className='move-button' 
  onClick={() => moveTaskUp(index)}>
    ☝
  </button>
<button 
  className='move-button'
  onClick={() => moveTaskDown(index)}>
    👇
</button>
...
```

## Código completo
{{% expand title="Expandir..." %}}
```jsx {title="ToDoList.jsx"}
import React, { useState } from 'react'

function ToDoList() {

  const [tasks, setTasks] = useState(["eat breakfast", "take a shower", "walk the dog"]);
  const [newTask, setNewTask] = useState("");
  
  function handleInputChange(event){
    setNewTask(event.target.value);
  }
  
  function addTask(){    
    if(newTask.trim() !== ""){
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index){    
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index){    
    
    if(index > 0){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index-1]] = 
      [updatedTasks[index-1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index){
    if(index < tasks.length - 1){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index+1]] = 
      [updatedTasks[index+1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return(
    <div className='to-do-list'>
      <h1>To-do list</h1>
      <div>
        <input 
          type="text" 
          placeholder='Enter a task...'
          value={newTask} 
          onChange={handleInputChange} />
        <button 
          className="add-button" 
          onClick={addTask}>
          Add
          </button>
      </div>

      <ol>        
        {tasks.map((task, index)=>
          <li key={index}>
            <span className="text">{task}</span>
            <button 
              className='delete-button'
              onClick={()=> deleteTask(index)}>
                Delete
            </button>
            <button 
              className='move-button' 
              onClick={() => moveTaskUp(index)}>
                ☝
              </button>
            <button 
              className='move-button'
              onClick={() => moveTaskDown(index)}>
                👇
            </button>
          </li>
        )}
      </ol>
    </div>
  )
}
export default ToDoList
```
{{% /expand %}}