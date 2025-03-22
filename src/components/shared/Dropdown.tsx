import { useEffect, useRef, useState } from "react";
import Button from "./Button";

interface DropdownProps {
	options: string[];
	placeholder: string;
	value?: string;
	onSelect: (selected: string) => void;
}

function Dropdown({ options, placeholder, value, onSelect }: DropdownProps) {
	const [selected, setSelected] = useState<string>("");
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setSelected(value || "");
	}, [value]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () =>
			document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const handleSelect = (option: string) => {
		setSelected(option);
		onSelect(option);
		setIsOpen(false);
	};

	return (
		<div ref={dropdownRef} className="relative w-full">
			<Button
				className="w-full"
				text={selected || placeholder}
				onClick={() => setIsOpen(!isOpen)}
			/>
			{isOpen && (
				<ul className="absolute z-20 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto animate-fade-in">
					{options.map((option, index) => (
						<li
							key={index}
							onClick={() => handleSelect(option)}
							className="px-4 py-2 text-gray-700 cursor-pointer hover:text-white hover:bg-primary-500 transition-all"
						>
							{option}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default Dropdown;
