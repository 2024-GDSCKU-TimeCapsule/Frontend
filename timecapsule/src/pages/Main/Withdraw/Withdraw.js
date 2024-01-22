import "./Withdraw.css";
import Header from "../../../components/Layout/Header/Header";
import Footer from "../../../components/Layout/Footer/Footer";
import { Link } from "react-router-dom";
const Withdraw = () => {
  return (
    <>
      <div className="main-container dark">
        <Header />
        <div className="withdraw-modal">
          <div className="content">
            <div className="title">정말 탈퇴하시겠습니까?</div>
            <div className="text">
              탈퇴버튼 선택시, <br></br> 계정은 삭제되며 복구되지 않습니다.
            </div>
          </div>
          <div className="buttons">
            <button className="button2 white">확인</button>
            <button
              type="button"
              className="button2"
              onClick={() => {
                window.location.href = "/mypage";
                // console.log('실행');
              }}
            >
              취소
            </button>
          </div>
        </div>
        <div className="main-footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Withdraw;
