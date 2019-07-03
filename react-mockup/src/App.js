import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Directory from "./components/Directory";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <h2>Home</h2>
      </div>
      <div className="container-dir">
        <Directory />
      </div>
    </div>
  );
}

export default App;
