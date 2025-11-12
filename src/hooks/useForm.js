import { useState } from "react";

//repo del profe
export const useForm = (initialState) => {
  const [formState, setFormState] = useState(initialState);
  const { username, password } = formState;

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormState({

      ...formState,

      [name]: value,
    });
  };

  const handleReset = () => {
    setFormState(initialState);
  };

  const handleSubmit = (event, onLogin) => {
    event.preventDefault();


    handleReset();

    console.log(formState);
  };

  return {
    formState, //retorna; el estado actual del formulario
    ...formState, //retorna; cada uno de los valores del formulario
    handleChange, //retorna; la función para manejar los cambios en los inputs
    handleReset, //retorna; la función para resetear el formulario
    handleSubmit, //retorna; la función para manejar el submit
  };
}; 

//credencials incluide (front) y credencials en true(backend cors)