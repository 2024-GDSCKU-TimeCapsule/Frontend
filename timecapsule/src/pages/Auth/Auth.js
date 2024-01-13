import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
const Auth = () => {
  const navigate = useNavigate();
  const code = new URL(document.location.toString()).searchParams.get("code");
  useEffect(() => {
    axios.post(process.env.REACT_APP_TOKEN_ENDPOINT, { code }).then((value) => {
      console.log(value.data); // 토큰과 함께 오는 정보들을 출력해보자
      navigate("/main"); //
    });
  }, []);
  return <div></div>;
};
export default Auth;
