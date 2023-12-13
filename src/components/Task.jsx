import React, { useRef, useState } from "react";
import useForm from "../Hooks/useForm";

export default function Task({ todo, handleUpdateTodo }) {
   
  // Estado y funciones para manejar los campos de actualización de la tarea
   const { updateDescription, updateDescriptionTask, onInputChange } = useForm({
      updateDescription: todo.description,
      updateDescriptionTask: todo.descriptionTask,
   });

   // Estado para habilitar o deshabilitar la edición de la tarea.
   const [disabled, setDisabled] = useState(true);

   // Referencia al input para enfocarlo.
   const focusInputRef = useRef();

   // Función para manejar la actualización de la tarea.
   const onSubmitUpdate = (event) => {
      event.preventDefault();

      const id = todo.id;
      const description = updateDescription;
      const descriptionTask = updateDescriptionTask;

      handleUpdateTodo(id, description, descriptionTask);

      setDisabled(!disabled);

      focusInputRef.current.focus();

   };
   
      return ( 
      <form onSubmit={onSubmitUpdate}>
      {/* Campo de entrada para la descripción de la tarea. */}
      <input
				type="text"
				className={`input-update ${
					todo.done ? 'text-decoration-dashed' : ''
				}`}
				name='updateDescription'
				value={updateDescription}
				onChange={onInputChange}
				placeholder='Corregir tarea'
				readOnly={disabled}
				ref={focusInputRef}
		/>

      {/* Campo de entrada para los detalles de la tarea. */}
      <input 
            type="text"
            className="input-updatedescription"
            name='updateDescriptionTask'
            value={updateDescriptionTask}
            onChange={onInputChange}
            placeholder='Corregir detalles'
            readOnly={disabled}
            ref={focusInputRef}
      />
            {/* Botón para enviar la actualización. */}
            <button className="boton" type='submit'>
               <i className="fas fa-edit"></i>
            </button> 
    </form>
    );
   };