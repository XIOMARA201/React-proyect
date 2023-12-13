import React from "react";
import TodoItem  from "./TodoItem";
import { Button } from "@chakra-ui/react";


export default function TaskList({
    todos,
    handleUpdateTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleDeleteAllTodos,
    }) {

    return (
      <div>

      {/* Botón para borrar todas las tareas */}
       <Button 
       mb={2}
       onClick={handleDeleteAllTodos} 
       className="boton" 
       type='submit'>
        <i className="fa-solid fa-trash-can"></i>
       </Button>

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

    </div>
    )
  }
