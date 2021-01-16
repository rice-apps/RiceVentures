import * as React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
	return (
		<div className="flex flex-col h-screen justify-between">
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
