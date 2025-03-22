import { Dropdown } from "@Components";
import { updateSourceFilter } from "@Redux";
import { isSource, Source } from "@Types";
import { useDispatch } from "react-redux";

interface SourceFilterProps {
	value: string;
}

function SourceFilter({ value }: SourceFilterProps) {
	const dispatch = useDispatch();

	return (
		<div className="min-w-40">
			<Dropdown
				placeholder="All Sources"
				value={value}
				options={[
					"All Sources",
					"NewsAPI",
					"New York Times",
					"The Guardian",
				]}
				onSelect={(query: string) => {
					if (query == "All Sources") query = "";
					if (isSource(query)) {
						dispatch(updateSourceFilter(query as Source));
					}
				}}
			/>
		</div>
	);
}

export default SourceFilter;
