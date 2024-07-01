import React, { useState } from "react";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {};
  return (
    <div className="login">
      <label>Login</label>

      <input
        placeholder="Username"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
