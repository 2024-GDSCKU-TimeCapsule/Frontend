import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Error.css";

function Error({ code, message }) {
  const navigate = useNavigate();
  const [time, setTime] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 1) {
          clearInterval(timer);
          navigate("/");
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);
  return (
    <div className="error-container">
      <div className="error-title">TIME CAPSULE</div>
      <div className="error-text"> Error</div>
      <div className="error-message"> {time} 초 후 메인페이지로 돌아갑니다</div>
      <div className="error-message">{code}</div>
      <div className="error-message">{message}</div>
    </div>
  );
}
export default Error;
