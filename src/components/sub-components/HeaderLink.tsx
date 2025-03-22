import { NavLink } from "react-router-dom";

interface HeaderLinkProps {
	text: string;
	link: string;
}

function HeaderLink({ text, link }: HeaderLinkProps) {
	return (
		<NavLink
			to={link}
			className={({ isActive }) =>
				`py-1 px-2 rounded-xl ${
					isActive ? "bg-white text-primary" : ""
				}`
			}
		>
			{text}
		</NavLink>
	);
}

export default HeaderLink;
