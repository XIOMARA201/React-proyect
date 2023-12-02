import React from "react";
import Task from "./Task";

export default function TodoItem ({
	todo,
	handleUpdateTodo,
	handleDeleteTodo,
	handleCompleteTodo,
}) {
    return (
		<li>
			<span onClick={() => handleCompleteTodo(todo.id)}>
			<label
			className={`container-done ${todo.done ?       'active' : ''}`}
				></label>
			</span>
			<Task 
			todo={todo} 
			handleUpdateTodo={handleUpdateTodo} 
			/>

			<button 
            className="button"
            onClick={() => handleDeleteTodo(todo.id)}>
               <i className="fas fa-trash"></i>
            </button>
		</li>
	);
}
