import * as React from "react";
import Layout from "../layouts/Layout";
import "../styles/Contact.css";

// markup
const ContactPage = () => {
	return (
		<main>
			<title>Rice Ventures</title>
			<Layout>
				<div className="bg-teal-storm h-screen flex flex-col text-center">
					<h1 className="font-medium text-5xl my-10">CONTACT US</h1>
					<div className="flex flex-row justify-evenly">
						<div className="w-1/4 flex flex-col items-center text-center">
							<h2 className="font-medium text-3xl">MESSAGE</h2>
							<form>
								<input className="h-10" placeholder="Name" />
								<input className="h-10" placeholder="Email" />
								<textarea
									className="h-40 mb-0"
									placeholder="Message"
								/>
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
						<div className="w-1/4 flex flex-col items-center text-center">
							<h2 className="font-medium text-2xl">FOLLOW US</h2>
							<div className="w-1/2 flex flex-row justify-between">
								<button className="socialMediaButton">
									FB
								</button>
								<button className="socialMediaButton">
									IG
								</button>
								<button className="socialMediaButton">
									SC
								</button>
							</div>
							<h2 className="font-normal text-2xl m-5">
								NEWSLETTER
							</h2>
							<form>
								<input className="h-10" placeholder="Email" />
								<button className="submitButton" type="submit">
									Send
								</button>
							</form>
						</div>
					</div>
				</div>
			</Layout>
		</main>
	);
};

export default ContactPage;
