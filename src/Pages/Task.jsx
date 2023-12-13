import React from 'react';
import Header from './../Components/Header';
import TaskList from './../Components/TaskList';
import TodoAdd from './../Components/todoAdd';
import useTodo from './../Hooks/useTodo';

export default function Tasks() {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  } = useTodo();

  return (
    <div className='Tareas'>

      {/* Encabezado */}
       <Header />

       <div className='counter-todos'>

        {/* Contador de todas las tareas */}
        <h3>
          N° Tareas: <span>{todosCount}</span>
        </h3>

        {/* Contador de tareas pendientes */}
        <h3>
          N° Pendientes: <span>{pendingTodosCount}</span>
        </h3>
       </div>

       <div className='add-tarea'>
        <h3>Agregar Tarea</h3>
        {/* Componente para agregar una nueva tarea */}
        <TodoAdd handleNewTodo={handleNewTodo} />
       </div>

       {/* Lista de tareas */}
       <TaskList 
       todos={todos}
       handleUpdateTodo={handleUpdateTodo}
       handleDeleteTodo={handleDeleteTodo}
       handleCompleteTodo={handleCompleteTodo}
       />
    </div>
  )
}
