import React from "react";
import TodoItem  from "./TodoItem";


export default function TaskList({
    todos,
    handleUpdateTodo,
    handleDeleteTodo,
    handleCompleteTodo,
  }) {

    return (
      <ul>
        {/* Mapeo de la lista de tareas para generar los elementos de TodoItem */}
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
