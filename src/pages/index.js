import { graphql, Link } from "gatsby";
import * as React from "react";
import Footer from './../components/Footer.js';

// markup
const FrontPage = ({ data }) => {
	const mission = data.allContentfulMission.nodes[0].mission;

	return (
		<main>
			<title>Rice Ventures</title>
			<div className="h-screen w-screen flex flex-col items-center justify-center">
				<Link to="/meet">Meet</Link>
				<Link to="/join">Join</Link>
				<Link to="/contact">Contact</Link>
				<p className="font-extrabold text-lg">{mission}</p>
			</div>
			<Footer />
		</main>
	);
};

export const query = graphql`
	query {
		allContentfulMission {
			nodes {
				mission
			}
		}
	}
`;

export default FrontPage;
