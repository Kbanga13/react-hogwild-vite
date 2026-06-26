import React from "react";
import HogCard from "./HogCard";

// HogList: renders a HogCard for every hog passed in via props.
const HogList = ({ hogs, hideHog }) => {
	return (
		<div className="ui centered cards">
			{hogs.map((hog) => (
				<HogCard key={hog.name} hog={hog} hideHog={hideHog} />
			))}
		</div>
	);
};

export default HogList;
