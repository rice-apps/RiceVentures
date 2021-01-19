import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../layouts/Layout.js";
import Img from "gatsby-image";
import Contact from "../components/Contact.js";

import { formatRichText } from "../utils/contentfulUtils.js";

const formatInfoSections = (data) => {
	// First get the nodes
	let nodes = data.infoSections.edges.map((edge) => edge.node);
	// Sort by order
	nodes.sort((a, b) => a.order - b.order);
	// Format rich text in content field
	nodes = formatRichText(nodes, "content");
	return nodes;
};

// markup
const FrontPage = ({ data }) => {
	const infoSections = formatInfoSections(data);
	const { mission, missionSubtext, image: missionImage } = data.missionInfo;

	return (
		<main>
			<title>Rice Ventures</title>
			<Layout>
				<div className="container mx-auto flex flex-col lg:grid lg:grid-cols-2 lg:justify-items-center items-center px-5">
					<div className="flex flex-col items-center lg:items-start text-center lg:text-left">
						<p className="font-black text-3xl lg:text-6xl">
							{mission}{" "}
							<span className="font-medium text-2xl lg:text-5xl">
								at Rice University
							</span>
						</p>
						<p className="font-light text-xl py-5">
							{missionSubtext}
						</p>
						<div className="w-full lg:w-3/4 flex flex-row justify-center lg:justify-start uppercase">
							<Link className="w-1/3 mr-10" to="/meet">
								<button className="py-1 px-3 lg:p-3 bg-navy text-white h-full w-full">
									Meet the Team
								</button>
							</Link>
							<Link className="w-1/3" to="/join">
								<button className="py-1 px-3 lg:p-3 bg-white h-full w-full">
									Join
								</button>
							</Link>
						</div>
					</div>
					<div className="w-full lg:w-7/12">
						<Img fluid={missionImage.fluid} />
					</div>
				</div>
				<div className="w-screen">
					<Img fluid={data.curvedImage.childImageSharp.fluid} />
				</div>
				<div className="bg-navy text-white pb-10 px-5">
					<div className="container mx-auto">
						{infoSections.map((section) => {
							return (
								<div
									key={section.order}
									className="flex flex-col lg:grid lg:grid-flow-col lg:grid-cols-2 lg:justify-items-center"
								>
									<div
										className={`flex flex-col items-center lg:items-start justify-center text-center lg:text-left ${
											section.order % 2
												? ""
												: "lg:col-end-reverse"
										} p-5 lg:px-0`}
									>
										<p className="font-extrabold text-3xl lg:text-6xl">
											{section.title}{" "}
										</p>
										<div className="font-light text-lg py-5">
											{section.renderedContent}
										</div>
									</div>
									<div className="w-full lg:w-9/12">
										<Img fluid={section.image.fluid} />
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<Contact />
			</Layout>
		</main>
	);
};

export const query = graphql`
	query {
		missionInfo: contentfulMission {
			mission
			missionSubtext
			image {
				fluid(maxWidth: 450) {
					...GatsbyContentfulFluid
				}
			}
		}
		infoSections: allContentfulInfoSection {
			edges {
				node {
					title
					content {
						raw
					}
					image {
						fluid(maxWidth: 450) {
							...GatsbyContentfulFluid
						}
					}
					order
				}
			}
		}
		curvedImage: file(relativePath: { eq: "curved.png" }) {
			childImageSharp {
				fluid(maxWidth: 1920) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

export default FrontPage;
