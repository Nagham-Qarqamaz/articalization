import { Article } from "@Types";
import { formatDate } from "@Utils";
import Button from "./Button";
import FavoriteButton from "./FavoriteButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState, updatePreferences } from "@Redux";

function ArticleCard({ article }: { article: Article }) {
	const preferences = useSelector((state: RootState) => state.preferences);
	const dispatch = useDispatch();

	return (
		<div className="rounded-2xl shadow-lg overflow-hidden flex flex-col justify-between">
			<img
				src={article.img ? article.img : "/images/news-placeholder.jpg"}
				alt={article.title || "Article image"}
				className="w-full h-52 object-cover"
				onError={(e) =>
					(e.currentTarget.src = "/images/news-placeholder.jpg")
				}
			/>

			<div className="p-5 flex flex-col justify-between flex-grow">
				<div>
					<span className="text-xs uppercase font-semibold text-primary-700 flex gap-1 items-center">
						<FavoriteButton
							onClick={() => {
								dispatch(
									updatePreferences({
										type: "category",
										value: article.category,
									})
								);
							}}
							isFavorite={preferences.preferredCategories.includes(
								article.category
							)}
						/>
						{article.category}
					</span>

					<h3 className="text-lg font-semibold text-gray-900 mt-2 line-clamp-2">
						{article.title}
					</h3>

					<p
						dangerouslySetInnerHTML={{
							__html: article.description,
						}}
						className="text-sm text-gray-600 mt-1 line-clamp-3"
					/>
				</div>

				<div>
					<div className="text-xs text-gray-500 mt-3">
						{formatDate(article.publishedAt)}
					</div>
					<div className="text-xs text-gray-500 mt-2">
						<span className="font-semibold flex gap-1 items-center">
							<FavoriteButton
								onClick={() => {
									dispatch(
										updatePreferences({
											type: "source",
											value: article.source,
										})
									);
								}}
								isFavorite={preferences.preferredSources.includes(
									article.source
								)}
							/>
							{article.source}
						</span>
					</div>

					<div className="text-sm text-gray-700 mt-1 flex gap-1 items-start">
						<FavoriteButton
							onClick={() => {
								dispatch(
									updatePreferences({
										type: "author",
										value: article.author,
									})
								);
							}}
							isFavorite={preferences.preferredAuthors.includes(
								article.author
							)}
						/>{" "}
						By <span className="font-medium">{article.author}</span>
					</div>

					<Button
						className="w-full mt-4"
						text="Read More"
						onClick={() =>
							window.open(
								article.url,
								"_blank",
								"noopener noreferrer"
							)
						}
					/>
				</div>
			</div>
		</div>
	);
}

export default ArticleCard;
