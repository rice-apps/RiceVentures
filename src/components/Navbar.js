import { Link } from "gatsby";
import * as React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { isBrowser, isMobile } from "react-device-detect";

const pages = [
	{ title: "Home", link: "/" },
	{ title: "Meet", link: "/meet" },
	{ title: "Join", link: "/join" },
	{ title: "Contact Us", link: "/contact" },
];

const Navbar = () => {
	const [open, setOpen] = React.useState(false);

	return (
		<div className="container mx-auto flex flex-col items-center text-navy xl:flex-row uppercase py-5">
			<Link to="/" className="text-xl flex-grow">Rice Ventures</Link>
			<div className="flex flex-col items-center xl:flex-row">
				{(isMobile && open) || isBrowser ? (
					<>
						{pages.map((page) => (
							<Link
								key={page.link}
								className="text-md xl:text-xl px-5"
								to={page.link}
							>
								{page.title}
							</Link>
						))}
						{isMobile ? (
							<FaChevronUp onClick={() => setOpen(!open)} />
						) : null}
					</>
				) : (
					<>
						<FaChevronDown onClick={() => setOpen(!open)} />
					</>
				)}
			</div>
		</div>
	);
};

export default Navbar;
