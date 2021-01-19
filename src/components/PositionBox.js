import * as React from "react";

const PositionBox = ({
	title,
	renderedContent,
	applicationLink,
	applicationLinkText,
}) => {
	return (
		<div className="w-full xl:w-1/4 flex flex-col items-center justify-around py-5">
			<h2 className="text-3xl p-5">{title}</h2>
			<div className="text-lg xl:text-xl p-5">{renderedContent}</div>
			<button
				className="applyButton"
				type="button"
				onClick={(e) => {
					e.preventDefault();
					window.open(applicationLink, "_blank");
				}}
			>
				{applicationLinkText}
			</button>
		</div>
	);
};
export default PositionBox;
