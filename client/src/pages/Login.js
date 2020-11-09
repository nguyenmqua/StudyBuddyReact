import React, { useState } from "react";
import API from "../utils/API"

function Login() {
  const [loginUsername, setloginUsername] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  
  const loginButton = () => {
    console.log(loginUsername)
    console.log(loginPassword)
      API.login({
        username: loginUsername,
        password: loginPassword,
      }).then((res) => console.log(res));
    
  };

  return (
    <div className="App">
      <div>
        <h1>Login</h1>
        <input
          placeholder="username"
          onChange={(e) => setloginUsername(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setloginPassword(e.target.value)}
        />
        <button onClick={loginButton}>Login</button>
      </div>
    </div>
  );
}

export default Login;
