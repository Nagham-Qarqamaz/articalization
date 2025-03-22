import { Banner } from "@Components";

function HomePage() {
	return (
		<>
			<Banner />
			<section className="py-20 px-8">
				<div className="max-w-[60rem] mx-auto">
					<h2 className="text-3xl sm:text-5xl font-bold text-primary-800 mb-6 text-center">
						About Articalization
					</h2>
					<p className="text-[20px] sm:text-[28px] text-left text-primary-900 leading-relaxed">
						Articalization is your gateway to a seamless and
						personalized news experience. We bring together the
						latest headlines from top sources like The New York
						Times, The Guardian, and NewsAPI, making it easier than
						ever to stay updated. Our intuitive interface allows you
						to filter news based on categories, sources, and dates,
						ensuring that you only see the stories that matter to
						you.
					</p>
				</div>
			</section>
		</>
	);
}

export default HomePage;
