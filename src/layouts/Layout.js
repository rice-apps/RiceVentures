import * as React from "react";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
	return (
		<div className="flex flex-col h-screen justify-between">
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
