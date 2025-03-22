import Button from "./Button";

interface PaginationProps {
	onPageSelect: (page: number) => void;
	currentPage: number;
	totalPages: number;
}

function Pagination({
	currentPage,
	totalPages,
	onPageSelect,
}: PaginationProps) {
	const getPageNumbers = () => {
		const pages: (number | string)[] = [];

		pages.push(1);
		if (currentPage > 3) pages.push("...");

		const start = Math.max(2, currentPage - 1);
		const end = Math.min(totalPages - 1, currentPage + 1);

		for (let i = start; i <= end; i++) {
			pages.push(i);
		}

		if (currentPage < totalPages - 2) pages.push("...");
		pages.push(totalPages);

		return pages;
	};

	return (
		<div className="flex justify-center items-center space-x-8 mt-4">
			<div className="flex justify-center items-center space-x-2">
				{getPageNumbers().map((page, index) =>
					typeof page === "number" ? (
						<Button
							variant="outlined"
							key={index}
							text={String(page)}
							onClick={() => onPageSelect(page)}
							className={`text-[16px] w-8 h-8 sm:w-10 sm:h-10 !p-0 !rounded-full ${
								page === currentPage
									? "bg-primary-500 !text-white"
									: ""
							}`}
							disabled={page == currentPage}
						/>
					) : (
						<span key={index} className="px-2">
							...
						</span>
					)
				)}
			</div>
		</div>
	);
}

export default Pagination;
