function Loading() {
	return (
		<div className="flex space-x-2 justify-center items-center h-20">
			<div className="w-4 h-4 bg-primary-200 rounded-full animate-bounce [animation-delay:-0.2s]"></div>
			<div className="w-4 h-4 bg-primary-500 rounded-full animate-bounce [animation-delay:-0.1s]"></div>
			<div className="w-4 h-4 bg-primary-800 rounded-full animate-bounce"></div>
		</div>
	);
}

export default Loading;
