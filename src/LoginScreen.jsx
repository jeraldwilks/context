import React from "react";
import { useState } from "react";

const LoginScreen = ({ setUser }) => {
  const [userName, setUserName] = useState("");
  function loginUser() {
    setUser(userName);
  }
  return (
    <div>
      Username:{" "}
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      ></input>
      <button onClick={loginUser}>Login</button>
    </div>
  );
};

export default LoginScreen;
