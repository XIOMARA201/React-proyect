import './App.css';
import React from 'react';
import Header from './components/Header';
import TaskList from "./components/TaskList";
import TodoAdd from './components/todoAdd';
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
      
       <Header />

       <div className='counter-todos'>
        <h3>
          N° Tasks: <span>{todosCount}</span>
        </h3>
        <h3>
          N° Pending: <span>{pendingTodosCount}</span>
        </h3>
       </div>

       <div className='add-task'>
        <h3>Add Task</h3>
        <TodoAdd handleNewTodo={handleNewTodo} />
       </div>

       <TaskList 
       todos={todos}
       handleUpdateTodo={handleUpdateTodo}
       handleDeleteTodo={handleDeleteTodo}
       handleCompleteTodo={handleCompleteTodo}
       />
    </div>
  )
}


  