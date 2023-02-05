import React, { useState } from "react";
import { Form, Button, Carousel } from "react-bootstrap";

const DateForm = () => {
	const [date, setDate] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("Selected date: ", date);
	};

	const images = {
		"2023-02-03": (
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://via.placeholder.com/500x500"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
		),
		"2023-02-04": (
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://via.placeholder.com/600x600"
					alt="Second slide"
				/>
				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
		),
	};

	return (
		<div>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="formDate">
					<Form.Label>Select a date:</Form.Label>
					<Form.Control
						type="date"
						value={date}
						onChange={(e) => setDate(e.target.value)}
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>

			<Carousel>
				{images[date] ? images[date] : "https://via.placeholder.com/700x700"}
			</Carousel>
		</div>
	);
};

export default DateForm;
