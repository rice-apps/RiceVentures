import React from "react";
import MemberBoxes from "../components/MemberBoxes";
import './Meet.css'

const Meet = () => {
    return (
        <div className="meetContainer">
            <div className="meetUpperSection">
                <h1>MEET THE TEAM</h1>
                <MemberBoxes />
            </div>
            <div className="meetMiddleSection">
                <h1>FALL 2020 COHORT</h1>
            </div>
            <div className="meetLowerSection">
                <h1>PRESENT MENTORS AND SPEAKERS</h1>
            </div>
        </div>
    )
}

export default Meet;