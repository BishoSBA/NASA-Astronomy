import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

function Carousel({ stringDate }) {
	const [media, setMedia] = useState();
	console.log(stringDate);
	useEffect(() => {
		const getMedia = async () => {
			const picture = await fetch(
				`https://api.nasa.gov/planetary/apod?api_key=7y0K6cF0nxuEiNzzGRumswQsrwIxl6oUDtqh5I1Q&date=` +
					stringDate
			);
			setMedia(await picture.json());
		};
		getMedia();
	}, [stringDate]);

	if (media) {
		return (
			<>
				<div className="carousel">
					{media.media_type === "image" ? (
						<img className="d-block w-100" src={media.url} alt={media.title} />
					) : (
						<iframe className="d-block w-100" src={media.url} title={media.title} />
					)}
				</div>
				<div>
					<h3>{media.title}</h3>
					<p>{media.explanation}</p>
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
