import { useDispatch } from "react-redux";
import { updateQueryFilter } from "@Redux";
import { SearchField } from "@Components";

interface QueryFilterProps {
	value: string;
}

function QueryFilter({ value }: QueryFilterProps) {
	const dispatch = useDispatch();

	return (
		<SearchField
			button="Search"
			placeholder="Search..."
			value={value}
			onSearch={(query: string) => dispatch(updateQueryFilter(query))}
		/>
	);
}

export default QueryFilter;
