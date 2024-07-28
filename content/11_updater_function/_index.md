+++
archetype = "chapter"
title = "11. Función updater"
weight = 11
+++

Función flecha pasada como argumento al `setState()`, ej - `setYear(función flecha)`. Permite actualizaciones seguras basadas en el **estado previo**. Usado con múltiples actualizaciones de estado y funciones asíncronas. Es buena práctica usar funciones updater

Ej - se usa el [Ejercicio 2 del Cap. 8. Hook useState](../08_useState_hook/_index.md#ejercicio-2)

Si se modifica `increment` para intentar incrementar el contador 3 veces de esta forma: 
```jsx {title="Component.jsx"}
...
const increment = () => {
  setCounter(counter + 1)
  setCounter(counter + 1)
  setCounter(counter + 1)
}
...
```
No funcionará ya que realmente lo que se está haciendo es usar el estado **actual** para calcular el estado **siguiente**. Las funciones `setState` no inician una actualización, React las junta todas por motivos de rendimiento. El estado **siguiente** se convierte en el estado **actual** despues de una actualización. 

Aquí realmente se está poniendo `counter` en 0 tres veces y luego sumando 1, actualizandolo a 1 tres veces. 

## Función updater

```jsx {title="Component.jsx"}
...
const increment = () => {
  setCounter(counter => counter + 1)
  setCounter(counter => counter + 1)
  setCounter(counter => counter + 1)
}
...
```

Esta forma usa el estado **pendiente** para calcular el estado **siguiente**, React pone las funciones _updater_ en una cola. Durante el siguiente renderizado las llama en order.

### Convención de nombre
Es buena idea nombrar la variable de la función updater algo distinto a la variable con estado original, ej - para `counter` se usaría `c` o `prevCounter`

```jsx {title="Component.jsx"}
...
const increment = () => {
  setCounter(prevCounter => prevCounter + 1)
  setCounter(prevCounter => prevCounter + 1)
  setCounter(prevCounter => prevCounter + 1)
}
...
```