import { useState } from 'react'

export default function useForm(initialForm = {}) {

    // Estado local para el formulario.
    const [formState, setFormState] = useState(initialForm);
    
    // Función para manejar el cambio en los campos de entrada.
    const onInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        // Actualizar el estado del formulario.
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // Función para restablecer el formulario a su estado inicial.
    const onResetForm = () => {
        setFormState(initialForm);
    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    };
};
useTodo.js
import { useEffect, useReducer } from "react";
import { todoReducer } from './../todoReducer';


export default function useTodo() {
  const initialState = [];

  // Este useEffect revisa si localStorage tiene elementos, 
  // si los tiene los establece como parte de la lista.
  const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

  // UseReducer para gestionar el estado de la lista de tareas.
  const [todos, dispatch] = useReducer(
    todoReducer,
    initialState,
    init
  );

  // Funciones para manipular las tareas.
  const todosCount = todos.length;
  const pendingTodosCount = todos.filter(todo => !todo.done).length

      // Este useEffect ejecutara un codigo que cambie.
      useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
      }, [todos])
      // los datos de la lista nueva son los que tendran el cambio.

      // Funciones para manipular las tareas.
      const handleNewTodo = todo => {
        const action = {
          type: "Add Todo",
          payload: todo,
        };
    
        dispatch(action);
      };
    
      const handleDeleteTodo = id => {
        const action = {
          type: "Delete Todo",
          payload: id,
        };
    
        dispatch(action);
      };
    
      const handleCompleteTodo = id => {
        const action = {
          type: "Complete Todo",
          payload: id,
        };
    
        dispatch(action);
      };
    
      const handleUpdateTodo = (id, description) => {
        const action = {
          type: "Update Todo",
          payload: {
            id,
            description,
          }
        };
    
        dispatch(action);
      };

      return{
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleCompleteTodo,
        handleUpdateTodo
    }
};





