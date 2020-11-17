import React from "react";
import './MemberBoxes.css'

const teamMembers = [
    {
        image: "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_1280.png",
        firstName: "John",
        lastName: "Doe",
        role: "President",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        email: "john@doe.com",
        linkedIn: "http://linkedin.com/in/john-doe-18283/"
    },
    {
        image: "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_1280.png",
        firstName: "John",
        lastName: "Doe",
        role: "President",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        email: "john@doe.com",
        linkedIn: "http://linkedin.com/in/john-doe-18283/"
    },
    {
        image: "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_1280.png",
        firstName: "John",
        lastName: "Doe",
        role: "President",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        email: "john@doe.com",
        linkedIn: "http://linkedin.com/in/john-doe-18283/"
    },
];

const MemberBox = ({ image, firstName, lastName, role, description, email, linkedIn }) => {
    return (
        <div className="memberBox">
            <img src={image}></img>
            <h2>{firstName} {lastName}</h2>
            <h6>{role}</h6>
            <p>{description}</p>
            <div className="linkContainer">
                <a href={email}>{email}</a>
                <a href={linkedIn}>LinkedIn</a>
            </div>
        </div>
    )
}

const MemberBoxes = () => {
    return (
        <div className="memberBoxContainer">
            {teamMembers.map((member) => (
                <MemberBox {...member} />
            ))}
        </div>
    )
}

export default MemberBoxes;