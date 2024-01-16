import image13 from "./img/image-13.png";
import image12 from "./img/image-12.png";
import image15 from "./img/image-15.png";
import instagram from "./img/instagram.svg";
// import ellipse from "./img/ellipse4.svg";
import ellipse from "./img/Ellipse 5.png";
import dayjs from "dayjs";
import Footer from "../../../components/Layout/Footer/Footer";

import googleLoginButton from "./img/web_light_sq_SU.svg";
import kakaoLoginImg from "./img/kakaoLoginImg.svg";
import googleLoginImg from "./img/googleLoginImg.svg";
import kakaoLoginButton from "./img/kakao_login_medium_narrow.png";

import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "./Login.css";

const Login = () => {
  const supabaseClient = useSupabaseClient();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const dday = leftdays();
  // //메인 화면의 D-day 날짜 변경 코드
  // const calculateDaysLeft = () => {
  //   const targetDate = new Date("2024-12-31");
  //   const currentDate = new Date();
  //   const timeDiff = targetDate - currentDate;
  //   return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  // };

  //소셜 로그인(카카오, 구글)
  async function signInWithKakao() {
    const user = supabaseClient.auth.user(); // 현재 로그인된 사용자 정보 가져오기

    try {
      const { data, error } = await supabaseClient.auth.signInWithOAuth({
        provider: "kakao",
        // options: {
        //   redirectTo:
        //     process.env.REACT_APP_FRONTEND_REDIRECT_URL /* 로그인 후에 redirect 될 페이지 */,
        // },
      });

      if (error) {
        console.error("Kakao OAuth sign-in error:", error.message);
      } else {
        console.log("Kakao OAuth sign-in successful:", data);
      }

      handlePostLogin(user);
    } catch (error) {
      console.error("Unexpected error during Kakao OAuth sign-in:", error);
    }
  }
  async function signInWithGoogle() {
    try {
      const { data, error } = await supabaseClient.auth.signInWithOAuth({
        provider: "google",
        // options: {
        //   redirectTo: process.env.REACT_APP_FRONTEND_REDIRECT_URL,
        // },
      });
      if (error) {
        console.error("Google OAuth sign-in error:", error.message);
      } else {
        console.log("Google OAuth sign-in successful:", data);
      }
      handlePostLogin(user);
    } catch (error) {
      console.error("Unexpected error during Google OAuth sign-in:", error);
    }
  }

  async function handlePostLogin(user) {
    if (!user) {
      return;
    }

    const { data, error } = await supabaseClient
      .from("users")
      .select()
      .eq("user_id", user.id)
      .single();

    if (error || !data) {
      //회원가입 정보 없으면 '/policy'로 이동
      console.log("go to policy");
      //   navigate(process.env.REACT_APP_FRONTEND_REDIRECT_URL);
    } else {
      //회원가입 정보 있으면 '/main'로 이동
      console.log("go to main");
      //   navigate(process.env.REACT_APP_FRONTEND_REDIRECT_URL2);
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
        // navigate("/main");
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
          if (error) {
            console.log(error);
          } else {
            setUser({
              id: value.data.user.id,
              nickname: value.data.user.nickname,
              userId: value.data.user.user_id,
            });
          }
        }
      });
    }
    getUserData();
  }, [supabaseClient]);

  return (
    <div className="componentBackground">
      <div id="page">
        <img src={image13} id="image-13" alt="capsule-1" />
        <img src={image12} id="image-12" alt="capsule-2" />
        <img src={image15} id="image-15" alt="capsule-3" />
        <img src={ellipse} className="title-ellipse" alt="ellipse" />

        <div id="content">
          <div id="login-title">
            TIME
            <br />
            CAPSULE
          </div>
          <div id="description">1년 뒤 나에게 보내는 선물</div>
          <hr id="white-line" />
          <div id="login-dday">D-{dday}</div>
        </div>
        <div id="unsealed-date">Unsealed December 31, 2024</div>

        <div className="sns">
          <div className="sns-google">
            <img
              className="googleButton"
              src={googleLoginImg}
              alt="google-login-button"
              onClick={signInWithGoogle}
            />
          </div>
          <div className="sns-kakao">
            <img
              className="kakaoButton"
              src={kakaoLoginImg}
              alt="kakao-login-button"
              onClick={signInWithKakao}
            />
          </div>
        </div>
        <div className="login-footer"></div>
      </div>
    </div>
  );
};

export default Login;

const leftdays = () => {
  const today = dayjs();
  const endOfYear = dayjs().endOf("year");
  const daysLeft = endOfYear.diff(today, "day");
  if (daysLeft === 0) {
    return "DAY";
  } else {
    return daysLeft;
  }
};
