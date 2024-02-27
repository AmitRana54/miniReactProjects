/** @format */

import { useState } from "react";
import "./App.css";

function App() {
	const [rating, setRating] = useState(0);

	return (
		<>
			<main>
			<h1
				className="heading"
			>
				Star Rating
			</h1>
			<div className="div">
				{[1, 2, 3, 4, 5].map((nums) => (
					<button
						onClick={() => setRating(nums)}
						className="btn"
						key={nums}
						id="nums"
					>
						<span className={` star  ${nums <= rating ? "set" : "inset"}`}>
							&#9734;
						</span>
					</button>
				))}
			</div>
			</main>

		</>
	);
}

export default App;
