import React from "react";
import CityInput from "./components/CityInput";
import logo from "./icons/logo.svg";
import "./style/App.scss";

function App() {
  return (
    <div id="App">
      <CityInput />
      <img className="logo" src={logo} alt="" />
    </div>
  );
}

export default App;
