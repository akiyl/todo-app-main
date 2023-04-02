import React, { createElement } from "react";
import { createRoot } from "react-dom/client";
import { ReactDOM } from "react";
import createTodo from "./element";

import { useState } from "react";

const App = () => {
  const [message, setMessage] = useState([""]);
  console.log(message);
  const [clicked, setClicked] = useState(false);
  const add = () => {
    localStorage.setItem("data", message);
    console.log(message);
  };
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

            setClicked(true);
          }}
        >
          <label className="form-label" htmlFor="/" For="text">
            <input
              className="form-input"
              type="text"
              placeholder="Create a new todo...."
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
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
                  {localStorage.getItem("data")}
                </li>
              </label>
            ) : null}

            <label htmlFor="/">
              <li className="todo-list-item"></li>
            </label>
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
