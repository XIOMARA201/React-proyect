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

      // Funcion para agregar tarea
      const handleNewTodo = todo => {
        const action = {
          type: "Add Todo",
          payload: todo,
        };
    
        dispatch(action);
      };
    
      // función para eliminar tarea
      const handleDeleteTodo = id => {
        const action = {
          type: "Delete Todo",
          payload: id,
        };
    
        dispatch(action);
      };
    
      // función para especificar tarea como completada
      const handleCompleteTodo = id => {
        const action = {
          type: "Complete Todo",
          payload: id,
        };
    
        dispatch(action);
      };
    
      // función para editar tarea
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

      // función para borrar todas las tareas
      const handleDeleteAllTodos = () => {
      const action = {
      type: "Delete All",
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
        handleUpdateTodo,
        handleDeleteAllTodos
    }
};


