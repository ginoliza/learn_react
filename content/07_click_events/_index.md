+++
archetype = "chapter"
title = "7. Eventos Click"
weight = 7
+++

Interacción cuando se hace click en algún elemento. Se puede responder a los clicks pasando un callback al _event handler_ `onClick`

## onClick
Muchos elementos HTML tienen un _event handler_ `onClick`, se necesita pasarle una función (interna en este caso)
```jsx {title="Button.jsx"}
function Button(){
  const handleClick = () => {
    console.log("clicked from handleClick");
  };
  return(
    <button onClick={handleClick}>Button</button>
  )
}
export default Button
```

```jsx {title="App.jsx"}
import Button from "./Button";

function App() {
  return (
    <>
      <Button />
    </>
  );
}
export default App;
```

## Con parámetros/argumentos
```jsx {title="Button.jsx"}
const handleClick = (name) => {
  console.log(`${name} clicked from handleClick`);
};

return(
  <button onClick={handleClick("gino")}>Button</button>
)
...
```
Al agregar paréntesis despues de un callback se invoca a la función inmediatamente (sin hacer click); agregar una función callback `() =>` adelante

```jsx {title="Button.jsx"}
...
<button onClick={() => handleClick("gino")}>Button</button>
...
```

### Ejercicio
Crear una variable que se pueda clickear e imprima por consola hasta 3 veces. Luego imprimir `No clickees mas!`. Adicionalmente 
```jsx {title="Button.jsx"}
...
const handleClick = (name) => {
  if(clicked < 3){
    clicked++;
    console.log(`${name} hizo click ${clicked} veces`);
  }else{
    console.log(`deja de hacer click!`);
  }
};
...
```

## Parámetro event e
Con eventos click, se provee automáticamente un argumento `event` (`e` de forma corta), un objeto que describe el evento que ocurre. Se pasa en la función callback


```jsx {title="Button.jsx"}
...
const handleClick = (e) => {
  console.log(e);
};

return(
  <button onClick={(e) => handleClick(e)}>Button</button>
)
...
```
Al desplegar mediante consola se puede observar toda la información del evento

### Ejercicio 1
Cambiar el texto del botón desde el `target`

```jsx {title="Button.jsx" hl_lines=""}
...
const handleClick = (e) => {
  e.target.textContent = "Button2";
};

return(
  <button onClick={(e) => handleClick(e)}>Button</button>
)
...
```

### Ejercicio 2
Crear un componente Imagen que muestre una imagen en pantalla y al hacer doble click se oculte

```jsx {title="Image.jsx"}
const ocultar = (e) => {
  e.target.style.display = "none"
}

return(
  <img onDoubleClick={(e) => ocultar(e)} src="https://via.placeholder.com/200" alt="200" />
)
```