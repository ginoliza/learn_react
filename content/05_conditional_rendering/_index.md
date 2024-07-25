+++
archetype = "chapter"
title = "5. Renderizado condicional"
weight = 5
+++

Dependiendo de alguna circunstancia se puede mostrar distinto contenido. 

Ej - si un usuario ha iniciado sesión mostrar un mensaje de bienvenida en verde, caso contrario pedir que inicie sesión en rojo.

```jsx {title="UserGreetings.jsx"}
function UserGreetings(props) {
  if (props.isLoggedIn) {
    return <h1 className="loggedIn">Bienvenido {props.username}</h1>;
  } else {
    return (
      <h1 className="notLoggedIn">Inicie sesión para continuar por favor</h1>
    );
  }
}

export default UserGreetings;
```

```jsx {title="App.jsx"}
import UserGreetings from "./UserGreetings"
...
<UserGreetings isLoggedIn={false} username="gino"/>
...
```

```css {title="index.css"}
.loggedIn{
  font-family: Arial, Helvetica, sans-serif;
  background-color: greenyellow;  
}

.notLoggedIn{
  font-family: Arial, Helvetica, sans-serif;
  background-color: red;
  color: white;
}
```

## Operador ternario (forma corta)
Es posible hacer el `if` más corto
```jsx {title="UserGreetings.jsx" hl_lines="3-5"}
...
return (
    props.isLoggedIn ?    
    <h1 className="loggedIn">Bienvenido {props.username}</h1> : 
    <h1 className="notLoggedIn">Inicie sesión para continuar por favor</h1>)
...
```

## Asignar elementos HTML a variables JS
```jsx {title="UserGreetings.jsx" hl_lines="2-3"}
function UserGreetings(props) {
  const welcomeMessage = <h1 className="loggedIn">Bienvenido {props.username}</h1>
  const loginPrompt = <h1 className="notLoggedIn">Inicie sesión para continuar por favor</h1>  
  return props.isLoggedIn ? welcomeMessage : loginPrompt;
}
...
```

Es buena práctica hacer _typechecking_ siempre que se reciben `props`. Así al menos tendremos un _warning_ por consola