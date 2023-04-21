import React from "react";

const Footer = ({ user, setUser }) => {
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
