import React from "react";

const CharacterInfo = ({ character }) => {
	if (!character) return null;
	return (
		<div className="card mb-3" style={{ maxWidth: "400px" }}>
			<div className="row g-0">
				<div className="col-md-4">
					<img src={character.image} alt={character.name} className="img-fluid rounded-start" />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{character.name}</h5>
						<p className="card-text"><strong>Ocupación:</strong> {character.occupation || "Desconocida"}</p>
						<p className="card-text"><strong>Estado:</strong> {character.status || "Desconocido"}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CharacterInfo;
