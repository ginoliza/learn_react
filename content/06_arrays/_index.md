+++
archetype = "chapter"
title = "6. Arrays"
weight = 6
+++

Definir un array (de strings en este caso) para ser usado dentro del `return`

```jsx {title="List.jsx" hl_lines="3-7 11"}
function List(){
    const fruits = [
        "apple",
        "orange",
        "banana",
        "coconut",
        "pineapple"
    ]

    return(
        <h1>{fruits}</h1>        
    )
}
export default List
```

```jsx {title="App.jsx"}
import List from "./List"
...
    <List/>
...
```
El sitio web muestra todos los elementos de corrido

## map

El método `map` acepta una función _callback_ y la aplica a cada elemento del array, luego retorna un nuevo array. Es muy parecido a un `foreach`

Mapear un elemento `fruit` del array `fruits` a un listado de items

```jsx {title="List.jsx" hl_lines="2 6"}
...
const listItems = fruits.map(fruit => <li>{fruit}</li>)

return(
    <ul>
        {listItems}
    </ul>
)
...
```

## sort
Ordena la lista lexicográficamente, por ende no ordena números

```jsx {title="List.jsx"}
...
fruits.sort()
...
```

## Array de objetos
Ahora se tiene un array de objetos, por lo tanto se accede de forma distinta a sus elementos

```jsx {title="List.jsx" hl_lines="10"}
...
const fruits = [
    {name: "apple", calories: 95},
    {name: "orange", calories: 62},
    {name: "banana", calories: 105},
    {name: "coconut", calories: 283},
    {name: "pineapple", calories: 82}
]

const listItems = fruits.map(fruit => <li>{fruit.name}: {fruit.calories}</li>)

return(
    <ul>
        {listItems}
    </ul>
)
...
```
Al inspeccionar la consola se observa un _warning_. Cada hijo en una lista debe tener un prop único `key`

```jsx {title=""}
...
const fruits = [
    {id: 1, name: "apple", calories: 95},
    {id: 2, name: "orange", calories: 62},
    {id: 3, name: "banana", calories: 105},
    {id: 4, name: "coconut", calories: 283},
    {id: 5, name: "pineapple", calories: 82}
]

const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: {fruit.calories}</li>)
...
```

## Ordenar array de objetos
### Alfabeticamente
```jsx
fruits.sort((a, b) => a.name.localeCompare(b.name));
```
### Alfabeticamente inverso
```jsx
fruits.sort((a, b) => b.name.localeCompare(a.name));
```
### Numérico
```jsx
fruits.sort((a, b) => a.calories - b.calories);
```
### Numérico inverso
```jsx
fruits.sort((a, b) => b.calories - a.calories);
```
## filter
```jsx
...
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
const listItems = lowCalFruits.map(fruit => <li key={fruit.id}>{fruit.name}: {fruit.calories}</li>)
...
```

## Pasar con props
```jsx {title="List.jsx"}
function List(props) {
  // recibir datos
  const itemList = props.items;
  const category = props.category;

  // mapear datos
  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: {item.calories}
    </li>   
  ));

  return (
    <div className="list">
      <h1>{category}</h1>

      <ol>{listItems}</ol>
    </div>
  );
}

export default List
```
Ahora se pueden enviar multiples listas de diferentes tipos y con diferente contenido. No olvidar especificar `key` dentro del mapeo

```jsx {title="App.jsx"}
import List from "./List";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 62 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 283 },
    { id: 5, name: "pineapple", calories: 82 },
  ];

  const vegetables = [
    { id:  6, name: "potato", calories: 161 },
    { id:  7, name: "celery", calories: 6 },
    { id:  8, name: "carrot", calories: 25 },
    { id:  9, name: "broccoli", calories: 31 },
    { id: 10, name: "corn", calories: 143 },
  ];

  return (
    <>
      <List items={fruits} category="Fruits"/>
      <List items={vegetables} category="Vegetables"/>
    </>
  );
}

export default App;
```

```css {title="index.css"}
.list{
  border: 1px solid grey;
  margin: 10px 0px;
}
```
Mostrará dos listas con títulos (`category`) y contenido dinstinto.
## Verificar si existen elementos para mostrar con operador ternario
Si existen elementos imprimir la lista, en caso contrario nada
```jsx {title="App.jsx"}
...
return (
    <>
      {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
      {vegetables.length > 0 ? <List items={vegetables} category="Vegetables" /> : null}
    </>
  );
...
```
### Version mas corta aún
Reemplazar `?` por `&&` y eliminar `:` y todo lo que le sigue
```jsx {title="App.jsx"}
...
{fruits.length > 0 && <List items={fruits} category="Fruits" />}
{vegetables.length > 0 && <List items={vegetables} category="Vegetables" />}
...
```
## defaultProps y propTypes
Afuera de la función y antes del `export`
```jsx {title="List.jsx"}
...
List.defaultProps = {
  items: [],
  category: "Category",
}

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    calories: PropTypes.number
  }))
}
...
```