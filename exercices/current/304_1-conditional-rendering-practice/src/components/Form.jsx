import React from "react";

function Form(props) {
  var userIsRegistered = props.userIsRegistered;
  
  return (    
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!userIsRegistered && <input type="password" placeholder="Confirm Password" />}
      <button type="submit">{userIsRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
