import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Test.css";
const Test = () => {
  const supabaseClient = useSupabaseClient();
  const [file, setfile] = useState([]);
  const [user, setUser] = useState({
    id: "",
    nickname: "",
    userId: "",
  });
  const [capsule, setCapsule] = useState({
    title: "",
    content: "",
    type: "",
    imagePath: "",
    createdAt: "",
  });
  const navigate = useNavigate();
  const handleAuth = async () => {
    if (supabaseClient) {
      const { error } = await supabaseClient.auth.signOut(); //로그아웃
      if (error) {
        console.error(error);
      } else {
        await signOut();
      }
    }
    if (!supabaseClient) {
      navigate("/");
    }
  };
  async function signOut() {
    try {
      const { error } = await supabaseClient.auth.signOut();
      if (error) {
        console.error("Sign-out error:", error.message);
      } else {
        console.log("Sign-out successful");
        navigate("/"); /*로그인 창*/
      }
    } catch (error) {
      console.error("Unexpected error during sign-out:", error);
    }
  }
  const deleteUser = async () => {
    try {
      navigate("/");
      const { data, error } = await supabaseClient
        .from("users")
        .delete()
        .eq("id", user.id);
      if (error) {
        console.error("Error deleting user:", error.message);
      } else {
        console.log("User deleted successfully");
      }
    } catch (error) {
      console.error("Unexpected error during user deletion:", error);
    }
  };
  useEffect(() => {
    async function checkLogin() {
      const authInfo = await supabaseClient.auth.getSession();
      const session = authInfo.data.session;

      if (session == null) {
        console.log("log in fail");
        navigate("/"); /* 로그인 창 */
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

  async function insertUserData() {
    const { error } = await supabaseClient.from("users").insert([
      {
        user_id: user.userId,
        nickname: "test",
      },
    ]);
    console.log(error);
  }

  async function updateNickname() {
    const { error } = await supabaseClient
      .from("users")
      .update({
        nickname: "update test",
      })
      .eq("user_id", user.userId);

    if (error) {
      console.error("Error updating nickname:", error.message);
    } else {
      console.log("Nickname updated successfully");
      setUser({ ...user, nickname: "update test" });
    }
  }

  async function signOut() {
    try {
      const { error } = await supabaseClient.auth.signOut();
      if (error) {
        console.error("Sign-out error:", error.message);
      } else {
        console.log("Sign-out successful");
        navigate("/"); /*로그인 창*/
      }
    } catch (error) {
      console.error("Unexpected error during sign-out:", error);
    }
  }
  const insertCapsuleData = async (e) => {
    e.preventDefault();

    const filename = `${uuidv4()}/${
      file.name
    }`; /* name 은 영어로 되어있어야함*/
    const { data, imageInsertError } = await supabaseClient.storage
      .from("images")
      .upload(filename, file, {
        public: true,
        cacheControl: "3600",
        upsert: false,
      });

    if (imageInsertError) console.log(imageInsertError);

    const imagePath = data.path;
    const { capsuleInsertError } = await supabaseClient
      .from("capsules")
      .insert([
        {
          user_id: user.userId,
          title: "title test",
          content: "content test",
          type: "goals", // goals | letter | memory 무조건 셋 중 하나로
          imagePath: imagePath,
        },
      ]);
    if (capsuleInsertError) console.log(capsuleInsertError);
  };
  const handleFileSelected = (e) => {
    setfile(e.target.files[0]);
  };

  async function getCapsuleData() {
    const { data, error } = await supabaseClient
      .from("capsules")
      .select("*")
      .eq("user_id", user.userId);
    if (error) console.log(error);
    else {
      const { data: imageData, error: imageError } =
        await supabaseClient.storage
          .from("images")
          .getPublicUrl(data[0].imagePath);
      if (imageError) console.log(imageError);
      else {
        setCapsule({
          title: data[0].title,
          content: data[0].content,
          type: data[0].type,
          imagePath: imageData.publicUrl,
          createdAt: data[0].created_at,
        });
      }
    }
  }

  return (
    <div>
      {supabaseClient && <div>안녕하세요 {user?.nickname}님</div>}
      <div onClick={handleAuth} className="styled-div ">
        {supabaseClient ? "로그아웃" : "로그인"}
      </div>
      <div onClick={() => insertUserData()} className="styled-div ">
        유저 닉네임 추가 테스트
        <br />
        (예시라서 따로 닉네임 입력안해도 됨)
      </div>
      <div onClick={() => updateNickname()} className="styled-div ">
        유저 닉네임 업데이트 테스트 <br />
        (예시라서 따로 닉네임 입력안해도 됨)
      </div>

      <form onSubmit={insertCapsuleData}>
        <input type="file" name="image" onChange={handleFileSelected} />
        <button type="submit">이미지 업로드 테스트</button>
      </form>
      <div onClick={() => getCapsuleData()} className="styled-div ">
        유저 캡슐 정보 가져오기 테스트
      </div>
      <div className="styled-div ">
        만들어진 날짜 (이걸로 Dday 설정) {capsule ? capsule.createdAt : "없음"}
      </div>
      <div>
        <div>Title: {capsule?.title}</div>
        <div>Content: {capsule?.content}</div>
        {capsule.imagePath ? (
          <img src={capsule.imagePath} alt="Capsule" width={200} height={200} />
        ) : (
          <></>
        )}
      </div>
      <div onClick={deleteUser} className="styled-div">
        회원탈퇴
      </div>
    </div>
  );
};

export default Test;
