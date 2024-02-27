/** @format */

import { useState } from "react";

import "./App.css";

function App() {
	const TODO = "TODO";
	const [input, setInput] = useState("");
	const [todos, setTodos] = useState([]);
	const handleSubmit = (e) => {
		e?.preventDefault();
		const obj = {
			id: Date.now(),
			value: input,
			satus: "TODO",
		};

		setTodos((prev) => [...prev, obj]);
		console.log(obj);
		setInput("")
	};
	const handelDeltion = (e) => {
		const id = e.target.id;
		const afterDeletion= todos.filter(items => (
			items.id != id
		))
		console.log(afterDeletion);
		setTodos(afterDeletion)
	};

	return (
		<>
			<main>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<button onClick={handleSubmit}>ADD</button>
				</form>
				<div className="list"
					onClick={handelDeltion}       >
					<h1>todos</h1>

					{
						todos.length > 0 && todos.map((items) => (
							<div className="todoItems"
							key={todos.id}
							>
								{items.value}
								<span      key={items.id}   >
									<button   id={items.id} key={items.id}    >
										del
									</button>
								</span>
							</div>

						))


					}
				</div>
			</main>
		</>
	);
}

export default App;
