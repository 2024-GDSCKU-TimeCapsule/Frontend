import React, { useState } from "react";
import "./Policy.css";

import image13 from "./img/image-13.png";
import image12 from "./img/image-12.png";
import image15 from "./img/image-15.png";

import { useNavigate } from "react-router-dom";

const Policy = () => {
  const [isAgree, setIsAgree] = useState(true);
  const [selectedOption, setSelectedOption] = useState("agree");

  const handleAgreeChange = (e) => {
    setIsAgree(e.target.checked);
  };

  const navigate = useNavigate();

  const goToNextPage = () => {
    if (selectedOption === "agree") {
      navigate("/policy2");
    } else {
      alert(
        "개인정보 수집 이용에 동의해야\n타임캡슐 서비스 이용이 가능합니다."
      );
    }
  };

  return (
    <div className="policy-container">
      <div className="backgroundDark"></div>
      <div id="page">
        <img src={image13} className="image-13" alt="capsule-1" />
        <img src={image12} className="image-12" alt="capsule-2" />
        <img src={image15} className="image-15" alt="capsule-3" />

        <div className="content">
          <di class="policy-title">
            프로젝트 &lt;타임캡슐&gt; 개인정보 수집이용 동의서
          </di>
          <div class="policy-content11">
            &lt;타임캡슐&gt;은 사용자의 계정 생성 및 서비스 이용을 위해
            <br />
            아래 항목의 개인정보를 수집·이용하고자 합니다.
            <br />
            내용을 반드시 확인하신 후 동의 여부를 결정하여 주시길 바랍니다.
          </div>
          <div class="table-title">개인정보 수집 및 이용 내역</div>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>항목</th>
                <th>수집 · 이용 목적</th>
                <th>보유 · 이용 기간</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  구글 또는 카카오
                  <br />
                  계정 이메일
                  <br />
                  사용자 프로필 정보
                </td>
                <td>
                  회원 가입 계정
                  <br />
                  프로필 생성 서비스
                  <br />
                  이용 결과물 공유
                </td>
                <td>
                  서비스 종료 후<br />
                  7일까지
                  <br />
                  (2025년 1월 8일)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <div class="policy-bottom-content1">
            ※ 위 개인정보 수집 · 이용 동의를 거부할 권리가 있습니다.
            <br />
            그러나 동의를 거부하는 경우 타임캡슐 프로젝트에 해당하는 모든
            서비스를 제공받을 수 없습니다.
          </div>
          <div class="policy-bottom-content2">
            위와 같이 개인정보를 수집·이용하는데 동의하십니까?
          </div>
        </div>
        <div className="selection-container">
          <div className="options">
            <label className="option">
              동의함
              <input
                type="radio"
                name="policy"
                value="agree"
                checked
                onClick={() => setSelectedOption("agree")}
              />
            </label>
            <label className="option">
              동의하지 않음
              <input
                type="radio"
                name="policy"
                value="disagree"
                onClick={() => setSelectedOption("disagree")}
              />
            </label>
          </div>
        </div>
        <button onClick={() => goToNextPage()} className="nextButton">
          다음
        </button>
      </div>
    </div>
  );
};

export default Policy;
