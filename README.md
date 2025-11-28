
# ReactProyect-04

## Descripción
Proyecto de práctica para modularización, rutas protegidas, hooks personalizados y estilos con Bootstrap en React + Vite. Incluye autenticación básica, navegación entre páginas y consumo de la API de personajes de Los Simpsons.

## Funcionalidades principales
- Páginas de Login, Registro y Home protegidas por rutas públicas/privadas.
- Autenticación usando localStorage.
- Custom hooks: `useForm`, `useCounter`, `useFetch`.
- Componentes reutilizables: Navbar, Loading, CharacterInfo.
- Estilos con Bootstrap.
- Navegación y protección de rutas con `react-router-dom`.

## Instalación
1. Clona el repositorio:
	 ```bash
	 git clone https://github.com/Anita155-DSM/reactProyect-04.git
	 cd reactProyect-04
	 ```
2. Instala dependencias:
	 ```bash
	 npm install
	 ```

## Uso
1. Inicia el servidor de desarrollo:
	 ```bash
	 npm run dev
	 ```
2. Accede a la app en tu navegador (generalmente en `http://localhost:5173`).
3. Regístrate, inicia sesión y navega entre las páginas.

## Estructura principal
```
src/
	components/
		Navbar.jsx
		Loading.jsx
		CharacterInfo.jsx
	hooks/
		useCounter.js
		useFetch.js
		useForm.js
	pages/
		HomePage.jsx
		LoginPage.jsx
		RegisterPage.jsx
	router/
		AppRouter.jsx
		PrivateRoutes.jsx
		PublicRoutes.jsx
	App.jsx
	main.jsx
```

## API utilizada
- [API Simpsons](https://apisimpsons.fly.dev/)

## Autor
- Anita155-DSM

## Notas
- Solo se usan librerías solicitadas (React, react-router-dom, Bootstrap).
- El proyecto está modularizado y sigue buenas prácticas de React.
