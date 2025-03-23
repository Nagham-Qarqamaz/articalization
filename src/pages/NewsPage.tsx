import { useDispatch, useSelector } from "react-redux";
import {
	ArticleCard,
	Container,
	Filters,
	Loading,
	Pagination,
} from "@Components";
import { useNews } from "@Hooks";
import { setPage, selectPaginatedArticles, selectPagination } from "@Redux";

function NewsPage() {
	const dispatch = useDispatch();
	const { isLoading, errors } = useNews();

	const articles = useSelector(selectPaginatedArticles);
	const { currentPage, value, itemsPerPage } = useSelector(selectPagination);

	const totalPages = Math.ceil(value.length / itemsPerPage);

	return (
		<Container>
			<div className="py-20 space-y-8">
				<Filters />
				<div className="flex flex-col justify-center items-center gap-8">
					<div>
						{isLoading && <Loading />}
						{errors.length > 0 && (
							<p
								className={`text-red-500 ${
									articles.length === 0 && "my-12"
								}`}
							>
								Something went wrong :(
							</p>
						)}
					</div>
					{articles.length > 0 && (
						<>
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
								{articles.map((article, index) => (
									<ArticleCard
										key={index}
										article={article}
									/>
								))}
							</div>
							<Pagination
								currentPage={currentPage}
								totalPages={totalPages}
								onPageSelect={(page: number) =>
									dispatch(setPage(page))
								}
							/>
						</>
					)}
					{!isLoading && articles.length === 0 && (
						<p className="text-gray-500 my-12">No results found</p>
					)}
				</div>
			</div>
		</Container>
	);
}

export default NewsPage;
