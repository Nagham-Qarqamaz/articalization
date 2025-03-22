import { Button, Container } from "@Components";
import { Link } from "react-router-dom";

function Banner() {
	return (
		<div className="bg-[url('/images/banner.png')] bg-cover bg-right min-h-screen">
			<div className="bg-[#FFFFFF22] min-h-screen flex justify-center items-center pt-16">
				<Container>
					<div className="flex justify-end items-center">
						<div className="md:w-[60%] 2xl:w-[50%] space-y-8">
							<div className="text-center md:text-left font-bold text-[48px] lg:text-[60px] text-primary-800 leading-[1]">
								Articalization
							</div>
							<div className="text-[24px] lg:text-[32px] text-primary-900">
								Stay informed effortlessly! Discover the latest
								news from all your favorite sources in one
								place; personalized, up-to-date, and easy to
								explore.
							</div>
							<div>
								<Link to="/news">
									<Button
										className="text-[24px] bg-black w-full"
										text="Explore News"
										onClick={() => {}}
									/>
								</Link>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
}

export default Banner;
