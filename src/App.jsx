import { useState } from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import LoginScreen from "./LoginScreen";

function App() {
  const [user, setUser] = useState();

  return (
    <div
      style={{
        backgroundColor: "darkblue",
        color: "white",
        width: "100%",
        height: "100%",
        position: "fixed",
        left: 0,
        top: 0,
        display: "flex",
        justifyContent: "grow",
        alightItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ flexGrow: 1 }}>
        {user == null ? (
          <LoginScreen setUser={setUser} />
        ) : (
          <MainPage user={user} />
        )}
      </div>
      <Footer user={user} setUser={setUser} />
    </div>
  );
}

export default App;
