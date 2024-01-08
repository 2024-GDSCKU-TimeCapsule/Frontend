import "./SelectCapsule.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import WriteCapsule from "./WriteCapsule";

import goal_capsule from "./images/goal_capsule.png";
import memory_capsule from "./images/memory_capsule.png";
import letter_capsule from "./images/letter_capsule.png";

// select one of three capsule images
function SelectCapsule() {
	const [selectedCapsule, setSelectedCapsule] = useState("");

	const handleCapsuleChange = (e) => {
		setSelectedCapsule(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(selectedCapsule);
	};
	//capsule images from ./images
	const capsules = [
		{ id: 1, src: goal_capsule },
		{ id: 2, src: memory_capsule },
		{ id: 3, src: letter_capsule },
	];

	return (
		<div className="select-capsule">
			<h1>Time Capsule</h1>
			<form onSubmit={handleSubmit} className="select-capsule">
				<div className="capsule-list">
					{capsules.map((capsule) => (
						<label key={capsule.id}>
							<input
								type="radio"
								name="capsule"
								value={capsule.src}
								checked={selectedCapsule === capsule.src}
								onChange={handleCapsuleChange}
							/>
							<img
								src={capsule.src}
								alt="capsule"
								style={{
									width: 300,
									height: 300,
								}}
							/>
						</label>
					))}
				</div>
				<button
					type="submit"
					className="make-capsule-button"
					onClick={() => {
						<Link to={`/capsule/${selectedCapsule}`} />;
						console.log(selectedCapsule);
					}}
				>
					타임캡슐 만들기
				</button>
				<div className="under-text-1">Made by GDSC Korea Univ.</div>
				<div className="under-text-2">GDSC.koreauniv</div>
			</form>
		</div>
	);
}

export default SelectCapsule;
