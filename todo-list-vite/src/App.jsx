import React, { createElement } from "react";
import { createRoot } from "react-dom/client";
import { ReactDOM } from "react";
import createTodo from "./element";

import { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState([""]);
  console.log(todo);
  const [clicked, setClicked] = useState(false);
  const todoStorage = JSON.parse(localStorage.getItem("todoStorage")) || [];
  return (
    <div className="app">
      <header className="header"></header>
      <main className="Main-content">
        <header className="Main">Todo</header>
        <form
          name="form1"
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            if (todo.id >= 0) {
              todoStorage.push(todo);

              localStorage.setItem("todoStorage", JSON.stringify(todoStorage));
            }

            setClicked(true);
          }}
        >
          <label className="form-label" htmlFor="/" For="text">
            <input
              className="form-input"
              type="text"
              placeholder="Create a new todo...."
              onChange={(e) => {
                setTodo(e.target.value);
              }}
              value={todo}
            />
          </label>
        </form>
        <div className="todo-wrapup">
          <ul className="todo-list">
            <label htmlFor="/">
              <li className="todo-list-item-default"> Enter your todo list</li>
            </label>

            {clicked ? (
              <label htmlFor="/">
                <li className="todo-list-item">
                  {localStorage.getItem("todo")}
                </li>
              </label>
            ) : null}
          </ul>
          <div className="todo-footer">
            <span className="todo-total"> items left</span>
            <div className="todo-tab">
              <button className="todo-button-items">All</button>
              <button className="todo-button-items">Active</button>
              <button className="todo-button-items">Completed</button>
            </div>
            <button className="clear-todo">Clear Complete</button>
          </div>
        </div>
      </main>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
export default App;
