import * as React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
	return (
		<div className="flex flex-col bg-teal-storm min-h-screen justify-between w-screen">
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
