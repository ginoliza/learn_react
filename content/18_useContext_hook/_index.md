+++
archetype = "chapter"
title = "18. Hook useContext"
weight = 18
+++

Hook de react que permite compartir valores entre múltiples niveles de componentes sin tener que pasar `props` a traves de cada nivel

## Usando props 
Se define una variable con estado `userName` y se pasa desde A hasta D como argumento `user` al renderizar el siguiente elemento. Se accede a ella en los elementos hijos con `props.user`

{{% expand title="Expandir CSS..." %}}
```css {title="index.css"}
.box {
    border: 1px solid black;
    margin: 10px;
}
```
{{% /expand %}}

```jsx {title="ComponentA.jsx" hl_lines="1-2 5 9-10"}
import { useState, useEffect } from "react";
import ComponentB from "./ComponentB";

function ComponentA() {
  const [userName, setUserName] = useState("gino");
  return (
    <div className="box">
      <h1>Component A</h1>
      <p>Hello {userName} from A</p>
      <ComponentB user={userName}/>
    </div>
  );
}
export default ComponentA;
```

```jsx {title="ComponentB.jsx" hl_lines="1 3 8"}
import ComponentC from "./ComponentC"

function ComponentB(props){
  return(
    <div className="box">
      <h1>Component B</h1>
      
      <ComponentC user={props.user}/>
    </div>
  )
}

export default ComponentB
```

```jsx {title="ComponentC.jsx" hl_lines="3 8"}
import ComponentD from "./ComponentD"

function ComponentC(props){
  return(
    <div className="box">
      <h1>Component C</h1>
      
      <ComponentD user={props.user}/>
    </div>
  )
}

export default ComponentC
```

```jsx {title="ComponentD.jsx" hl_lines="1 5"}
function ComponentD(props){
  return(
    <div className="box">
      <h1>Component D</h1>
      <p>Hello {props.user} from D</p>
    </div>
  )
}

export default ComponentD
```
Pasar una variable desde arriba hasta el centro se llama _**prop drilling**_, que es tedioso

## useContext
Se tienen dos componentes
1. Proveedor: 
    1. `import {createContext} from 'react'`
    1. `export const MyContext = createContext();` afuera de la función principal
    1. Englobar el elemento al que se quiere pasar la variable y especificar dentro de la propiedad `value={variable}` en `MyContext.Provider`
        ```jsx
        <UserContext.Provider value={userName}>
          <Child />
        </MyContext.Provider>
        ```
2. Consumidor
    1. `import React, {useContext} from "react";`
    1. `import { MyContext } from "./ProviderComponent.jsx";`
    1. `const userName = useContext(MyContext);`

```jsx {title="ComponentA.jsx" hl_lines="1 3 12-14"}
import { useState, createContext } from "react";

export const UserContext = createContext();

function ComponentA() {
  const [userName, setUserName] = useState("gino");
  return (
    <div className="box">
      <h1>Component A</h1>
      <p>Hello {userName} from A</p>

      <UserContext.Provider value={userName}>
        <ComponentB />
      </UserContext.Provider>
      
    </div>
  );
}
export default ComponentA;
```

```jsx {title="ComponentD.jsx" hl_lines="1-2 6 11"}
import React, {useContext} from "react";
import { UserContext } from "./ComponentA.jsx";

function ComponentD(){

  const userName = useContext(UserContext);

  return(
    <div className="box">
      <h1>Component D</h1>
      <p>Hello {userName} from D</p>
    </div>
  )
}

export default ComponentD
```

## Pasar múltiples variables
Desde el componente **proveedor** especificar `value` con dobles corchetes `[[]]`
```jsx
<MyContext.Provider value={{variable1, variable2}}>
  <ComponenteHijo>
<MyContext.Provider >
```

Y desde el componente **consumidor** 
```jsx
const { variable1, variable2 } = useContext(MyContext);
```