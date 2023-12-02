import './App.css';
import React from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TodoAdd from './components/TodoAdd';
import useTodo from './Hooks/useTodo';

export default function App() {
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
    <div className='App'>

      {/* Encabezado */}
       <Header />

       <div className='counter-todos'>

        {/* Contador de todas las tareas */}
        <h3>
          N° Tasks: <span>{todosCount}</span>
        </h3>

        {/* Contador de tareas pendientes */}
        <h3>
          N° Pending: <span>{pendingTodosCount}</span>
        </h3>
       </div>

       <div className='add-task'>
        <h3>Add Task</h3>
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
