import Header from "../../../components/Layout/Header/Header";
import ACapsule from "./ACapsule";
import "./Mycapsule2.css";
import { ReactComponent as Instagram } from "./instagram.svg";
import dayjs from "dayjs";
import { useParams, useNavigate } from "react-router-dom";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import Footer from "../../../components/Layout/Footer/Footer";
const Mycapsule2 = () => {
  const supabaseClient = useSupabaseClient();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const [user, setUser] = useState({
    id: "",
    nickname: "",
    userId: "",
  });
  const [capsule, setCapsule] = useState({
    content: "test",
    created_at: "2024-01-13T07:38:25.618125+00:00",
    expires_at: "2024-12-31T12:00:00+00:00",
    id: 1,
    imagePath: "8c6de9de-c288-41f0-870c-8e00dc4e177b-test.png",
    title: "title test",
    type: "goals",
    user_id: "4c70166c-1ae4-4ce0-bd35-56b1acd11874",
  });

  const dday = leftdays();
  const showModalAnimation = showModal ? "slideIn" : "slideOut";
  const textColor = "#D6D6D6";
  const [capsules, setCapsules] = useState([]);

  async function checkLogin() {
    const authInfo = await supabaseClient.auth.getSession();
    const session = authInfo.data.session;

    if (session == null) {
      navigate("/login");
    }
  }

  async function getCapsuleData() {
    console.log("유저아이디", user.userId);
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
        console.log("data", data);
        setCapsules(data);
        // setCapsule({
        //   title: data[0].title,
        //   content: data[0].content,
        //   type: data[0].type,
        //   imagePath: imageData.publicUrl,
        //   createdAt: data[0].created_at,
        // });
      }
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

  // 사용자 데이터를 불러오는 useEffect
  useEffect(() => {
    checkLogin();
    getUserData();
  }, [supabaseClient]);

  // 캡슐 데이터를 불러오는 useEffect
  useEffect(() => {
    if (user.userId) {
      getCapsuleData();
    }
  }, [user.userId]); // user.userId가 변경될 때마다 실행

  console.log(user);
  console.log("data가져와졌을까", capsules);
  return (
    <div className="mycapsule2-container">
      <Header pageName="MY CAPSULE" backURL="/main" />
      <div className="year-mycapsule2">2024</div>
      <div className="capsule-title goals-title">GOALS</div>
      <div className="capsuleDiv goalsCapsulesDiv">
        {capsules.map((capsule, index) => {
          if (capsule.type === "goals") {
            return (
              <ACapsule
                onClick={() => setShowModal(true)}
                key={index}
                type="goals"
                title={capsule.title}
              />
            );
          }
        })}
      </div>
      <div className="capsule-title memory-title">MEMORY</div>
      <div className="capsuleDiv memoryCapsulesDiv">
        {capsules.map((capsule, index) => {
          if (capsule.type === "memory") {
            return (
              <ACapsule
                onClick={() => setShowModal(true)}
                key={index}
                type="memory"
                title={capsule.title}
              />
            );
          }
        })}
      </div>
      <div className="capsule-title letter-title">LETTER</div>
      <div className="capsuleDiv letterCapsulesDiv">
        {capsules.map((capsule, index) => {
          if (capsule.type === "letter") {
            return (
              <ACapsule
                onClick={() => setShowModal(true)}
                key={index}
                type="letter"
                title={capsule.title}
              />
            );
          }
        })}
      </div>
      <div className="footer-div-mycapsule2">
        <div
          className="MadeBy-mycapsule2"
          style={{
            color: textColor,
          }}
        >
          Made by GDSC Korea Univ.
        </div>
        <div className="instagram-display">
          {/* <Instagram fill={textColor} className="mycapsule2-instagram" /> */}
          <div style={{ width: "2px" }}></div>
          GDSC.koreauniv
        </div>
        <div className="instagram-display">
          {/* <Instagram fill={textColor} className="mycapsule2-instagram" /> */}
          <div style={{ width: "2px" }} className="footer2-gdscku"></div>
          GDSCKU.project
        </div>
      </div>

      <div>
        {showModal && (
          <div className="modalBackground-mycapsule2">
            <div
              className="mycapsule2-modal-container"
              style={{
                animationName: showModalAnimation,
              }}
            >
              <div>
                <div className="mycapsule2-modal-title">봉인된 타임캡슐</div>
                <div className="mycapsule2-modal-content">
                  봉인 해제까지 남은 시간
                </div>
                <div className="mycapsule2-modal-dday">D - {dday}</div>
              </div>
              <button
                className="mycapsule2-modal-button"
                onClick={() => setShowModal(false)}
              >
                확인
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mycapsule2;
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