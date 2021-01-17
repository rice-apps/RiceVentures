import * as React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import { formatSocialLinks } from "../utils/contentfulUtils";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { init, send } from "emailjs-com";

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

const schema = yup.object().shape({
	name: yup.string().required(),
	email: yup.string().email().required(),
	message: yup.string().required(),
});

const Contact = () => {
	const data = useStaticQuery(GET_SOCIAL_INFO);
	const socialLinksDict = formatSocialLinks(data);
	const { formState, register, handleSubmit, watch, errors } = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data) => {
		// Sends email to Rice Ventures team on our behalf
		await send("service_uaeezbf", "template_bozmvt6", data);
		return;
	};

	// Initialize emailJS
	React.useEffect(() => init("user_OtnkAXUtUN03wOp1LxRcq"), []);

	return (
		<div className="bg-teal-storm flex flex-col text-center py-10">
			<h1 className="font-black text-5xl my-10">Contact Us</h1>
			<div className="flex flex-col xl:flex-row justify-evenly">
				<div className="p-5 xl:p-0 xl:w-1/4 flex flex-col items-center text-center">
					<h2 className="font-medium text-3xl">EMAIL</h2>
					{formState.isSubmitSuccessful ? (
						<div className="text-navy font-light text-xl pt-5">
							Success! You'll be hearing back from us shortly.
						</div>
					) : (
						<form onSubmit={handleSubmit(onSubmit)}>
							<input
								name="name"
								defaultValue=""
								ref={register}
								className="h-10"
								placeholder="Name"
							/>
							{formState.isSubmitted && errors.name && (
								<span>Please enter your name.</span>
							)}
							<input
								name="email"
								defaultValue=""
								ref={register}
								className="h-10"
								placeholder="Email"
							/>
							{formState.isSubmitted && errors.email && (
								<span>Please enter a valid email.</span>
							)}
							<textarea
								name="message"
								defaultValue=""
								ref={register}
								className="h-40 mb-0"
								placeholder="Message"
							/>
							{formState.isSubmitted && errors.message && (
								<p>Please enter a message.</p>
							)}
							<button className="submitButton" type="submit">
								Send
							</button>
						</form>
					)}
				</div>
				<div className="p-5 xl:w-1/4 flex flex-col items-center text-center">
					<h2 className="font-medium text-3xl">FOLLOW US</h2>
					<div className="w-1/2 flex flex-row justify-between">
						<button
							onClick={() =>
								window.open(
									socialLinksDict["Facebook"],
									"_blank"
								)
							}
							className="socialMediaButton"
						>
							<Img fluid={data.facebook.childImageSharp.fluid} />
						</button>
						<button
							onClick={() =>
								window.open(
									socialLinksDict["Instagram"],
									"_blank"
								)
							}
							className="socialMediaButton"
						>
							<Img fluid={data.instagram.childImageSharp.fluid} />
						</button>
						<button
							onClick={() =>
								window.open(
									socialLinksDict["LinkedIn"],
									"_blank"
								)
							}
							className="socialMediaButton"
						>
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
