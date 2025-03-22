import { Button } from "@Components";
import { resetFilters } from "@Redux";
import { useDispatch } from "react-redux";

function ResetFiltersButton() {
	const dispatch = useDispatch();

	return (
		<Button
			className="w-full sm:w-40"
			variant="outlined"
			text="Reset Filters"
			onClick={() => dispatch(resetFilters())}
		/>
	);
}

export default ResetFiltersButton;
