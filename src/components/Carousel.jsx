import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Image from "react-bootstrap/Image";

function Carousel({ media, isLoading }) {
	return (
		<>
			<div className="carousel">
				{isLoading == false && media ? (
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
				) : (
					<Spinner animation="border" role="status" color="white">
						<span className="visually-hidden">Loading...</span>
					</Spinner>
				)}
			</div>
		</>
	);
}
export default Carousel;
