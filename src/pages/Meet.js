import * as React from "react";
import { graphql } from 'gatsby'
import MemberBoxes from "../components/MemberBoxes";
import "../styles/Meet.css";
import TwoColumn from "../components/TwoColumn";

// markup

const MeetPage = ({ data }) => {
	let contentfulPeople = data.allContentfulPerson.nodes;
	let leadership = contentfulPeople.filter(person => person.group === "Rice Ventures Leadership");
	let cohort = contentfulPeople.filter(person => person.group === "Fall 2020 Cohort");
	let mentors = contentfulPeople.filter(person => person.group === "Mentor / Speaker");

	return (
		<main>
			<title>Rice Ventures</title>
			<div className="flex flex-col text-center">
				<div className="bg-teal py-32">
					<h1 className="text-5xl font-bold mb-20">Meet the Team</h1>
					<MemberBoxes people={leadership} />
				</div>
				<div className="bg-navy text-white py-20">
					<h1 className="text-6xl font-bold mb-20">Fall 2020 Cohort</h1>
					<TwoColumn people={cohort} />
				</div>
				<div className="grid bg-teal py-20 pb-40">
					<h1 className="text-6xl font-bold w-1/3 mb-20 leading-normal justify-self-center">Present Mentors and Speakers</h1>
					<TwoColumn people={mentors} />
				</div>
			</div>
		</main>
	);
};

export const query = graphql`
	query GET_PEOPLE {
		allContentfulPerson {
			nodes {
				firstName
				lastName
				linkedIn
				group
				order
				image {
					id
				}
				role
				description {
					raw
				}
				email
			}
		}
	}
`

export default MeetPage;
