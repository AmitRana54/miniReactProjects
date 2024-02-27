/** @format */

import { useEffect, useState } from "react";

import "./App.css";

function App() {
	const imgArray = [
		{
			id: 1,
			link: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600",
		},
		{
			id: 1,
			link: "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600",
		},
		{
			id: 1,
			link: "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600",
		},
		{
			id: 1,
			link: "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=600",
		},
		{
			id: 1,
			link: "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=600",
		},
	];

	const [image, setImage] = useState(imgArray);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const side = setInterval(() => {
			handeler("right");
		}, 3000);

		return () => {
			clearInterval(side);
		};
	}, [index]);

	const handeler = (dir) => {
		const lastIndex = image.length - 1;
		if (dir == "left") {
			if (index == 0) {
				setIndex(lastIndex);
			} else {
				setIndex((idx) => idx - 1);
			}
		} else if (dir == "right") {
			if (lastIndex == index) {
				setIndex(0);
			} else setIndex((idx) => idx + 1);
		}
	};

	return (
		<>
			<header>
				<h1>Image transition</h1>
			</header>
			<main>
				<button id="left" onClick={() => handeler("left")}>
					{"<"}
				</button>
				{<img src={image[index].link} alt="not found" />}
				<button id="right" onClick={() => handeler("right")}>
					{">"}
				</button>
			</main>
		</>
	);
}

export default App;
