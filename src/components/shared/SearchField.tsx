import { useEffect, useState } from "react";
import Button from "./Button";

interface SearchFieldProps {
	button: string;
	placeholder: string;
	value?: string;
	onSearch: (query: string) => void;
}

function SearchField({
	button,
	placeholder,
	value,
	onSearch,
}: SearchFieldProps) {
	const [query, setQuery] = useState("");

	useEffect(() => {
		setQuery(value || "");
	}, [value]);

	return (
		<div className="flex-grow flex items-center gap-2">
			<input
				type="text"
				placeholder={placeholder}
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
					if (e.key === "Enter") {
						onSearch(query);
					}
				}}
				className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-100"
			/>
			<Button
				className="min-w-24"
				text={button}
				onClick={() => onSearch(query)}
			/>
		</div>
	);
}

export default SearchField;
