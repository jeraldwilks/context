import React from "react";

const Footer = ({ user, setUser }) => {
  return (
    <div style={{ width: "100%", backgroundColor: "grey" }}>
      Hello {user} <button>Logout</button>
    </div>
  );
};

export default Footer;
