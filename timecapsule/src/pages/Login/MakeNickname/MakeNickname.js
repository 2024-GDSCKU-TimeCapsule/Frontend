import image13 from "./img/image-13.png";
import image12 from "./img/image-12.png";
import image15 from "./img/image-15.png";
import instagram from "./img/instagram.svg";
import ellipse from "./img/ellipse4.svg";

import Footer from "../../../components/Layout/Footer/Footer";

import googleLoginButton from "./img/web_light_sq_SU.svg";
import kakaoLoginImg from "./img/kakaoLoginImg.svg";
import googleLoginImg from "./img/googleLoginImg.svg";
import kakaoLoginButton from "./img/kakao_login_medium_narrow.png";

import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useEffect, useState } from "react";

import "./MakeNickname.css";

import { useParams, useNavigate } from "react-router-dom";

const MakeNickname = () => {
	//메인 화면의 D-day 날짜 변경 코드
	const calculateDaysLeft = () => {
		const targetDate = new Date("2024-12-31");
		const currentDate = new Date();
		const timeDiff = targetDate - currentDate;
		return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
	};

	const supabaseClient = useSupabaseClient();
	const navigate = useNavigate();
	const [user, setUser] = useState({
		id: "",
		nickname: "",
		userId: "",
	});
	const [newUserNickname, setNewUserNickname] = useState("");

	async function insertUserData() {
		const { error } = await supabaseClient.from("users").insert([
			{
				user_id: user.userId, // 필수값
				nickname: newUserNickname, // 수정된 부분
			},
		]);
		if (error) {
			console.error("Error:", error);
		} else {
			// 성공적으로 닉네임이 설정되면 메인 페이지로 이동 또는 다른 로직 수행
			console.log(newUserNickname);
			navigate("/main");
		}
	}

	async function checkLogin() {
		const authInfo = await supabaseClient.auth.getSession();
		const session = authInfo.data.session;

		if (session == null) {
			navigate("/login");
		} else {
			console.log("session", session);
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
					console.log("error", error);
				} else {
					setUser({
						id: value.data.user.id,
						nickname: value.data.user.nickname,
						userId: value.data.user.id,
					});
					console.log("userData", userData);
					console.log("value.data.user", value.data);
				}
			}
		});
	}

	//처음 렌더링 시 정보 받아옴
	useEffect(() => {
		checkLogin();
		getUserData();
		console.log("user", user);
	}, [supabaseClient]);

	return (
		<div className="componentBackground">
			<div className="backgroundDark"></div>
			<div id="page">
				<img src={image13} id="image-13" alt="capsule-1" />
				<img src={image12} id="image-12" alt="capsule-2" />
				<img src={image15} id="image-15" alt="capsule-3" />
				<img src={ellipse} id="ellipse" alt="ellipse" />

				<div id="content">
					<div id="title">
						TIME
						<br />
						CAPSULE
					</div>
					<div id="description">1년 뒤 나에게 보내는 선물</div>
					<hr id="white-line" />
					<div id="d-day">D-{calculateDaysLeft()}</div>
				</div>
				<div id="unsealed-date">Unsealed December 31, 2024</div>

				<div className="sns">
					<div className="sns-google">
						<img
							className="googleButton"
							src={googleLoginImg}
							alt="google-login-button"
						/>
					</div>
					<div className="sns-kakao">
						<img
							className="kakaoButton"
							src={kakaoLoginImg}
							alt="kakao-login-button"
						/>
					</div>
				</div>
				<Footer className="login-footer" />
			</div>

			<div className="nickname-modal">
				<form>
					<div className="form-container">
						<div className="modal-title">닉네임 설정</div>
						<div>
							<input
								type="text"
								name="nickname"
								id="nickname"
								className="nicknameInput"
								value={newUserNickname}
								onChange={(e) =>
									setNewUserNickname(e.target.value)
								}
							/>
						</div>
						<div className="check">
							<div className="checkin">취소</div>
							<div className="checkin" onClick={insertUserData}>
								확인
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default MakeNickname;
