import { useState } from "react";
import logo from "./logo.svg";
import CarouselComponent from "./components/CarouselComponent";
import "./App.css";

const App = () => {
	const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

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
				{/* <p>
					<button onClick={() => setCount((count) => count + 1)}>
						count is: {count}
					</button>
				</p> */}
			</header>
			<div className="App-content">
				<CarouselComponent date></CarouselComponent>
			</div>
		</div>
	);
};

export default App;
