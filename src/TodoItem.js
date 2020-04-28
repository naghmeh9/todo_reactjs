import React from "react";

function TodoItem(props) {
  const compeletedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through",
  };
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.compeleted}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p style={props.item.completed ? compeletedStyle : null}>
        {props.item.text}
      </p>
    </div>
  );
}

export default TodoItem;
