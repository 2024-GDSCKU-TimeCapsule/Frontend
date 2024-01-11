import "./WriteCapsule.css";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import backButton from "./images/back_button.svg";

function WriteCapsule() {
	const { capsule_name } = useParams();
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleContentChange = (e) => {
		setContent(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(title, content);
	};

	return (
		<div className="write-capsule">
			<div className={`background-${capsule_name}`}>
				<form onSubmit={handleSubmit} className="write-field">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						id="title"
						name="title"
						value={title}
						onChange={handleTitleChange}
					/>
					<label htmlFor="content">Content</label>
					<textarea
						id="content"
						name="content"
						value={content}
						onChange={handleContentChange}
					/>
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
}

export default WriteCapsule;
