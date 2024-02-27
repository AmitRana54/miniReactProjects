/** @format */

import { useEffect, useState } from "react";

import "./App.css";
import { useRef } from "react";

function App() {
	const array = ["", "", "", ""];
	const [otp, setOpt] = useState(array);

	const ref = [useRef(), useRef(), useRef(), useRef()];

	const handelinput = (e, index) => {
		let val = e.target.value;
		console.log(e.target.value, index);
		if (!Number(val)) {
			return;
		}
		if (index < otp.length - 1) {
			ref[index + 1].current.focus();
		}
		const copyinputs = [...otp];
		copyinputs[index] = val;
		setOpt([...copyinputs]);
	};
	useEffect(() => {
		ref[0].current.focus();
	}, []);

	const submitHandler = (e) => {
    e.preventDefault();
    console.log([otp]);
    alert("you are logged in ")
	};

	return (
		<>
			<div className="app">
        <form onSubmit={submitHandler}>
          
          < div className="inputContainer">
					{array.map((items, index) => (
						<input
							ref={ref[index]}
							value={otp[index]}
							onChange={(e) => handelinput(e, index)}
							type="number"
							key={index}
							maxLength={1}
						/>
					))}</div>
					<button     type="submit"         >submit</button>
				</form>
			</div>
		</>
	);
}

export default App;
