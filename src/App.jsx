import { useState } from "react";
import logo from "./logo.svg";
import Carousel from "./components/Carousel";
import "./App.css";
import Button from "react-bootstrap/Button";

const App = () => {
	const [date, setDate] = useState(new Date());

	const changeDate = (value) => {
		let tempDate = date;
		tempDate.setDate(date.getDate() + value);
		setDate(tempDate);
		console.log(date);
	};

	let stringDate = date.toISOString().split("T")[0];
	console.log(stringDate);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>NASA Astronomy of the Day</h1>

				<form className="">
					<input id="dateInput" type={"date"}></input>
					<button
						onClick={(e) => setDate(e.target.dateInput.value)}
						type="button"
						className="bg-black"
					>
						Check it out
					</button>
				</form>
			</header>
			<div className="App-content">
				<Button
					variant="danger"
					onClick={() => changeDate(-1)}
					type="button"
					className="bg-red"
				>
					Previous
				</Button>
				<Button
					variant="primary"
					onClick={() => changeDate(1)}
					type="button"
					className="bg-blue"
				>
					Next
				</Button>
			</div>
			<Carousel stringDate={stringDate}></Carousel>
		</div>
	);
};

export default App;
