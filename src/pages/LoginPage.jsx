import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";

const initialState = {
  username: "",
  password: ""
};

const LoginPage = () => {
  const navigate = useNavigate();
  const { formState, handleChange, handleSubmit } = useForm(initialState);

  const onLogin = () => {
    localStorage.setItem("isLogged", "true");
    navigate("/");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4">Iniciar sesión</h2>
      <form onSubmit={e => handleSubmit(e, onLogin)}>
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
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
      <div className="mt-3 text-center">
        <a href="/register">¿No tienes cuenta? Regístrate</a>
      </div>
    </div>
  );
};

export default LoginPage;
