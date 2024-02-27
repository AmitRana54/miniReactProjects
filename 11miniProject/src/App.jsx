/** @format */

import { useState,useEffect } from "react";

import "./App.css";

function App() {
	const btn = [-100, -10, -1, +1, +10, +100];
	const [btns, setBtns] = useState(btn);
	const [counter, setCounter] = useState(0);
	const [event, setEvent] = useState([]);
	const handleClick = (e) => {
		const id = Number(e.target.id);
		setCounter((prev) => prev + id);
		const obj = {
			btn: id,
			value: counter,
		};
		setEvent((prev) => [obj, ...prev]);
  };
  const secCounter = (count) => {
    setCounter(prev=>prev+1);
    
  }
  useEffect(() => {
  const timerid =   setInterval(() => {
      secCounter(counter)
    }, 1000);
    return () => {
      clearInterval(timerid)
    };
  },[counter]);
	
	return (
		<>
			<h1>{counter}</h1>
			<div className="btnContainer" onClick={handleClick}>
				{btns.map((items, index) => (
					<button type="input" id={items} key={items}>
						{items}
					</button>
				))}
				
				
			</div>
			<div className="prevevent">
				{event.map((items) => (
						<h5 key={items.id}>
							{items.btn}: {items.value}{" "}
						</h5>
				))}
			</div>
		</>
	);
}

export default App;
