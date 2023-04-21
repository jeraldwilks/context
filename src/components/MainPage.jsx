import React from "react";
import WelcomePage from "./WelcomePage";

const MainPage = ({ user }) => {
  return (
    <div>
      <WelcomePage theUser={user} />
      This is your main application. You're logged in if you can see it.
    </div>
  );
};

export default MainPage;
