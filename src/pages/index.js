import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../layouts/Layout.js";

// markup
const FrontPage = ({ data }) => {
	const mission = data.allContentfulMission.nodes[0].mission;

	return (
		<main>
			<title>Rice Ventures</title>
			<Layout>
				<div className="h-screen w-screen flex flex-col items-center justify-center">
					<Link to="/meet">Meet</Link>
					<Link to="/join">Join</Link>
					<Link to="/contact">Contact</Link>
					<p className="font-extrabold text-lg">{mission}</p>
				</div>
			</Layout>
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
