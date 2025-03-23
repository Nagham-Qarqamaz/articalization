import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	CategoryFilter,
	DateFilter,
	QueryFilter,
	ResetFiltersButton,
	SourceFilter,
} from "@Components";
import { RootState, resetFilters } from "@Redux";

function Filters() {
	const filters = useSelector((state: RootState) => state.filters);
	const [resetKey, setResetKey] = useState(0);

	const dispatch = useDispatch();

	const handleReset = () => {
		setResetKey((prev) => (prev + 1) % 1000);
		dispatch(resetFilters());
	};

	const dateFilter = (
		<DateFilter
			key={resetKey}
			value={{ from: filters.from, to: filters.to }}
		/>
	);
	const categoryFilter = (
		<CategoryFilter key={resetKey + 1} value={filters.category} />
	);
	const queryFilter = (
		<QueryFilter key={resetKey + 2} value={filters.query} />
	);
	const sourceFilter = (
		<SourceFilter key={resetKey + 3} value={filters.source} />
	);
	const resetFiltersButton = <ResetFiltersButton onReset={handleReset} />;

	return (
		<>
			<div className="hidden xl:block">
				<div className="space-y-8">
					<div className="flex justify-between gap-x-12 xl:gap-x-28 items-end">
						{dateFilter}
						{categoryFilter}
						{resetFiltersButton}
					</div>
					<div className="flex justify-between gap-x-12 xl:gap-x-28 items-center">
						{queryFilter}
						{sourceFilter}
					</div>
				</div>
			</div>

			<div className="hidden md:block xl:hidden">
				<div className="space-y-8">
					<div className="flex justify-between gap-x-12 xl:gap-x-28 items-end">
						{dateFilter}
						{resetFiltersButton}
					</div>

					<div className="flex justify-between gap-x-12 xl:gap-x-28 items-center">
						{queryFilter}
					</div>
					<div className="flex justify-between gap-x-12 xl:gap-x-28 items-center">
						{categoryFilter}
						{sourceFilter}
					</div>
				</div>
			</div>

			<div className="hidden sm:block md:hidden">
				<div className="space-y-8">
					<div className="flex justify-between gap-x-12 xl:gap-x-28 items-end">
						{dateFilter}
					</div>
					<div className="flex justify-between gap-x-12 xl:gap-x-28 items-center">
						{queryFilter}
						{sourceFilter}
					</div>
					<div className="flex justify-between gap-x-12 xl:gap-x-28 items-center">
						{categoryFilter}
						{resetFiltersButton}
					</div>
				</div>
			</div>

			<div className="sm:hidden mx-auto space-y-12">
				<div>{dateFilter}</div>
				<div className="space-y-4">
					{queryFilter}
					{categoryFilter}
					{sourceFilter}
				</div>
				<div>{resetFiltersButton}</div>
			</div>
		</>
	);
}

export default Filters;
