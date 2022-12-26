import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselComponent(date) {
	const [media, setMedia] = useState({});

	useEffect(() => {
		const getMedia = async (date) => {
			const picture = await fetch(
				`https://api.nasa.gov/planetary/apod?api_key=7y0K6cF0nxuEiNzzGRumswQsrwIxl6oUDtqh5I1Q&date=` +
					date
			);
			setMedia(picture);
		};
	}, [media]);

	return (
		<>
			<Carousel fade onSelect={getMedia()}>
				<Carousel.Item>
					{media.media_type === "image" ? (
						<img className="d-block w-100" src={media.url} alt={media.title} />
					) : (
						<iframe className="d-block w-100" src={media.url} title={media.title} />
					)}

					<Carousel.Caption>
						<h3>{media.title}</h3>
						<p>{media.title}</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://picsum.photos/800/300"
						alt="Second slide"
					/>

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://picsum.photos/800/300"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>

			<h2>{media.title}</h2>
			<p>{media.explanation}</p>
		</>
	);
}

export default CarouselComponent;
