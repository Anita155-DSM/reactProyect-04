import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";

const initialState = {
  username: "",
  password: ""
};

const RegisterPage = () => {
  const navigate = useNavigate();
  const { formState, handleChange, handleSubmit } = useForm(initialState);

  const onRegister = () => {
    // Aquí podrías guardar el usuario en una base de datos o localStorage si lo deseas
    navigate("/login");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4">Registro</h2>
      <form onSubmit={e => handleSubmit(e, onRegister)}>
        <div className="mb-3">
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Usuario"
            value={formState.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Contraseña"
            value={formState.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-100">Registrarse</button>
      </form>
      <div className="mt-3 text-center">
        <a href="/login">¿Ya tienes cuenta? Inicia sesión</a>
      </div>
    </div>
  );
};

export default RegisterPage;