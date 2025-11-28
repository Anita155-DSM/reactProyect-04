import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem("isLogged");
		navigate("/login");
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">Home</Link>
				<button className="btn btn-outline-danger ms-auto" onClick={handleLogout}>
					Logout
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
