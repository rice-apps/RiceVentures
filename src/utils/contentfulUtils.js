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
