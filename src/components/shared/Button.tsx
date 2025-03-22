interface ButtonProps {
	text: string;
	variant?: "filled" | "outlined";
	disabled?: boolean;
	onClick: () => void;
	className?: string;
}

function Button({
	text,
	variant = "filled",
	disabled,
	onClick,
	className = "",
}: ButtonProps) {
	return (
		<button
			className={`text-center px-4 rounded-lg transition ${
				variant == "filled"
					? "py-2 bg-primary text-white"
					: "text-primary-500 font-semibold text-[18px] py-1 border-2 border-primary"
			} ${
				!disabled &&
				(variant == "filled"
					? "hover:bg-primary-400"
					: "hover:text-primary-300 hover:border-primary-300")
			} ${className}`}
			onClick={onClick}
			disabled={disabled}
		>
			{text}
		</button>
	);
}

export default Button;
