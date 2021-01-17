import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { isBrowser, isMobile } from "react-device-detect";
import { formatSocialLinks } from "../utils/contentfulUtils";

const GET_SOCIAL_LINKS = graphql`
	query {
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

function Footer() {
	const data = useStaticQuery(GET_SOCIAL_LINKS);
	const socialLinksDict = formatSocialLinks(data);

	var facebook = (
		<button
			className="underline px-1"
			onClick={() => window.open(socialLinksDict["Facebook"], "_blank")}
		>
			Facebook
		</button>
	);
	var linkedin = (
		<button
			className="underline px-1"
			onClick={() => window.open(socialLinksDict["LinkedIn"], "_blank")}
		>
			Linkedin
		</button>
	);
	var notion = (
		<button
			className="underline px-1"
			onClick={() => window.open("https://www.notion.so/", "_blank")}
		>
			Notion
		</button>
	);

	return (
		<div className="bg-navy text-white flex items-center justify-around h-20 xl:h-10 w-full">
			{isBrowser ? (
				<h2 className="flex flex-row text-s">
					Rice Ventures © | Email: team@riceventures.org | {facebook}{" "}
					| {linkedin} | {notion}
				</h2>
			) : (
				<h2 className="flex flex-col text-sm items-center">
					<p>Rice Ventures ©</p>
					<p>Email: team@riceventures.org</p>
					<p>
						{facebook} | {linkedin} | {notion}
					</p>
				</h2>
			)}

			<h2 className="flex">Designed by RiceApps</h2>
		</div>
	);
}
export default Footer;
