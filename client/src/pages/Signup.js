import React, { useState } from "react";
import API from "../utils/API"

function Register() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  
  const register = () => {
    console.log(registerUsername)
    console.log(registerPassword)
      API.register({
        username: registerUsername,
        password: registerPassword,
      }).then((res) => console.log(res));
    
  };

  return (
    <div className="App">
      <div>
        <h1>Register</h1>
        <input
          placeholder="username"
          onChange={(e) => setRegisterUsername(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button onClick={register}>Submit</button>
      </div>
    </div>
  );
}

export default Register;
