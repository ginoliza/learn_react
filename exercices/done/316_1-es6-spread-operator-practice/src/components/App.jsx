import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");  
  const [items, setItems] = useState([]);

  function handleChange(event){
    setItem(event.target.value);
  }

  function handleClick(){
    setItems((prevValue)=> {
      return [...prevValue, item]
    })
    setItem("");
  }

  const listItems = items.map((item, index) => <li key={index}>{item}</li> )

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={item}/>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems}
        </ul>
      </div>
    </div>
  );
}

export default App;
