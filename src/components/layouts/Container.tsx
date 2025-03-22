import { ReactNode } from "react";

interface ContainerProps {
	children: ReactNode;
}

function Container({ children }: ContainerProps) {
	return (
		<div className="mx-auto px-6 2xl:w-[1536px] xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px]">
			{children}
		</div>
	);
}

export default Container;
