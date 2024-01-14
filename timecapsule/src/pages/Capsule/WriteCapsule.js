import "./WriteCapsule.css";
import React, { useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";

import { ReactComponent as Lock } from "./images/lock.svg";
import { ReactComponent as AddImage } from "./images/image.svg";

import Header from "../../components/Layout/Header/Header";
import Footer from "../../components/Layout/Footer/Footer";

function WriteCapsule() {
	const color = {
		goals: "#EF93B1",
		memory: "#9E93F1",
		letter: "#79D1DA",
	};
	const { capsule_name } = useParams();
	const [title, setTitle] = useState("제목을 작성해주세요. (10자 이내)");
	const [content, setContent] = useState("내용을 입력하세요");
	const [image, setImage] = useState([]);

	const fileInputRef = useRef(null);
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

	const handleAddImageClick = () => {
		fileInputRef.current.click();
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		setImage((prevState) => [...prevState, file]);

		console.log(image);
	};

	return (
		<div className={`write-capsule background-${capsule_name}`}>
			<div>
				<Header backURL="/capsule" />
				<form onSubmit={handleSubmit} className="write-field">
					<div className="title-container">
						<textarea
							className="capsule-title"
							id="title"
							name="title"
							rows={1}
							value={title}
							onChange={handleTitleChange}
						/>
						<button
							type="button"
							className="add-image-button"
							onClick={handleAddImageClick}
						>
							<AddImage fill={color[capsule_name]} />
						</button>
					</div>
					<div style={{ height: "10px" }} />
					<textarea
						id="content"
						name="content"
						className="capsule-content"
						value={content}
						onChange={handleContentChange}
						rows={Math.max(
							Math.ceil((content.length + 1) / 40) +
								content.split("\n").length,
							12
						)}
					/>
					{image.map((file, index) => (
						<div className="image-container">
							<img
								key={index}
								src={URL.createObjectURL(file)}
								alt="image"
								className="upload-image"
							/>
							<button
								type="button"
								className="delete-image-button"
								style={{ background: color[capsule_name] }}
								onClick={() => {
									setImage(
										image.filter((_, i) => i !== index)
									);
								}}
							>
								×
							</button>
						</div>
					))}

					<input
						type="file"
						ref={fileInputRef}
						style={{ display: "none" }}
						onChange={handleImageChange}
					/>

					<button
						type="submit"
						className="submit-button"
						style={{ color: color[capsule_name] }}
					>
						<Lock stroke={color[capsule_name]} />
						캡슐 봉인하기
					</button>
				</form>
			</div>
			<Footer />
		</div>
	);
}

export default WriteCapsule;
