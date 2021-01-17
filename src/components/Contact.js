import * as React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const GET_SOCIAL_INFO = graphql`
	query {
		facebook: file(relativePath: { eq: "facebook.png" }) {
			childImageSharp {
				fluid(maxWidth: 450) {
					...GatsbyImageSharpFluid
				}
			}
		}
		instagram: file(relativePath: { eq: "instagram.png" }) {
			childImageSharp {
				fluid(maxWidth: 450) {
					...GatsbyImageSharpFluid
				}
			}
		}
		linkedIn: file(relativePath: { eq: "linkedIn.png" }) {
			childImageSharp {
				fluid(maxWidth: 450) {
					...GatsbyImageSharpFluid
				}
			}
		}
		socialLinks: allContentfulSocialMedia {
			edges {
				node {
					socialMediaType
					link
				}
			}
		}
	}
`;

const formatSocialLinks = (data) => {
	const dict = {};
	// Get nodes
	const nodes = data.socialLinks.edges.map((edge) => edge.node);
	// Assign each social media type to its link
	nodes.forEach((node) => {
		dict[node.socialMediaType] = node.link;
	});
	return dict;
}

const Contact = () => {
	const data = useStaticQuery(GET_SOCIAL_INFO);
	const socialLinksDict = formatSocialLinks(data);

	return (
		<div className="bg-teal-storm flex flex-col text-center py-10">
			<h1 className="font-black text-5xl my-10">Contact Us</h1>
			<div className="flex flex-col xl:flex-row justify-evenly">
				<div className="p-5 xl:p-0 xl:w-1/4 flex flex-col items-center text-center">
					<h2 className="font-medium text-3xl">EMAIL</h2>
					<form>
						<input className="h-10" placeholder="Name" />
						<input className="h-10" placeholder="Email" />
						<textarea className="h-40 mb-0" placeholder="Message" />
						<button
							className="submitButton"
							type="submit"
							onClick={(e) => {
								e.preventDefault();
								console.log("Clicked Send!");
							}}
						>
							Send
						</button>
					</form>
				</div>
				<div className="p-5 xl:w-1/4 flex flex-col items-center text-center">
					<h2 className="font-medium text-3xl">FOLLOW US</h2>
					<div className="w-1/2 flex flex-row justify-between">
						<button onClick={() => window.open(socialLinksDict["Facebook"], "_blank")} className="socialMediaButton">
							<Img fluid={data.facebook.childImageSharp.fluid} />
						</button>
						<button onClick={() => window.open(socialLinksDict["Instagram"], "_blank")} className="socialMediaButton">
							<Img fluid={data.instagram.childImageSharp.fluid} />
						</button>
						<button onClick={() => window.open(socialLinksDict["LinkedIn"], "_blank")} className="socialMediaButton">
							<Img fluid={data.linkedIn.childImageSharp.fluid} />
						</button>
					</div>
					<h2 className="font-medium text-3xl m-5">NEWSLETTER</h2>
					<form>
						<input className="h-10" placeholder="Email" />
						<button className="submitButton" type="submit">
							Send
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
