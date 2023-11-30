import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: tasks.length + 1, name: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleClearAll = () => {
    setTasks([]);
  };

  return (
    <div className='App'>
      <Header />
      <input
        type='text'
        className='tarea-input'
        placeholder='Añade una nueva actividad'
        value={newTask}
        onChange={handleInputChange}
      />
      <button className='tarea-btn' onClick={handleAddTask}>
        Añadir actividad
      </button>
      <TaskList tasks={tasks} />
      {tasks.length > 0 && (
        <button className='clear-all-btn' onClick={handleClearAll}>
          Eliminar todo
        </button>
      )}
      </div>
    );
  }
  
  export default App;
  