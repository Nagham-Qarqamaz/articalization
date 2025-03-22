import React from "react";

interface HeartIconProps {
	filled?: boolean;
	size?: number;
	color?: string;
}

const HeartIcon: React.FC<HeartIconProps> = ({
	filled = false,
	size = 20,
	color = "black",
}) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="-1 -1 26 26"
			fill={filled ? color : "none"}
			stroke={color}
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12 23.2l-0.6-0.5C8.7 20.7 0 13.5 0 7.3C0 3.8 2.9 1 6.5 1c2.2 0 4.3 1.1 5.5 2.9l0 0l0 0C13.2 2.1 15.3 1 17.5 1
        C21.1 1 24 3.8 24 7.3c0 6.3-8.7 13.4-11.4 15.5L12 23.2z"
				fill={filled ? color : "none"}
				stroke={color}
			/>
		</svg>
	);
};

export default HeartIcon;
