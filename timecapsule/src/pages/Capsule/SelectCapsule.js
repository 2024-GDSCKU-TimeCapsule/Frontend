import "./SelectCapsule.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function SelectCapsule() {
	const [capsule_name, setCapsuleName] = useState("");

	const handleCapsuleNameChange = (e) => {
		setCapsuleName(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(capsule_name);
	};

	return (
		<div className="select-capsule">
			<Link to="/">Back to home</Link>
			<h1>Select a capsule</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="capsule_name">Capsule name</label>
				<input
					type="text"
					id="capsule_name"
					name="capsule_name"
					value={capsule_name}
					onChange={handleCapsuleNameChange}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default SelectCapsule;
