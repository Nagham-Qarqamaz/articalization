import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@Components";
import { updateDateFilters } from "@Redux";

interface DateFilterProps {
	value?: {
		from: string;
		to: string;
	};
}

function DateFilter({ value }: DateFilterProps) {
	const [fromDate, setFromDate] = useState("");
	const [toDate, setToDate] = useState("");

	const dispatch = useDispatch();

	useEffect(() => {
		setFromDate(value?.from || "");
		setToDate(value?.to || "");
	}, [value]);

	useEffect(() => {
		if (!fromDate && toDate) {
			setToDate("");
		}
	}, [fromDate, toDate]);

	const handleReset = () => {
		setFromDate("");
		setToDate("");
		dispatch(updateDateFilters({ fromDate: "", toDate: "" }));
	};

	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-col sm:flex-row sm:items-end gap-2">
				<div className="flex items-center gap-x-4 sm:block">
					<label className="w-16 flex text-lg sm:text-sm font-medium text-gray-700">
						From <span className="sm:hidden">:</span>
					</label>
					<input
						type="date"
						className="sm:mt-1 block w-full px-2 py-[6px] border border-gray-300 rounded-md"
						value={fromDate}
						onChange={(e) => setFromDate(e.target.value)}
						max={toDate || ""}
					/>
				</div>

				<div className="flex items-center gap-x-4 sm:block">
					<label className="w-16 flex text-lg sm:text-sm font-medium text-gray-700">
						To <span className="sm:hidden">:</span>
					</label>
					<input
						type="date"
						className="sm:mt-1 block w-full px-2 py-[6px] border border-gray-300 rounded-md"
						value={toDate}
						onChange={(e) => setToDate(e.target.value)}
						disabled={!fromDate}
						min={fromDate || ""}
					/>
				</div>

				<div className="flex gap-2">
					<Button
						className="min-w-24 flex-grow"
						text="Apply"
						onClick={() =>
							dispatch(updateDateFilters({ fromDate, toDate }))
						}
					/>
					<Button
						className="min-w-24 flex-grow"
						text="Reset"
						onClick={handleReset}
					/>
				</div>
			</div>
		</div>
	);
}

export default DateFilter;
