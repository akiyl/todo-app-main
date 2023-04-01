import React from "react";
const createTodo = (data) => {
  return (
    <label className="todo-list-item">
      <li className="todo-list-item">{data}</li>
    </label>
  );
};
export default createTodo;
