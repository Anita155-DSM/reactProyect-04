import { useState, useEffect } from "react";

export const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		setError(null);
		fetch(url)
			.then((response) => {
				if (!response.ok) throw new Error("Error en la petición");
				return response.json();
			})
			.then((data) => {
				setData(data);
				setLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setLoading(false);
			});
	}, [url]);

	return { data, loading, error };
};
