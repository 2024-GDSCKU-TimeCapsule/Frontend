import { useSupabaseClient } from "@supabase/auth-helpers-react";

function useAuth() {
  // Supabase 클라이언트를 가져옵니다.
  const supabaseClient = useSupabaseClient();

  // 현재 로그인 상태를 확인하는 함수
  async function checkLogin({
    loginFailFunc = () => {}, // 로그인 실패 시 실행할 함수 (기본값은 빈 함수)
    loginSuccessFunc = () => {}, // 로그인 성공 시 실행할 함수 (기본값은 빈 함수)
  }) {
    // 현재 세션 정보를 가져옵니다.
    const authInfo = await supabaseClient.auth.getSession();
    const session = authInfo.data.session;

    // 세션이 없다면 로그인 실패 함수를 실행, 있으면 로그인 성공 함수를 실행
    if (session == null) {
      loginFailFunc();
    } else {
      loginSuccessFunc();
    }
  }

  // 사용자 데이터를 가져오는 함수
  async function getUserData({
    getDataFailFunc = () => {}, // 데이터 가져오기 실패 시 실행할 함수 (기본값은 빈 함수)
    getDataSuccessFunc = () => {}, // 데이터 가져오기 성공 시 실행할 함수 (기본값은 빈 함수)
  }) {
    // 현재 로그인한 사용자 정보를 가져옵니다.
    await supabaseClient.auth.getUser().then(async (value) => {
      // 사용자가 존재하면
      if (value.data?.user) {
        // Supabase의 'users' 테이블에서 사용자 데이터를 가져옵니다.
        const { data: userData, error } = await supabaseClient
          .from("users")
          .select()
          .eq("user_id", value.data.user.id);

        // 오류가 발생하면 실패 함수를 실행, 아니면 성공 함수를 실행하고 사용자 데이터를 전달
        if (error) {
        //   console.log(error);
          getDataFailFunc();
        } else {
          getDataSuccessFunc(userData);
        }
      }
    });
  }
  // 이 훅을 사용하는 컴포넌트에 함수들을 제공
  return {
    checkLogin,
    getUserData,
  };
}

export default useAuth;
