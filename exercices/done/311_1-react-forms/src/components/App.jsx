import React, { useState } from "react";

function App() {
  
  const [name, setName] = useState("gino");
  const [heading, setHeading] = useState(name)

  function handleChange(){
    setName(event.target.value);
  }

  function handleSubmitClick(){    
    setHeading(name);
    // se usa para prevenir que se recargue la pagina (comportamiento por defecto)
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      {/* onsubmit del form es lo mismo que el onclick del button de abajo */}
      <form onSubmit={handleSubmitClick}>
        {/* name sigue cambiando cada vez, pero ya no se actualiza sobre cambio */}
        <input type="text" placeholder="What's your name?" onChange={handleChange}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
