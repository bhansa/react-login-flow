import React from "react";
import ReactDOM from "react-dom";
import { LoginPage } from "../LoginPage";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <LoginPage />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
