+++
archetype = "chapter"
title = "1. React"
weight = 1
+++

## React
Librería de JS, no framework usado para armar y ordenar interfaces de usuario para aplicaciones web
- Componentes: seccion de código individual que funcionan como un bloque reusable
- JavaScript XML (JSX): extension de sintaxis de JS, permite escribir codigo parecido a HTML dentro de archivos JS
- Virtual DOM: version ligera del DOM real, sólo aplica cambios especificos sin refrescar la página entera, esto reduce sobrecarga de rendimiento de renderizado

## Pre-requisitos
- JS:
    - arrays
    - clases 
    - objetos
    - funciones arrow
- HTML
- CSS

## Instalación
1. NodeJS
1. Editor de texto (recomendado VSCode)

## Crear proyecto
1. Crear carpeta de proyecto
1. `npm create vite@latest`
    - Seleccionar React
    - Seleccionar JavaScript
1. Correr comandos
    - `cd <proyecto>`
    - `npm install`
    - `npm run dev`
1. Ir a la dirección y puerto

## Estructura de proyecto
- `node_modules` son módulos npm instalados
- `public` contiene recursos públicos (imágenes, videos, etc). No se empaquetan en el output final, típicamente están disponibles mediante una URL
- `src` 
    - `assets` estos archivos SÍ se empaquetan en el output final
    - `main.jsx` archivo `jsx` principal 
    - `index.css` archivo `css` principal
    - `App.jsx` componente que se importa en `main.jsx`
    - `App.css` archivo `css` para `App.jsx`
- `index.html` punto de entrada principal
    - `div id=root`
    - `script src="/src/main"` hacia el `jsx` principal
- `package.json`: contiene metada del proyecto, está estructurado en valores `key value`
    - `name`: nombre del proyecto
    - `version`: número de versión
    - `build`: que build se usa
    - `react` versión de react
    - `react-dom` version de react dom

## Crear primer componente de React
El nombre de la función de un componente debe empezar con mayúscula. Su función sólo puede retornar un elemento, si se tiene múltiples se puede englobar en un **fragmento** `<></>`. Dentro del return de la función se puede escribir JS dentro de llaves `{ }`, sin embargo afuera del `return` se puede escribir nativamente.

A partir del ejemplo:
- Eliminar todo en `App.jsx`, sólo dejar la función y el export
- `<h1>hola</h1>` dentro del `return`
- Eliminar `App.css`
- Crear un nuevo componente `Header.jsx`, crear una función y el export 
- Importar `Header.jsx` en `App.jsx`
- Agregar un `nav` en `Header.jsx`.
- Crear `Footer.jsx`
- Agregar la función y el export
- Importar `Footer.jsx` en `App.jsx` -> error
- Englobar `Footer` y `Header` en un fragmento
- Crear `Food.jsx`
    - Crear variables `food1`, `food2`
- Incluir `Food.jsx` en `App.jsx`
    - Imprimir `food1` y `food2` (en mayúsculas)

```jsx {title="App.jsx"}
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"

function App() {
  return (
    <>
      <Header/>
      <Food/>
      <Footer/>
    </>
  )
}

export default App
```

```jsx {title="Header.jsx"}
function Header() {
  return (
    <>
      <h1>My website</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
}

export default Header
```

```jsx {title="Footer.jsx"}
function Footer(){
  return(
      <p>&copy; {new Date().getFullYear()} Your website name</p>
  )
}

export default Footer
```

```jsx {title="Food.jsx"}
function Food() {
  const food1 = "Apple";
  const food2 = "Orange";
  const food3 = "Banana";
  return (
    <ul>
      <li>{food1}</li>
      <li>{food2.toLowerCase()}</li>
      <li>{food3.toUpperCase()}</li>
    </ul>
  );
}

export default Food
```