import { useEffect, useState } from "react";
import policyFileImg from "./img/policyFile.svg";
import "./PolicyFile.css";
import { useNavigate } from "react-router-dom";

const PolicyFile = () => {
  const [clickCount, setClickCount] = useState(0);
  const totalClicks = 3; // 전체 클릭 횟수
  const maxClicks = 2;
  const navigate = useNavigate();

  const handleScroll = () => {
    setClickCount((prevCount) => {
      const newCount = prevCount + 1;

      if (newCount < totalClicks) {
        // 전체 문서 높이를 계산합니다.
        const documentHeight = document.documentElement.scrollHeight;
        // 스크롤을 전체 높이의 1/3씩 이동시킵니다.
        window.scrollBy({
          top: documentHeight / totalClicks,
          behavior: "smooth",
        });
      } else {
        // 세 번째 클릭 후에는 지정된 경로로 이동합니다.
        navigate("/policy2");
      }

      return newCount;
    });
  };

  return (
    <div>
      <button className="scrollButton" onClick={handleScroll}>
        확인
      </button>
      <img src={policyFileImg} alt="policyFileImg" className="policyFileImg" />
    </div>
  );
};
export default PolicyFile;
