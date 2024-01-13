import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Login = () => {
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
    console.log(supabaseClient);
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
    <>
      <div>로그인페이지</div>
      <div onClick={signInWithKakao}>카카오 로그인</div>
      <div onClick={signInWithGoogle}>구글 로그인</div>
    </>
  );
};

export default Login;
