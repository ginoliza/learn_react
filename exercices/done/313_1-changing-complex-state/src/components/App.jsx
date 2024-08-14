import React, { useState } from "react";

function App() {
  // usando objetos y no variables individuales
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  // --- MÉTODO 1 ---
  // Esto retorna un nuevo objeto sin el key, por eso uno de ellos se borra
  // function handleChange(event) {
  //   if (event.target.name === "fName") {
  //     setFullName({
  //       fName: event.target.value
  //     })
  //   } else if (event.target.name === "lName") {
  //     setFullName({
  //       lName: event.target.value
  //     })
  //   }
  // }

  // --- MÉTODO 2 ---
  function handleChange(event) {
    // deestructurar event.target.value y event.target.name
    const { value, name } = event.target;
  
    // Aquí accedemos al valor previo del objeto al usar la función setter 
    // y se retorna el nuevo objeto recordando el valor previo del otro key
    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
          onChange={handleChange}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
