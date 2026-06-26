import React, { useState } from "react";

// HogCard: renders a single hog's tile. Clicking the card toggles
// extra details (specialty, weight, greased status, highest medal).
// The Hide Me button asks the parent to hide this hog from view.
const HogCard = ({ hog, hideHog }) => {
	const [showDetails, setShowDetails] = useState(false);

	const toggleDetails = () => setShowDetails((prev) => !prev);

	const handleHide = (e) => {
		e.stopPropagation();
		hideHog(hog.name);
	};

	return (
		<div
			aria-label="hog card"
			className="ui card"
			onClick={toggleDetails}
		>
			<div className="image">
				<img src={hog.image} alt={"Photo of " + hog.name} />
			</div>
			<div className="content">
				<h3>{hog.name}</h3>
				{showDetails && (
					<div className="description">
						<p>Specialty: {hog.specialty}</p>
						<p>Weight: <span>{hog.weight}</span></p>
						<p>{hog.greased ? "Greased" : "Nongreased"}</p>
						<p>Highest Medal: <span>{hog["highest medal achieved"]}</span></p>
					</div>
				)}
			</div>
			<div className="extra content">
				<button className="ui button" onClick={handleHide}>
					Hide Me
				</button>
			</div>
		</div>
	);
};

export default HogCard;
