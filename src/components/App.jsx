import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import FilterSort from "./FilterSort";
import HogForm from "./HogForm";

import hogs from "../porkers_data";

function App() {
	const [hogList, setHogList] = useState(hogs);
	const [hiddenHogs, setHiddenHogs] = useState([]);
	const [greasedOnly, setGreasedOnly] = useState(false);
	const [sortBy, setSortBy] = useState("");

	// Adds a new hog object from the form to the master list.
	const addHog = (newHog) => {
		setHogList((prev) => [...prev, newHog]);
	};

	// Marks a hog as hidden by name so HogList can filter it out
	// without removing it from the underlying data.
	const hideHog = (name) => {
		setHiddenHogs((prev) => [...prev, name]);
	};

	// Apply visibility filter, greased filter, then sort.
	const visibleHogs = hogList
		.filter((hog) => !hiddenHogs.includes(hog.name))
		.filter((hog) => (greasedOnly ? hog.greased : true));

	const sortedHogs = [...visibleHogs].sort((a, b) => {
		if (sortBy === "name") return a.name.localeCompare(b.name);
		if (sortBy === "weight") return a.weight - b.weight;
		return 0;
	});

	return (
		<div className="App">
			<Nav />
			<FilterSort
				greasedOnly={greasedOnly}
				setGreasedOnly={setGreasedOnly}
				sortBy={sortBy}
				setSortBy={setSortBy}
			/>
			<HogForm addHog={addHog} />
			<HogList hogs={sortedHogs} hideHog={hideHog} />
		</div>
	);
}

export default App;
