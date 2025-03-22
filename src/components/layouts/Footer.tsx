import Container from "./Container";

function Footer() {
	return (
		<div className="text-white bg-primary border-t border-t-primary-600 py-4 text-[18px] w-full">
			<Container>
				<div className="text-center">
					© {new Date().getFullYear()} All rights reserved.
				</div>
			</Container>
		</div>
	);
}

export default Footer;
