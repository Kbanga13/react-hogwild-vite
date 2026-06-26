import React, { useState } from "react";

// HogForm: controlled form for adding a new hog. On submit, the
// completed hog object is sent to App via the addHog callback.
const HogForm = ({ addHog }) => {
	const initialState = {
		name: "",
		weight: "",
		specialty: "",
		greased: false,
		"highest medal achieved": "",
		image: "",
	};
	const [formData, setFormData] = useState(initialState);

	const handleChange = (e) => {
		const { name, type, value, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addHog({ ...formData, weight: Number(formData.weight) || formData.weight });
		setFormData(initialState);
	};

	return (
		<form className="ui form" onSubmit={handleSubmit}>
			<div className="field">
				<label htmlFor="name">Name:</label>
				<input
					id="name"
					name="name"
					type="text"
					value={formData.name}
					onChange={handleChange}
				/>
			</div>
			<div className="field">
				<label htmlFor="weight">Weight:</label>
				<input
					id="weight"
					name="weight"
					type="number"
					value={formData.weight}
					onChange={handleChange}
				/>
			</div>
			<div className="field">
				<label htmlFor="specialty">Specialty:</label>
				<input
					id="specialty"
					name="specialty"
					type="text"
					value={formData.specialty}
					onChange={handleChange}
				/>
			</div>
			<div className="field">
				<label htmlFor="medal">Highest Medal Achieved:</label>
				<input
					id="medal"
					name="highest medal achieved"
					type="text"
					value={formData["highest medal achieved"]}
					onChange={handleChange}
				/>
			</div>
			<div className="field">
				<label htmlFor="image">Image URL:</label>
				<input
					id="image"
					name="image"
					type="text"
					value={formData.image}
					onChange={handleChange}
				/>
			</div>
			<div className="inline field">
				<input
					id="greased"
					name="greased"
					type="checkbox"
					checked={formData.greased}
					onChange={handleChange}
				/>
				<label htmlFor="greased">Greased?</label>
			</div>
			<button className="ui button" type="submit">Add Hog</button>
		</form>
	);
};

export default HogForm;
