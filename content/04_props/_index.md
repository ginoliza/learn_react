+++
archetype = "chapter"
title = "4. Props"
weight = 4
+++

Propiedades de sólo lectura compartidas entre componentes. Un componente padre puede enviar datos a un componente hijo. Cuando se use un componente, se pueden enviar valores `key value`

## props
El componente `App.jsx` envía `name`, `age` y `isStudent` a `Student.jsx`, que accede a ellos mediante el objeto `props` (puede ser cualquier nombre)

```jsx {title="App.jsx"}
...
return (
    <>
        <Student name="Gino" age={30} isStudent={false}/>
        <Student name="Josue" age={29} isStudent={true}/>
    </>
)
...
```

```jsx {title="Student.jsx"}
function Student(props){
    return (
        <div className="student">
            <p>Nombre: {props.name}</p>
            <p>Edad: {props.age}</p>
            <p>Estudiante: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}

export default Student
```
Para mejor visualización:
```css {title="index.css"}
.student {
  border: 1px solid grey;
  margin: 10px 0px;
}

.student p{
  margin: auto;
}
```

## propTypes
Esta propiedad realiza _typechecking_ de los valores. Importar `PropTypes` y usar con `.propTypes`. Usar afuera de la función
```jsx {title="Student.jsx"}
import PropTypes from 'prop-types';
...
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}
...
```
```jsx {title="App.jsx"}
...
<Student name="Gino" age="30" isStudent={false}/>
...
```
Mediante la consola se visualizará un _Warning_ debido al string `age="30"`, que deberia ser un número `age={30}`

## defaultProps
Los valores pueden ser predeterminados en caso no se pase nada. Usar afuera de la función

```jsx {title="Student.jsx"}
...
Student.defaultProps = {
    name: "Invitado",
    age: 0,
    isStudent: false
}
...
```

```jsx {title="App.jsx"}
<>
    <Student name="Gino" age={30} isStudent={false}/>
    <Student name="Josue" age={29} isStudent={true}/>
    <Student />
</>
```
El último componente usado usará los valores predeterminados 