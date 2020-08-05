import React, { useState } from "react";
import "./App.css";
import InputTextArea from "./component/InputTextArea";
import TodoItem from "./component/TodoItem";

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
      <div>
        <ul>
          {item.map((item, index) => (
            <TodoItem key={index} id={index} text={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
