import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
	const isLogged = localStorage.getItem("isLogged") === "true";
	return !isLogged ? <Outlet /> : <Navigate to="/" />;
};

export default PublicRoutes;
