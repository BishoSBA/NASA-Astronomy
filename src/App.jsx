import { useState, useEffect } from "react";
import logo from "./logo.svg";
import Carousel from "./components/Carousel";
import "./App.css";
import Button from "react-bootstrap/Button";

const App = () => {
	const [date, setDate] = useState(new Date());
	const [media, setMedia] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [stringDate, setStringDate] = useState(date.toISOString().split("T")[0]);

	useEffect(() => {
		getMedia();
	}, {});

	const getMedia = async () => {
		const picture = await fetch(
			`https://api.nasa.gov/planetary/apod?api_key=7y0K6cF0nxuEiNzzGRumswQsrwIxl6oUDtqh5I1Q&date=` +
				stringDate
		);

		console.log("media");
		setMedia(await picture.json());
		if (await picture) setIsLoading(false);
	};

	const changeDate = (value) => {
		setDate(value);
		setStringDate(date.toISOString().split("T")[0]);
		setIsLoading(true);
		getMedia();
	};

	const changeDateByOne = (value) => {
		let tempDate = date;
		tempDate.setDate(date.getDate() + value);
		setDate(tempDate);
		setStringDate(date.toISOString().split("T")[0]);
		setIsLoading(true);
		getMedia();
	};

	console.log("normal app");

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>NASA Space API</h1>

				<form className="">
					<input id="dateInput" type={"date"} defaultValue={stringDate}></input>
					<Button
						variant="light"
						onClick={(e) =>
							changeDate(new Date(document.getElementById("dateInput").value))
						}
						type="button"
						className="bg-blue"
					>
						View Date
					</Button>
				</form>
			</header>
			<div className="App-content">
				<div className="buttons">
					<Button
						variant="light"
						onClick={() => changeDateByOne(-1)}
						type="button"
						className="bg-red"
					>
						Previous
					</Button>
					<Button
						variant="light"
						onClick={() => changeDateByOne(1)}
						type="button"
						className="bg-blue"
					>
						Next
					</Button>
				</div>
				<Carousel media={media} isLoading={isLoading}></Carousel>
			</div>
		</div>
	);
};

export default App;
