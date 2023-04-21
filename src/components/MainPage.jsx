import React from "react";
import WelcomePage from "./WelcomePage";
import { UserContext } from "../context/UserContext";

const MainPage = () => {
  return (
    <div>
      <WelcomePage />
      This is your main application. You're logged in if you can see it.
    </div>
  );
};

export default MainPage;
