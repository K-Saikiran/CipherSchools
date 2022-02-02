import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const TodoList = ({ todolist, deleteHandler }) => {
  return (
    <div>
      {todolist.map((todo, index) => (
        <div key={index}>
          <h5>
            {todo} &nbsp;{" "}
            <button
              className="btn btn-danger"
              onClick={() => deleteHandler(index)}
            >
              Delete
            </button>
          </h5>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
