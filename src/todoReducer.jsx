export const todoReducer = (initialState, action) => {
    switch (action.type) {
       // Caso para agregar una nueva tarea.
        case 'Add Todo':
            return [...initialState, action.payload];

        // Caso para eliminar una tarea.
        case 'Delete Todo':
            return initialState.filter(todo => todo.id !== action.payload);
        
        // Caso para marcar una tarea completada o incompleta.
        case 'Complete Todo':
           return initialState.map(todo => {
               if (todo.id === action.payload) {
                   return {
                       ...todo,
                       done: !todo.done,
                   };
               }
               return todo;
           });
        
        // Caso para actualizar la descripción de una tarea.
        case 'Update Todo':
            return initialState.map(todo => {
               if (todo.id === action.payload.id) {
                   return {
                       ...todo,
                       description: action.payload.description,
                   };
               }
               return todo;
            });

            // Caso por defecto: devolver el estado inicial sin cambios.
            default:
               return initialState;
           };
}
