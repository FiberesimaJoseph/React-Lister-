import React, { useState } from "react";
import "./App.css";
import InputTextArea from "./component/InputTextArea";

const App = () => {
  const [item, setItem] = useState(0);
  return (
    <div className="container">
      <div className="heading">
        <h1>To Do List{item}</h1>
        <button></button>
      </div>
      <InputTextArea />
    </div>
  );
};

export default App;
