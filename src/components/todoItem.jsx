import React, { useState } from "react";
import Task from './Task';

export default function TodoItem ({
	todo,
	handleUpdateTodo,
	handleDeleteTodo,
	handleCompleteTodo,
})

{
	// Estado local para controlar si la tarea está completada o no.
	const [complete, setComplete] = useState(false)

	// Función para alternar el estado de completado de la tarea.
    const isComplete = () => {
	setComplete(!complete)
} 

    return (
		<li>
			
			<div className={`container-done ${todo.done ? 'active' : ''}`}>
                    {/* Checkbox para marcar la tarea como completa. */}
					<input
					className="input-check"
				    type="checkbox"
					id="check"
					checked={complete}
					onChange={isComplete}
					onClick={() => handleCompleteTodo(todo.id)}
					/>
				
				
			</div>

			{/* Componente de la tarea. */}
			<Task 
			todo={todo} 
			handleUpdateTodo={handleUpdateTodo} 
			/>

			{/* Botón para eliminar la tarea. */}
			<button 
            className="boton"
            onClick={() => handleDeleteTodo(todo.id)}>
               <i className="fas fa-trash"></i>
            </button>
		</li>
	);
}

//modif rama 4