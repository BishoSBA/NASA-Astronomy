import { useState } from "react";
import logo from "./logo.svg";
import Carousel from "./components/Carousel";
import "./App.css";
import Button from "react-bootstrap/Button";

const App = () => {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<header className="App-content">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>NASA Astronomy of the Day</h1>
				<form className="">
					<input type={"date"}></input>
					<button type="submit" className="bg-black">
						Check it out
					</button>
				</form>
				{/* <p>
					<button onClick={() => setCount((count) => count + 1)}>
						count is: {count}
					</button>
				</p> */}

				<Carousel></Carousel>
			</header>
		</div>
	);
};

export default App;
