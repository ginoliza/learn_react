+++
archetype = "chapter"
title = "3. CSS"
weight = 3
+++

Sin incluir frameworks o preprocesadores externos

Además de `App.jsx` crear un componente `Button.jsx` que retorne un boton **Click me**, importarlo en `App.jsx`

```jsx {title="Button.jsx"}
function Button(){
	return (
		<button className="button">Click me</button>
	);
}

export default Button;
```
## Externo (global)
Estilizar desde `index.css` el `className` especificado en `Button.jsx`
```css {title="index.css"}
.button{
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
```
Bueno para proyectos pequeños
## Modulos
Crear un directorio para el componente: `Button` y mover `Button.jsx`. Crear `Button.module.css`, importarlo desde `Button.jsx` y en `className` especificar `{styles.button}`

```sh
.
├── App.jsx
├── Button
│   ├── Button.jsx
│   └── Button.module.css
├── Card.jsx
├── assets
│   ├── profile.jpg
│   └── react.svg
├── index.css
└── main.jsx
```

```jsx {title="Button.jsx"}
import styles from "./Button.module.css"
...
		<button className={styles.button}>Click me</button>
...
```

```jsx {title="App.jsx"}
import Button from './Button/Button.jsx'
...
```
Evita conflictos con los nombres ya que en el resultado final se crea un `class` único para el componente con un algoritmo de hashing

## Inline
Dentro de la función del componente, especificar una variable `styles` (puede tener cualquier nombre) y usarla dentro del `return` en `style`. Tener en cuenta que las propiedades CSS deben estar en _camel casing_, los valores deben ser **strings** y se debe separar por comas (,)
```jsx {title="Button.jsx"}
function Button(){
    const styles = {
    	backgroundColor: "blue",
    	color: "white",
    	padding: "10px 20px",
    	borderRadius: "5px",
    	border: "none",
    	cursor: "pointer", 
    }
    return (
        <button style={styles}>Click me</button>
    );
}

export default Button;
```
Es conveniente y facil de entender, evita conflictos de estilos globales ya que no se trabaja con `className`, es bueno usarlo con componentes que tengan estilizado mínimo como botones. 

Puede ser menos mantenible en proyectos grandes, reduce la legibilidad, no es bueno para `responsive`.