// import { Axios } from "axios";
// import React, { useState } from "react";
// import Cookies from "universal-cookie";

// const Login = () => {
//   const [username, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const cookies = new Cookies();

//   const login = () => {
//     Axios.post("http://localhost:5000/login", { username, password }).then(
//       (res) => {
//         const { token, userId, firstName, lastName, username, hashedPassword } =
//           res.data;
//         cookies.set("token", token);
//         cookies.set("userId", userId);
//         cookies.set("firstName", firstName);
//         cookies.set("lastName", lastName);
//         cookies.set("username", username);
//         cookies.set("hashedPassword", hashedPassword);
//       }
//     );
//   };
//   return (
//     <div className="login">
//       <label>Login</label>

//       <input
//         placeholder="Username"
//         onChange={(event) => {
//           setUserName(event.target.value);
//         }}
//       />
//       <input
//         placeholder="Password"
//         type="password"
//         onChange={(event) => {
//           setPassword(event.target.value);
//         }}
//       />
//       <button onClick={login}>Login</button>
//     </div>
//   );
// };

// export default Login;

import axios from "axios"; // Correct import for axios
import React, { useState } from "react";
import Cookies from "universal-cookie";

const Login = (setIsAuth) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const cookies = new Cookies();

  const login = () => {
    axios
      .post("http://localhost:5000/login", { username, password })
      .then((res) => {
        const { token, userId, firstName, lastName, username, hashedPassword } =
          res.data;
        cookies.set("token", token);
        cookies.set("userId", userId);
        cookies.set("firstName", firstName);
        cookies.set("lastName", lastName);
        cookies.set("username", username);
        cookies.set("hashedPassword", hashedPassword);
        setIsAuth(true);
      });
  };

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
