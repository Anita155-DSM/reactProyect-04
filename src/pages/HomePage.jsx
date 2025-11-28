//aca tendria que ir lo de la Api, una vez que inicie sesión debería ir a esta página 
import React from "react";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import Loading from "../components/Loading";
import CharacterInfo from "../components/CharacterInfo";

const API_URL = "https://apisimpsons.fly.dev/api/personajes?limit=1&page=";

const HomePage = () => {
  const { count, handleIncrement, handleDecrement, handleReset } = useCounter(1);
  const { data, loading, error } = useFetch(`${API_URL}${count}`);

  const character = data?.result?.[0];

  return (
    <div className="container">
      <h2 className="mb-4">Personaje de Los Simpsons</h2>
      <div className="mb-3">
        <button className="btn btn-primary me-2" onClick={() => handleDecrement(1)} disabled={count <= 1}>
          Anterior
        </button>
        <button className="btn btn-secondary me-2" onClick={handleReset}>
          Reset
        </button>
        <button className="btn btn-primary" onClick={() => handleIncrement(1)}>
          Siguiente
        </button>
      </div>
      <div>
        {loading && <Loading />}
        {error && <div className="alert alert-danger">{error}</div>}
        {character && <CharacterInfo character={character} />}
      </div>
    </div>
  );
};

export default HomePage;
