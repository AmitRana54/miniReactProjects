/** @format */

import React from "react";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
function App() {
	const [isxTurn, setIsxTurn] = useState(true);
  const [matrix, setMatrix] = useState(Array(9).fill(null));
  const [isStart, setIsStart] = useState(false)
  const arr = [];
 
	const handleClick = (e) => {
		const id = e.target.id;
    console.log(id);
    if (arr.length > 0 && arr[arr.length - 1] == id) {
      alert("helloo")
      return
    }
    arr.push(id);
    console.log(arr)
      const copyMatrix = [...matrix];
      copyMatrix[id] = isxTurn ? "x" : "o";
      setMatrix(copyMatrix);
      setIsxTurn((prev) => !prev);
	};
	const decideWinner = () => {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[3, 4, 5],
			[6, 7, 8],
      [2, 4, 6],
      [0,4,8], 
		];
    for (let index = 0; index < lines.length; index++) {
      const [a, b, c] = lines[index];
      if (matrix[a] &&  matrix[a] == matrix[b] && matrix[a] == matrix[c]) {
        alert(`Player ${matrix[b]} won the game`);
      }
		}
	};
  useEffect(() => {
     decideWinner();
	}, [matrix]);

	return (
		<>
			<main>
				<div className="btnContainer" onClick={handleClick}>
					{matrix.map((items, index) => {
						return (
							<button key={index} id={index}>
								{items}
							</button>
						);
					})}
				</div>
				<div className="player"> {isxTurn ? "x " : "o"} </div>
			</main>
		</>
	);
}

export default App;
