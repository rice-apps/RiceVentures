import * as React from "react";

const PersonName = ({
    firstName,
    lastName
}) => {
    return (
        <div className='my-3'>
            <h2 className='uppercase text-2xl font-normal'>
                {firstName} {lastName}
            </h2>
        </div>
    )
}

const TwoColumn = ({ people }) => {
    return (
        <div>
            <div class="grid grid-cols-2 items-center justify-items-center px-32">
                {people.map((person) => (
                    <PersonName {...person} />
                ))}
            </div>
        </div>
    )
}

export default TwoColumn;