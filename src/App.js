import React, { useState } from "react";
import "./App.css";
import InputTextArea from "./component/InputTextArea";

const App = () => {
  const [item, setItems] = useState([]);

  const AddItems = (inputText) => {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To Do List</h1>
      </div>
      <InputTextArea onAdd={AddItems} />
      {item.map((item) => console.log(item))}
    </div>
  );
};

export default App;
