import * as React from "react";
import MemberBoxes from "../components/MemberBoxes";
import "../styles/Meet.css";
import Footer from './../components/Footer.js';

// markup
const MeetPage = () => {
	return (
		<main>
			<title>Rice Ventures</title>
			<div className="flex flex-col text-center">
				<div className="bg-white pt-5 mb-10">
					<h1>MEET THE TEAM</h1>
					<MemberBoxes />
				</div>
				<div className="bg-gray-300">
					<h1>FALL 2020 COHORT</h1>
				</div>
				<div className="bg-white">
					<h1>PRESENT MENTORS AND SPEAKERS</h1>
				</div>
			</div>
			<Footer/>
		</main>
	);
};

export default MeetPage;
