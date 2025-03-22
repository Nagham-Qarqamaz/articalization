import { useSelector } from "react-redux";
import {
	CategoryFilter,
	DateFilter,
	QueryFilter,
	ResetFiltersButton,
	SourceFilter,
} from "@Components";
import { RootState } from "@Redux";

function Filters() {
	const filters = useSelector((state: RootState) => state.filters);

	return (
		<>
			<div className="hidden lg:block">
				<div className="space-y-8">
					<div className="flex justify-between gap-x-12 xl:gap-x-28 items-end">
						<DateFilter
							value={{ from: filters.from, to: filters.to }}
						/>
						<CategoryFilter value={filters.category} />
						<ResetFiltersButton />
					</div>
					<div className="flex justify-between gap-x-12 xl:gap-x-28 items-center">
						<QueryFilter value={filters.query} />
						<SourceFilter value={filters.source} />
					</div>
				</div>
			</div>

			<div className="hidden md:block lg:hidden">
				<div className="space-y-8">
					<div className="flex justify-between gap-x-12 xl:gap-x-28 items-end">
						<DateFilter
							value={{ from: filters.from, to: filters.to }}
						/>
						<ResetFiltersButton />
					</div>

					<div className="flex justify-between gap-x-12 xl:gap-x-28 items-center">
						<QueryFilter value={filters.query} />
					</div>
					<div className="flex justify-between gap-x-12 xl:gap-x-28 items-center">
						<CategoryFilter value={filters.category} />
						<SourceFilter value={filters.source} />
					</div>
				</div>
			</div>

			<div className="hidden sm:block md:hidden">
				<div className="space-y-8">
					<div className="flex justify-between gap-x-12 xl:gap-x-28 items-end">
						<DateFilter
							value={{ from: filters.from, to: filters.to }}
						/>
					</div>
					<div className="flex justify-between gap-x-12 xl:gap-x-28 items-center">
						<QueryFilter value={filters.query} />
						<SourceFilter value={filters.source} />
					</div>
					<div className="flex justify-between gap-x-12 xl:gap-x-28 items-center">
						<CategoryFilter value={filters.category} />

						<ResetFiltersButton />
					</div>
				</div>
			</div>

			<div className="sm:hidden space-y-12">
				<div>
					<DateFilter
						value={{ from: filters.from, to: filters.to }}
					/>
				</div>
				<div className="space-y-4">
					<QueryFilter value={filters.query} />
					<CategoryFilter value={filters.category} />
					<SourceFilter value={filters.source} />
				</div>
				<div>
					<ResetFiltersButton />
				</div>
			</div>
		</>
	);
}

export default Filters;
