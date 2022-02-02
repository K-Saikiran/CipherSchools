import "./App.css";
import React, { useState } from "react";
import TodoList from "./components/ToDoList";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const changeHandler = (e) => {
    setTask(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newTodos = [...todos, task];
    setTodos(newTodos);
    setTask("");
  };
  const deleteHandler = (indexValue) => {
    const newTodos = todos.filter((todo, index) => index !== indexValue);
    setTodos(newTodos);
  };

  return (
    <div>
      <div className="card" className="center">
        <div className="card-body">
          <h5 className="card-title">Todo List</h5>
          <form onSubmit={submitHandler}>
            <input
              size="30"
              type="text"
              name="task"
              value={task}
              onChange={changeHandler}
            />{" "}
            &nbsp;&nbsp;
            <input type="submit" value="Add" name="Add" />
          </form>
          <TodoList todolist={todos} deleteHandler={deleteHandler} />
        </div>
      </div>
    </div>
  );
};

export default App;
