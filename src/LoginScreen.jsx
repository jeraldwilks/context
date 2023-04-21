import React from "react";
import { useState, useContext } from "react";
import { UserContext } from "./context/UserContext";

const LoginScreen = () => {
  const { setUser } = useContext(UserContext);
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
