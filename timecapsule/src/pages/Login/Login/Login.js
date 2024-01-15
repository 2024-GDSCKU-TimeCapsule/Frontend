import image13 from "./img/image-13.png";
import image12 from "./img/image-12.png";
import image15 from "./img/image-15.png";
import instagram from "./img/instagram.svg";
import ellipse from "./img/ellipse4.svg";

import googleLoginButton from "./img/web_light_sq_SU.svg";
import googleLoginImg from "./img/googleLoginImg.svg";
import kakaoLoginButton from "./img/kakao_login_medium_narrow.png";

import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import "./Login.css";
import SupabaseProvider from "../../../SupabaseProvider";
const Login = () => {
  //메인 화면의 D-day 날짜 변경 코드
  const calculateDaysLeft = () => {
    const targetDate = new Date("2024-12-31");
    const currentDate = new Date();
    const timeDiff = targetDate - currentDate;
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  };

  const supabaseClient = useSupabaseClient();
  const navigate = useNavigate();
  async function signInWithKakao() {
    try {
      const { data, error } = await supabaseClient.auth.signInWithOAuth({
        provider: "kakao",
        options: {
          redirectTo:
            process.env
              .REACT_APP_FRONTEND_REDIRECT_URL /* 로그인 후에 redirect 될 페이지 */,
        },
      });

      if (error) {
        console.error("Kakao OAuth sign-in error:", error.message);
      } else {
        console.log("Kakao OAuth sign-in successful:", data);
      }
    } catch (error) {
      console.error("Unexpected error during Kakao OAuth sign-in:", error);
    }
  }
  async function signInWithGoogle() {
    try {
      console.log("잘 읽어오는지 테스트");
      console.log(process.env.useSupabaseClient);
      const { data, error } = await supabaseClient.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: process.env.REACT_APP_FRONTEND_REDIRECT_URL,
        },
      });
      if (error) {
        console.error("Google OAuth sign-in error:", error.message);
      } else {
        console.log("Google OAuth sign-in successful:", data);
      }
    } catch (error) {
      console.error("Unexpected error during Google OAuth sign-in:", error);
    }
  }
  useEffect(() => {
    async function checkLogin() {
      const authInfo = await supabaseClient.auth.getSession();
      const session = authInfo.data.session;
      if (session == null) {
        console.log("로그인 해주세요");
      } else {
        console.log("이미 로그인 되었습니다");
        navigate("/main");
      }
    }
    checkLogin();
  }, [supabaseClient]);

  return (
    <div className="componentBackground">
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

        <img
          className="googleButton"
          src={googleLoginImg}
          alt="google-login-button"
          onClick={signInWithGoogle}
        />
        <img
          className="kakaoButton"
          src={kakaoLoginButton}
          alt="kakao-login-button"
          onClick={signInWithKakao}
        />
        {/* <div className="socialLoginButton" onClick={signInWithKakao}>
          카카오 로그인
        </div>
        <div className="socialLoginButton" onClick={signInWithGoogle}>
          구글 로그인
        </div> */}
        <div id="footer">
          <div id="MadeBy">Made by GDSC Korea Univ.</div>
          <div id="link">
            <a href="https://www.instagram.com/gdsc.koreauniv/" id="insta-link">
              <img src={instagram} id="instagram" alt="instagram" />
              <div style={{ width: "2px" }}></div>
              GDSC.koreauniv
            </a>
            <div style={{ width: "10px" }}></div>
            <a href="https://www.instagram.com/gdscku.project/" id="insta-link">
              <img src={instagram} id="instagram" alt="instagram" />
              <div style={{ width: "2px" }}></div>
              GDSCKU.project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
