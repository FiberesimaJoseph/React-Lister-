import React, { useState } from "react";
import "./App.css";
import InputTextArea from "./component/InputTextArea";

const App = () => {
  const [item, setItem] = useState([]);

  const addItems = (inputText) => {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To Do List</h1>
      </div>
      <InputTextArea />
    </div>
  );
};

export default App;
