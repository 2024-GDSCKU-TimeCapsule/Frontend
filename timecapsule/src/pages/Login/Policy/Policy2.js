import React, { useState } from "react";
import "./Policy2.css";

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
      navigate("/makenickname");
    } else {
      alert(
        "개인정보 수집 이용에 동의해야\n타임캡슐 서비스 이용이 가능합니다."
      );
    }
  };

  const goToPolicyFile = () => {
    navigate("/policyfile");
  };
  return (
    <div className="policy-container">
      <div className="backgroundDark"></div>
      <div id="page">
        <img src={image13} className="image-13" alt="capsule-1" />
        <img src={image12} className="image-12" alt="capsule-2" />
        <img src={image15} className="image-15" alt="capsule-3" />

        <div className="content2">
          <di class="policy-title2">
            &lt;GDSC Korea University&gt; 개인정보 처리 방침
          </di>
          <div class="policy-content1">
            &lt;GDSC&gt;는 정보주체의 자유와 권리 보호를 위해 「개인정보
            보호법」 및 관계 법령이 정한 바를 준수하여, 적법하게 개인정보를
            처리하고 안전하게 관리하고 있습니다. 이에 「개인정보 보호법」 제 30
            조에 따라 정보주체에게 개인정보 처리에 관한 절차 및 기준을 안내하고,
            이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여
            다음과 같이 개인정보 처리방침을 수립·공개합니다.
          </div>
          <div onClick={goToPolicyFile} class="read-more">
            자세히보기
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
