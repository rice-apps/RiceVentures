import * as React from "react";

import { BLOCKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";

/**
 * Creates a dictionary of social media types to their respective social links
 * @param {*} data: Data sourced from Contentful with allContentfulSocialMedia query
 */
export const formatSocialLinks = (data) => {
	const dict = {};
	// Get nodes
	const nodes = data.socialLinks.edges.map((edge) => edge.node);
	// Assign each social media type to its link
	nodes.forEach((node) => {
		dict[node.socialMediaType] = node.link;
	});
	return dict;
};

/**
 *
 * @param {*} nodes: List of nodes containing a field with rich text
 * @param {*} richTextFieldName: Name of the field containing rich text
 */
export const formatRichText = (nodes, richTextFieldName) => {
	// Fix content
	nodes.forEach((node) => {
		// Define options for rendering
		const options = {
			renderNode: {
				[BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
			},
		};
		// Renders the rich text
		const renderedRichText = renderRichText(
			node[richTextFieldName],
			options
		);
		node.renderedContent = renderedRichText;
	});
	return nodes;
};
