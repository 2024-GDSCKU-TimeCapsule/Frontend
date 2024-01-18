import "./Nickname.css";
import Header from "../../../components/Layout/Header/Header";
import Footer from "../../../components/Layout/Footer/Footer";
import useAuth from "../../../components/Data/useAuth";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
const Nickname = () => {
	const supabaseClient = useSupabaseClient();
	const { checkLogin } = useAuth();
	const navigate = useNavigate();

	const [user, setUser] = useState({
		id: "",
		nickname: "",
		userId: "",
	});
	const [newUserNickname, setNewUserNickname] = useState("");
	const [currentNickname, setCurrentNickname] = useState("");

	useEffect(() => {
		checkLogin({
			loginFailFunc: () => {
				navigate("/login");
			},
		});

		async function getUserData() {
			await supabaseClient.auth.getUser().then(async (value) => {
				if (value.data?.user) {
					const { data: userData, error } = await supabaseClient
						.from("users")
						.select()
						.eq("user_id", value.data.user.id);

					// console.log('Supabase Data:', userData);
					// console.log(value.data.user);
					if (error) {
						console.log(error);
					} else {
						setUser({
							id: userData[0].id,
							nickname: userData[0].nickname,
							userId: userData[0].user_id,
						});
						setCurrentNickname(userData[0].nickname); // 현재 닉네임 설정
					}
				}
			});
		}
		getUserData();
	}, [supabaseClient]);

	const handleNicknameChange = (e) => {
		setNewUserNickname(e.target.value); // 새로운 닉네임 업데이트
	};

	async function updateNickname(nickname) {
		const { error } = await supabaseClient
			.from("users")
			.update({
				nickname: nickname,
			})
			.eq("user_id", user.userId);

		if (error) {
			console.error("Error updating nickname:", error.message);
		} else {
			console.log("Nickname updated successfully");
			// 다른 처리가 필요하면 여기에 추가
		}
	}

	const handleSubmit = () => {
		const nicknameToUpdate =
			newUserNickname.trim() === "" ? currentNickname : newUserNickname;
		updateNickname(nicknameToUpdate);
		navigate("/mypage");

		// 필요한 경우 추가 처리
	};

	return (
		<div className="main-container">
			<Header />
			<div className="main-modal">
				<div className="title">닉네임설정</div>
				<div>
					<input
						type="text"
						value={newUserNickname} // 닉네임 입력 값으로 설정
						onChange={handleNicknameChange}
						placeholder={currentNickname} // placeholder에 현재 닉네임 설정
					></input>
				</div>
				<div className="buttons">
					<button
						type="submit"
						className="button2 white"
						onClick={handleSubmit}
					>
						확인
					</button>
					<button
						type="button"
						className="button2"
						onClick={() => {
							window.location.href = "/mypage";
						}}
					>
						취소
					</button>
				</div>
			</div>
			{/* <div class="withdraw">계정 탈퇴</div> */}
			<div className="main-footer">
				<Footer />
			</div>
		</div>
	);
};

export default Nickname;
