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


//modif rama 4