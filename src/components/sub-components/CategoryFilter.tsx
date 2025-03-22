import { useDispatch } from "react-redux";
import { updateCategoryFilter } from "@Redux";
import { SearchField } from "@Components";

interface CategoryFilterProps {
	value: string;
}

function CategoryFilter({ value }: CategoryFilterProps) {
	const dispatch = useDispatch();

	return (
		<SearchField
			button="Submit"
			placeholder="Category..."
			value={value}
			onSearch={(query: string) => dispatch(updateCategoryFilter(query))}
		/>
	);
}

export default CategoryFilter;
