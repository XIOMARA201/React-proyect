import { useState } from 'react';

function Task({ task }) {
  const [checked, setChecked] = useState(task.completed);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <li className={checked ? 'completed-task' : ''}>
      <article>
        <h2>{task.name}</h2>
        <div>
          <button className='tarea-btn'>Editar</button>
          <button className='tarea-btn'>Eliminar</button>
        </div>
        <input type='checkbox' checked={checked} onChange={handleCheckboxChange} />
      </article>
    </li>
  );
}

export default Task;

