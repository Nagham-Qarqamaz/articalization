import { Button } from "@Components";

interface ResetFiltersButtonProps {
	onReset: () => void;
}

function ResetFiltersButton({ onReset }: ResetFiltersButtonProps) {
	return (
		<Button
			className="w-full sm:w-40"
			variant="outlined"
			text="Reset Filters"
			onClick={onReset}
		/>
	);
}

export default ResetFiltersButton;
