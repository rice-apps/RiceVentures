import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../layouts/Layout.js";
import Img from "gatsby-image";

const sections = [
	{ title: "What We Do", image: "", order: 1 },
	{ title: "Previous Work", image: "", order: 2 },
	{ title: "Illuminated Publication", image: "", order: 3 },
];

// markup
const FrontPage = ({ data }) => {
	const mission = data.mission.nodes[0].mission;

	return (
		<main>
			<title>Rice Ventures</title>
			<Layout>
				<div className="container mx-auto flex flex-col xl:grid xl:grid-cols-2 xl:justify-items-center items-center">
					<div className="flex flex-col items-center xl:items-start text-center xl:text-left">
						<p className="font-black text-3xl xl:text-6xl">
							{mission}{" "}
							<span className="font-medium text-2xl xl:text-5xl">
								at Rice University
							</span>
						</p>
						<p className="font-light text-xl py-5">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor.
						</p>
						<div className="w-full xl:w-3/4 flex flex-row justify-center xl:justify-start uppercase">
							<button className="py-1 px-3 xl:p-3 bg-blue-800 w-1/3 mr-10">
								Meet the Team
							</button>
							<button className="py-1 px-3 xl:p-3 bg-blue-800 w-1/3">
								Join
							</button>
						</div>
					</div>
					<div className="w-full xl:w-7/12">
						<Img fluid={data.missionImage.childImageSharp.fluid} />
					</div>
				</div>
			</Layout>
		</main>
	);
};

export const query = graphql`
	query {
		mission: allContentfulMission {
			nodes {
				mission
			}
		}
		missionImage: file(
			relativePath: { eq: "business-deal-2043009-1730196 1.png" }
		) {
			childImageSharp {
				fluid(maxWidth: 450) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

export default FrontPage;
