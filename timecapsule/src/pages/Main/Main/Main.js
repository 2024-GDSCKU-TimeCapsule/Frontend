import "./Main.css";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { Circles } from "react-loader-spinner";

import menu from "./img/Subtract.svg";
import create from "./img/Vector.svg";
import mycapsule from "./img/Union.svg";
import archiving from "./img/Group 22.svg";
import setting from "./img/레이어_1.svg";

import dayjs from "dayjs";
import Header from "../../../components/Layout/Header/Header";
import Footer from "../../../components/Layout/Footer/Footer";
import useAuth from "../../../components/Data/useAuth";
import LoadingCircle from "../../../components/LoadingCircle/LoadingCircle";

const Main = () => {
  const dday = leftdays();
  const progress = ((365 - dday) / 365) * 100;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const { checkLogin, getUserData } = useAuth();
  const [user, setUser] = useState({
    id: "",
    nickname: "",
    userId: "",
  });

  useEffect(() => {
    checkLogin({
      loginFailFunc: () => {
        navigate("/login");
      },
    });
    getUserData({
      getDataFailFunc: () => {
        navigate("/login");
      },
      getDataSuccessFunc: (userData) => {
        if (userData[0]) {
          setUser({
            id: userData[0].id,
            nickname: userData[0].nickname,
            userId: userData[0].user_id,
          });
          setIsLoading(false);
        } else {
          navigate("/policy");
        }
      },
    });
  }, []);

  return (
    <div className="main-container">
      {isLoading ? (
        <LoadingCircle />
      ) : (
        // <div className="loading">
        //   <Circles type="Oval" color="#ffffff" height={80} width={80} />
        // </div>
        <div className="main-screen">
          <Header backURL="/" />
          <Link to="/mypage">
            <img
              className="setting-icon"
              src={setting}
              alt="setting-icon"
            ></img>
          </Link>
          <div className="dday-circle">
            <div
              id="dot"
              style={{
                transform: `rotate(${3.6 * progress}deg) translate(0,-178px)`,
              }}
            ></div>
            <CircularProgressbarWithChildren value={progress}>
              <div className="main-dday">D-{dday}</div>
              <div className="dday-text">Unsealed December 31, 2024</div>
            </CircularProgressbarWithChildren>
          </div>
          <div className="nav">
            <Link to="/capsule">
              <div className="create">
                <img src={create} alt="create" />
              </div>
            </Link>
            <div className="menu">
              <img src={menu} alt="menu" />
              <Link to="/mycapsule">
                <img className="mycapsule" src={mycapsule} alt="mycapsule" />
              </Link>
              <Link to="/capsulearchiving">
                <img className="archiving" src={archiving} alt="archiving" />
              </Link>
            </div>
          </div>
          <div className="main-footer">
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

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

export default Main;
