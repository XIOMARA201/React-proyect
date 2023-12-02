import React from "react";
import TodoItem  from "./todoItem";


export default function TaskList({
    todos,
    handleUpdateTodo,
    handleDeleteTodo,
    handleCompleteTodo,
  }) {

    return (
      <ul>
      {todos.map(todo =>(
        <TodoItem
        key={todo.id}
        todo={todo}
        handleUpdateTodo={handleUpdateTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo} 
        />
      ))}
    </ul>
    )
  }

