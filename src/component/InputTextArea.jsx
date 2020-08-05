import React, { useState } from "react";

const InputTextArea = (props) => {
  const [inputText, setInputText] = useState("");
  const HandleChange = (event) => {
    const newValue = event.target.value;
    setInputText(newValue);
  };
  return (
    <div className="form">
      <input type="text" onChange={HandleChange} value={inputText} />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
};

export default InputTextArea;
