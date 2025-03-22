import HeartIcon from "./HeartIcon";

interface FavoriteButtonProps {
	isFavorite: boolean;
	onClick: () => void;
}

function FavoriteButton({ isFavorite, onClick }: FavoriteButtonProps) {
	return (
		<button onClick={onClick}>
			<HeartIcon
				filled={isFavorite}
				color={isFavorite ? "#EE1111" : "grey"}
			/>
		</button>
	);
}

export default FavoriteButton;
