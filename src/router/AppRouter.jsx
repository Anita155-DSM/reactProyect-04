import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const AppRouter = () => (
	<BrowserRouter>
		<Navbar />
		<Routes>
			{/* Rutas públicas */}
			<Route element={<PublicRoutes />}>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
			</Route>
			{/* Rutas privadas */}
			<Route element={<PrivateRoutes />}>
				<Route path="/" element={<HomePage />} />
			</Route>
			{/* Fallback */}
			<Route path="*" element={<LoginPage />} />
		</Routes>
	</BrowserRouter>
);

export default AppRouter;
