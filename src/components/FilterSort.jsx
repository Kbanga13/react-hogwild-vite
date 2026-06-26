import React from "react";

// FilterSort: controls for filtering hogs by greased status and
// sorting them by name or weight. State lives in the parent App.
const FilterSort = ({ greasedOnly, setGreasedOnly, sortBy, setSortBy }) => {
	return (
		<div className="filterWrapper">
			<div className="ui form">
				<div className="inline field">
					<input
						type="checkbox"
						id="greasedOnly"
						checked={greasedOnly}
						onChange={(e) => setGreasedOnly(e.target.checked)}
					/>
					<label htmlFor="greasedOnly">Greased Pigs Only?</label>
				</div>
				<div className="inline field">
					<label htmlFor="sortBy">Sort by:</label>
					<select
						id="sortBy"
						value={sortBy}
						onChange={(e) => setSortBy(e.target.value)}
					>
						<option value="">--</option>
						<option value="name">Name</option>
						<option value="weight">Weight</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default FilterSort;
