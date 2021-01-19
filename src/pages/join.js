import * as React from "react";
import LeaderImage from "../images/business-leader-2080772-1753761 1.png";
import PositionBox from "../components/PositionBox";
import "../styles/Join.css";
import Layout from "../layouts/Layout.js";
import { graphql } from "gatsby";

import { BLOCKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const formatInfoSections = (data) => {
	// Turn into nodes
	const nodes = data.infoSections.edges.map((edge) => edge.node);
	// Sort according to order
	nodes.sort((a, b) => a.order - b.order);
	// Fix content
	nodes.forEach((node) => {
		const options = {
			renderNode: {
				[BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
			},
		};
		const renderedRichText = renderRichText(node.content, options);
		node.renderedContent = renderedRichText;
	});
	return nodes;
};

const JoinPage = ({ data }) => {
	const positions = formatInfoSections(data)
	return (
		<main>
			<title>Rice Ventures</title>
			{/* align-items when only one column? */}
			<Layout>
				<div className="bg-teal-storm flex flex-col text-center xl:h-full items-center pb-10">
					<h1 className="text-5xl my-10">Join Our Team</h1>
					<div>
						<img src={LeaderImage} alt="Leadership Cartoon" />
					</div>
					<div className="w-full flex flex-col xl:flex-row xl:h-1/2 justify-evenly">
						{positions.map((position) => (
							<PositionBox key={position.order} {...position} />
						))}
					</div>
				</div>
			</Layout>
		</main>
	);
};

export const query = graphql`
	query JoinUs {
		infoSections: allContentfulJoinUsInfoSection {
			edges {
				node {
					title
					applicationLink
					applicationLinkText
					content {
						raw
					}
					order
				}
			}
		}
	}
`;

export default JoinPage;
