import { Link } from "gatsby";
import * as React from "react";

// markup
const FrontPage = () => {
	return (
		<main>
			<title>Rice Ventures</title>
			<div className="h-screen w-screen flex flex-col items-center justify-center">
				<Link to="/meet">Meet</Link>
				<Link to="/join">Join</Link>
				<Link to="/contact">Contact</Link>
			</div>
		</main>
	);
};

export default FrontPage;
