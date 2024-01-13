import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const Login = () => {
  const supabaseClient = useSupabaseClient();
  async function checkLogin() {
    const authInfo = await supabaseClient.auth.getSession();
    const session = authInfo.data.session;
    if (session == null) {
      console.log("log in success");
    } else {
      console.log("log in fail");
    }
  }
  async function signInWithKakao() {
    try {
      const { data, error } = await supabaseClient.auth.signInWithOAuth({
        provider: "kakao",
        options: {
          redirectTo: process.env.REACT_APP_REDIRECT_URL,
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

  async function signOut() {
    try {
      const { error } = await supabaseClient.auth.signOut();
      if (error) {
        console.error("Sign-out error:", error.message);
      } else {
        console.log("Sign-out successful");
      }
    } catch (error) {
      console.error("Unexpected error during sign-out:", error);
    }
  }
  return (
    <>
      <div>로그인페이지</div>
      <div onClick={signInWithKakao}>카카오 로그인</div>
      <div onClick={signOut}>로그아웃</div>
      <div>구글 로그인</div>
    </>
  );
};

export default Login;
