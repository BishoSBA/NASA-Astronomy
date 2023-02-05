import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Image from "react-bootstrap/Image";

function Carousel({ stringDate, media, isLoading }) {
	if (media) {
		return (
			<>
				<div className="carousel">
					{isLoading == true ? (
						<Spinner animation="border" role="status" color="white">
							<span className="visually-hidden">Loading...</span>
						</Spinner>
					) : (
						<div>
							<div className="Image">
								{media.media_type === "image" ? (
									<img className="media" src={media.url} alt={media.title} />
								) : (
									<iframe className="media" src={media.url} title={media.title} />
								)}
							</div>
							<div className="description">
								<h3>{media.title}</h3>
								<p>{media.explanation}</p>
							</div>
						</div>
					)}
				</div>
			</>
		);
	} else {
		return (
			<Spinner animation="border" role="status">
				<span className="visually-hidden">Loading...</span>
			</Spinner>
		);
	}
}

export default Carousel;

// import Carousel from "react-bootstrap/Carousel";

// function Carousel({ stringDate, media, isLoading }) {
// 	const images = {
// 		"2023-02-03": (
// 			<Carousel.Item>
// 				<img
// 					className="d-block w-100"
// 					src="https://via.placeholder.com/500x500"
// 					alt="First slide"
// 				/>
// 				<Carousel.Caption>
// 					<h3>Second slide label</h3>
// 					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
// 				</Carousel.Caption>
// 			</Carousel.Item>
// 		),
// 		"2023-02-04": (
// 			<Carousel.Item>
// 				<img
// 					className="d-block w-100"
// 					src="https://via.placeholder.com/600x600"
// 					alt="Second slide"
// 				/>
// 				<Carousel.Caption>
// 					<h3>Second slide label</h3>
// 					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
// 				</Carousel.Caption>
// 			</Carousel.Item>
// 		),
// 	};
// }
