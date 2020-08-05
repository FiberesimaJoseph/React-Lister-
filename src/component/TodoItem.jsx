import React from "react";

const TodoItem = (props) => {
  return (
    <div>
      <li>{props.text}</li>
    </div>
  );
};

export default TodoItem;
