import * as React from "react";
import Contact from "../components/Contact";
import Layout from "../layouts/Layout";
import "../styles/Contact.css";

// markup
const ContactPage = () => {
	return (
		<main>
			<title>Rice Ventures</title>
			<Layout>
				<Contact />
			</Layout>
		</main>
	);
};

export default ContactPage;
