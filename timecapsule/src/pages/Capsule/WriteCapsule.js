import "./WriteCapsule.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function WriteCapsule() {
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
		<div className="make-capsule">
			<h1>Make a capsule</h1>
			<form onSubmit={handleSubmit}>
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
			<Link to="/capsule">Back to capsules</Link>
		</div>
	);
}

export default WriteCapsule;
