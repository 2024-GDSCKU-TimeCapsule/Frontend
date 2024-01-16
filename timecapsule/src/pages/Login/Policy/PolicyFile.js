import { useEffect, useState } from "react";
import policyFileImg from "./img/policyFile.svg";
import "./PolicyFile.css";
import { useNavigate } from "react-router-dom";

const PolicyFile = () => {
  const [clickCount, setClickCount] = useState(0);
  const maxClicks = 2;
  const navigate = useNavigate();

  const handleScroll = () => {
    // 내리기 횟수 제한
    // 현재 클릭 횟수 업데이트
    setClickCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount <= maxClicks) {
        // 스무스 스크롤 옵션을 사용하여 페이지를 내립니다.
        window.scrollBy({
          top: window.innerHeight * 1.2, // Y축 방향으로 이동할 거리
          behavior: "smooth", // 스크롤 이동 방식을 부드럽게 설정
        });
      } else {
        navigate("/policy");
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
