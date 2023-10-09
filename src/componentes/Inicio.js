import React from "react";
import "../stylesheets/Inicio.css";

function Inicio() {
  return (
    <div className="principal-container">
        
      <div className="logo-container">
        <img
          className="react-icon"
          src={require("../profiles/logo192.png")} alt="React-logo"
        ></img>
      </div>
      <div className="text-container">
        <div className="react-container">
          <h2>React</h2>
        </div>
        <div className="subtitle-container">
          <h3>The library for web and native user interfaces</h3>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
