import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Container, HamburgerIcon, HeaderLink } from "@Components";

const navItems = [
	{ href: "/", text: "Home" },
	{ href: "/news", text: "News" },
];

function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				menuRef.current &&
				!menuRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () =>
			document.removeEventListener("mousedown", handleClickOutside);
	}, [isOpen]);

	return (
		<div className="fixed text-white bg-primary border-b border-b-primary-600 py-2 text-[18px] w-full z-50">
			<Container>
				<div className="flex justify-between gap-8 items-center font-bold">
					<Link to="/" className="text-[24px] sm:text-[30px]">
						Articalization
					</Link>

					<div className="hidden md:flex gap-8">
						{navItems.map((item, index) => (
							<HeaderLink
								key={index}
								text={item.text}
								link={item.href}
							/>
						))}
					</div>

					<div className="md:hidden relative" ref={menuRef}>
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="focus:outline-none"
						>
							<HamburgerIcon />
						</button>

						<div
							className={`absolute top-full right-0 mt-3 w-40 text-[18px] bg-white text-primary-800 rounded-lg shadow-lg transform transition-all ${
								isOpen
									? "opacity-100 scale-100"
									: "opacity-0 scale-95 pointer-events-none"
							}`}
						>
							<ul className="flex flex-col px-2 py-4">
								{navItems.map((item, index) => (
									<Link
										key={index}
										to={item.href}
										onClick={() => setIsOpen(false)}
										className="block px-4 py-2 rounded-md hover:text-white hover:bg-primary-500 transition"
									>
										{item.text}
									</Link>
								))}
							</ul>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default Header;
