import React, { useState } from "react";

const InputTextArea = (props) => {
  const [inputText, setInputText] = useState("");
  return (
    <div className="form">
      <input type="text"></input>
      <button
        onClick={() => {
          props.onAdd();
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
};

export default InputTextArea;
