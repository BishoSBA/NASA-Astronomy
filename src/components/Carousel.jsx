import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

function Carousel({ stringDate, media, isLoading }) {
	if (media) {
		return (
			<>
				{isLoading == true ? (
					<Spinner animation="border" role="status" color="white">
						<span className="visually-hidden">Loading...</span>
					</Spinner>
				) : (
					<div>
						<div className="carousel">
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
