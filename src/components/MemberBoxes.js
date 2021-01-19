import * as React from "react";
import Img from "gatsby-image";
import { formatRichText } from "../utils/contentfulUtils";

const teamMembers = [
	{
		image:
			"https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_1280.png",
		firstName: "John",
		lastName: "Doe",
		role: "President",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
		email: "john@doe.com",
		linkedIn: "http://linkedin.com/in/john-doe-18283/",
	},
	{
		image:
			"https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_1280.png",
		firstName: "John",
		lastName: "Doe",
		role: "President",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
		email: "john@doe.com",
		linkedIn: "http://linkedin.com/in/john-doe-18283/",
	},
	{
		image:
			"https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_1280.png",
		firstName: "John",
		lastName: "Doe",
		role: "President",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
		email: "john@doe.com",
		linkedIn: "http://linkedin.com/in/john-doe-18283/",
	},
];

const MemberBox = ({
	firstName,
	lastName,
	linkedIn,
	image,
	role,
	description,
	renderedContent,
	email,
}) => {
	return (
		<div className="flex flex-col items-center w-full lg:w-4/6 pb-10 lg:pb-0">
			<Img
				className="w-full md:w-3/4 h-auto rounded-full mb-6"
				fluid={image.fluid}
			/>
			<h2 className="font-medium text-xl lg:text-2xl uppercase mb-2">
				{firstName} {lastName}
			</h2>
			<h6 className="font-light text-xs">{role}</h6>
			<div className="font-light text-md mt-2 leading-relaxed">
				{renderedContent}
			</div>
			<div className="flex flex-row gap-x-5 items-center mt-2 text-xs underline">
				<a href={email}>{email}</a>
				<a href={linkedIn}>LinkedIn</a>
			</div>
		</div>
	);
};

const MemberBoxes = ({ people }) => {
	people = formatRichText(people, "description");
	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 items-start justify-items-center gap-6 lg:gap-0 px-10 md:px-40 lg:px-20">
			{people.map((person) => (
				<MemberBox {...person} />
			))}
		</div>
	);
};

export default MemberBoxes;
