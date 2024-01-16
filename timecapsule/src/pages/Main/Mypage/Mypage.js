import "./Mypage.css";
import Header from "../../../components/Layout/Header/Header";
import Footer from "../../../components/Layout/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const Mypage = () => {
  // const nickname='nickname'
  const email = "email@korea.ac.kr";
  const supabaseClient = useSupabaseClient();
  const navigate = useNavigate();
  const [userID, setUserID] = useState({});
  const [user, setUser] = useState({
    id: "",
    nickname: "",
    userId: "",
  });

  useEffect(() => {
    async function checkLogin() {
      const authInfo = await supabaseClient.auth.getSession();
      const session = authInfo.data.session;

      if (session == null) {
        console.log("log in fail");
        navigate("/login");
      } else {
        console.log("log in success");
      }
    }
    checkLogin();

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
          }
        }
      });
    }
    getUserData();
  }, [supabaseClient]);

  async function signOut() {
    try {
      const { error } = await supabaseClient.auth.signOut();
      if (error) {
        console.error("Sign-out error:", error.message);
      } else {
        console.log("Sign-out successful");
        navigate("/login"); /* 로그인창으로 */
      }
    } catch (error) {
      console.error("Unexpected error during sign-out:", error);
    }
  }

  return (
    <>
      <div className="main-container">
        <Header />
        <div className="nickname">{user.nickname} 님</div>
        <div className="email">{user.email}</div>
        <div className="mypage-buttons">
          <Link to="/nickname">
            <button className="button1 white">닉네임 수정하기</button>
          </Link>
          <button className="button1 light" onClick={signOut}>
            로그아웃
          </button>
        </div>

        <Link to="/withdraw">
          <div className="withdraw">계정 탈퇴</div>
        </Link>
        <div className="main-footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Mypage;
