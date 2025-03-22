import { Routes, Route } from "react-router-dom";

import { Header, Footer } from "@Components";
import { HomePage, NewsPage } from "@Pages";

function App() {
	return (
		<>
			<Header />
			<div className="min-h-screen flex flex-col justify-between">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/news" element={<NewsPage />} />
				</Routes>
				<Footer />
			</div>
		</>
	);
}

export default App;
