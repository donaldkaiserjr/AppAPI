import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        onChange={() => console.log("Changed!")}
        checked={props.item.completed}
      />
      <div>{props.item.text}</div>
      <hr />
    </div>
  );
}

export default TodoItem;
