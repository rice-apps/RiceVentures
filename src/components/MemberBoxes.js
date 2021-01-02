import * as React from "react";

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
	image,
	firstName,
	lastName,
	role,
	description,
	email,
	linkedIn,
}) => {
	return (
		<div className="flex flex-col items-center w-5/6">
			<img className="w-1/2 h-auto rounded-full mb-5" src={image}></img>
			<h2 className="font-bold text-2xl uppercase mb-5">
				{firstName} {lastName}
			</h2>
			<h6 className="font-light text-lg">{role}</h6>
			<p className="font-light text-xl mt-5">{description}</p>
			<div className="grid grid-cols-2 items-center mt-5 gap-0 underline">
				<a href={email}>{email}</a>
				<a href={linkedIn}>LinkedIn</a>
			</div>
		</div>
	);
};

const MemberBoxes = () => {
	return (
		<div className="grid grid-cols-3 items-center justify-items-center">
			{teamMembers.map((member) => (
				<MemberBox {...member} />
			))}
		</div>
	);
};

export default MemberBoxes;
