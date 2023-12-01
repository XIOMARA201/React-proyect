import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import TaskList from './components/TaskList';
import { taskannotation } from './data/DataBase'
import React, {Fragment, useState, useRef, useEffect} from 'react';

const KEY = "todoApp.todos";

function App() {
  const todoTaskRef = useRef();
  const todoDescriptionRef = useRef();
  const [todos, setTodos] = useState( taskannotation || []);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(KEY));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleTodoAdd = (event) => {
    const task = todoTaskRef.current.value;
    const description = todoDescriptionRef.current.value;
    if (task === "" || description === "") return;

    setTodos((prevTodos) => {
      return [...prevTodos, {task, description, completed: false, id: uuidv4()}]
    });

    todoTaskRef.current.value = ''
    todoDescriptionRef.current.value = ''
  };

  const handleClearAll = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <Fragment>
    <div className='App'>
      <Header />
      <input ref={todoTaskRef} type="text" placeholder="New Task" />
      <input ref={todoDescriptionRef} type="text" placeholder="Description" />
      
      <div className="button-container">
      <button onClick={handleTodoAdd} className="button"><i className="fas fa-plus"></i></button>
      <button onClick={handleClearAll} className="button clear-all"><i className="fas fa-trash"></i></button>
      </div>

      <TaskList todos={todos} toggleTodo={toggleTodo} />
      
      <div>
        You have {todos.filter((todo) => !todo.completed).length} tasks left to finish
      </div>
    </div>
    </Fragment>
  );
}

export default App;
