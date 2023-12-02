import React, { useRef, useState } from "react";
import useForm from "../Hooks/useForm";

export default function Task({ todo, handleUpdateTodo }) {
   
   const { updateDescription, onInputChange } = useForm({
      updateDescription: todo.description,
   });

   const [disabled, setDisabled] = useState(true);
   const focusInputRef = useRef();

   const onSubmitUpdate = (event) => {
      event.preventDefault();

      const id = todo.id;
      const description = updateDescription;

      handleUpdateTodo(id, description);

      setDisabled(!disabled);

      focusInputRef.current.focus();

   };
   
      return ( 
         // Utilizando un valor Booleano y un checkbox se podra indicar que una tarea o varias tareas han sido completadas
      <form onSubmit={onSubmitUpdate}>
      <input
				type="text"
				className={`input-update ${
					todo.done ? 'text-decoration-dashed' : ''
				}`}
				name='updateDescription'
				value={updateDescription}
				onChange={onInputChange}
				placeholder='¿What do you want?'
				readOnly={disabled}
				ref={focusInputRef}
		/>
            <button className="button" type='submit'>
               <i className="fas fa-edit"></i>
            </button> 
    </form>
    );
   };

