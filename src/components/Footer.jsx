import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Footer = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "grey",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {user == null ? (
        <>Logged Out</>
      ) : (
        <>
          Hello {user} <button onClick={() => setUser(null)}>Logout</button>
        </>
      )}
    </div>
  );
};

export default Footer;
