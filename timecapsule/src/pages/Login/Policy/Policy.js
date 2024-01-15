import React, { useState } from "react";
import "./Policy.css";

import image13 from "./img/image-13.png";
import image12 from "./img/image-12.png";
import image15 from "./img/image-15.png";

const Policy = () => {
  const [isAgree, setIsAgree] = useState(true);

  const handleAgreeChange = (e) => {
    setIsAgree(e.target.checked);
  };

  return (
    <div className="componentBackground">
      <div id="page">
        <img src={image13} id="image-13" alt="capsule-1" />
        <img src={image12} id="image-12" alt="capsule-2" />
        <img src={image15} id="image-15" alt="capsule-3" />

        <div id="content">
          <di class="pravacy-title">
            프로젝트 &lt;타임캡슐&gt; 개인정보 수집이용 동의서
          </di>
          <div class="pravacy-content1">
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
                  <br />
                  (사용자 선택)
                </td>
                <td>
                  서비스 종료 후<br />
                  7일까지
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <div class="pravacy-bottom-content1">
            ※ 위 개인정보 수집 · 이용 동의를 거부할 권리가 있습니다.
            <br />
            그러나 동의를 거부하는 경우 타임캡슐 프로젝트에 해당하는 모든
            <br />
            서비스를 제공받을 수 없습니다.
          </div>
          <div class="pravacy-bottom-content2">
            위와 같이 개인정보를 수집·이용하는데 동의하십니까? (선택)
          </div>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={isAgree}
              onChange={handleAgreeChange}
            />
            동의함
          </label>
          <label>
            <input
              type="checkbox"
              checked={!isAgree}
              onChange={handleAgreeChange}
            />
            동의하지 않음
          </label>
        </div>
        <button>다음</button>
      </div>
    </div>
  );
};

export default Policy;
