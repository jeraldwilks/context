import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const WelcomePage = () => {
  const { user } = useContext(UserContext);
  return <div>Welcome {user}</div>;
};

export default WelcomePage;
