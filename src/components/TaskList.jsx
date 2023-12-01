import React from "react";
import Task from "./Task";
function TaskList({ todos, toggleTodo }) {
    return (
      <ul>
        {todos.map((todo) => (
          <Task key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    );
  }
  
  export default TaskList;
  
  

