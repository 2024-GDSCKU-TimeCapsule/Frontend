import "./WriteCapsule.css";
import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

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
	const [content, setContent] = useState(
		" 올해의 목표는 무엇인가요? 터치해 목표를 기록해봐요."
	);
	const [image, setImage] = useState([]);
	const [showPopup, setShowPopup] = useState(false);

	const fileInputRef = useRef(null);
	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleContentChange = (e) => {
		setContent(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setShowPopup(true);
	};

	const handleAddImageClick = () => {
		fileInputRef.current.click();
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		setImage((prevState) => [...prevState, file]);
	};

	return (
		<div className={`write-capsule background-${capsule_name}`}>
			{showPopup && (
				<PopUpComponent
					capsule_name={capsule_name}
					title={title}
					content={content}
					setShowPopup={setShowPopup}
					image={image}
				/>
			)}
			<div>
				<Header
					pageName={capsule_name.toUpperCase()}
					backURL="/capsule"
				/>
				<form onSubmit={handleSubmit} className="write-field">
					<div className="write-capsule-container">
						<div className="title-container">
							<textarea
								className="capsule-title"
								name="title"
								value={title}
								onChange={handleTitleChange}
								rows={1}
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
							name="content"
							className="capsule-content"
							value={content}
							onChange={handleContentChange}
							rows={Math.max(
								Math.ceil((content.length + 1) / 40) +
									content.split("\n").length,
								10
							)}
						/>
						{image.map((file, index) => (
							<div className="image-container">
								<img
									src={URL.createObjectURL(file)}
									alt="uploadimage"
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
					</div>
					<button
						type="submit"
						className="submit-button"
						style={{ color: color[capsule_name] }}
					>
						<Lock
							stroke={color[capsule_name]}
							style={{
								width: "24px",
								height: "24px",
							}}
						/>
						캡슐 봉인하기
					</button>
				</form>
			</div>
			<Footer />
		</div>
	);
}

function PopUpComponent({ capsule_name, title, content, setShowPopup, image }) {
	const [finish, setFinish] = useState(false);
	const [user, setUser] = useState({
		id: "",
		nickname: "",
		userId: "",
	});
	const color = {
		goals: "#F285A8",
		memory: "#7C6EE0",
		letter: "#42BCBC",
	};
	const time = dayjs("2024-12-31").diff(dayjs(), "day");
	const supabaseClient = useSupabaseClient();
	const navigate = useNavigate();

	async function checkLogin() {
		const authInfo = await supabaseClient.auth.getSession();
		const session = authInfo.data.session;

		if (session == null) {
			navigate("/login");
		}
	}

	async function getUserData() {
		await supabaseClient.auth.getUser().then(async (value) => {
			if (value.data?.user) {
				const { data: userData, error } = await supabaseClient
					.from("users")
					.select()
					.eq("user_id", value.data.user.id);
				if (error) {
					console.log(error);
				} else {
					setUser({
						id: userData[0].id,
						nickname: userData[0].nickname,
						userId: userData[0].user_id,
					});
				}
			}
		});
	}
	const insertCapsuleData = async () => {
		const file = image[0] ? image[0] : "";
		const filename = image[0] ? `${uuidv4()}/${file.name}` : "";
		const { data, imageInsertError } = await supabaseClient.storage
			.from("images")
			.upload(filename, file, {
				cacheControl: "3600",
				upsert: false,
			});

		if (imageInsertError) console.log(imageInsertError);

		const imagePath = image[0] ? data.path : "";
		const { capsuleInsertError } = await supabaseClient
			.from("capsules")
			.insert([
				{
					user_id: user.userId,
					title: title,
					content: content,
					type: capsule_name,
					imagePath: imagePath,
				},
			]);
		if (capsuleInsertError) console.log(capsuleInsertError);
	};

	useEffect(() => {
		checkLogin();
		getUserData();
	}, [supabaseClient]);

	return finish ? (
		<div className="pop-up-screen">
			<div className="pop-up-box">
				<div
					className="pop-up-title"
					style={{ color: color[capsule_name] }}
				>
					타임캡슐 봉인 완료!
				</div>
				<div className="pop-up-content">봉인 해제까지 남은 시간</div>
				<div
					className="pop-up-date"
					style={{ color: color[capsule_name] }}
				>
					D-{time}
				</div>
			</div>
			<div className="pop-up-button-container">
				<button
					className="pop-up-button"
					style={{
						background: color[capsule_name],
						border: "none",
					}}
					onClick={() => {
						setFinish(false);
						setShowPopup(false);
						window.location.href = "/mycapsule/";
					}}
				>
					확인
				</button>
			</div>
		</div>
	) : (
		<div className="pop-up-screen">
			<div className="pop-up-box">
				<div
					className="pop-up-title"
					style={{ color: color[capsule_name] }}
				>
					타임캡슐 봉인
				</div>
				<div className="pop-up-content" style={{ fontWeight: "bold" }}>
					2024년 12월 30일까지
				</div>
				<div className="pop-up-content">
					열람 및 수정이 불가능합니다.
				</div>
				<div className="pop-up-content">확정하시겠습니까?</div>
			</div>
			<div className="pop-up-button-container">
				<button
					className="pop-up-button"
					style={{
						background: "none",
						border: "1px solid #fff",
					}}
					onClick={() => setShowPopup(false)}
				>
					뒤로가기
				</button>
				<div style={{ width: "13px" }} />
				<button
					className="pop-up-button"
					style={{
						background: color[capsule_name],
						border: "none",
					}}
					onClick={() => {
						insertCapsuleData();
						setFinish(true);
					}}
				>
					봉인하기
				</button>
			</div>
		</div>
	);
}

export default WriteCapsule;
