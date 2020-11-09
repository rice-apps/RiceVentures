import React from "react";
import Contact from "./pages/Contact";
import Join from "./pages/Join";
import Meet from "./pages/Meet";
import Home from "./pages/Home";
import { useRoutes } from "react-router";

const Routes = () => {
	const routes = [
		{ path: "/", element: <Home /> },
		{ path: "/join", element: <Join /> },
		{ path: "/meet", element: <Meet /> },
		{ path: "/contact", element: <Contact /> },
	];

	return useRoutes(routes);
};

export default Routes;
