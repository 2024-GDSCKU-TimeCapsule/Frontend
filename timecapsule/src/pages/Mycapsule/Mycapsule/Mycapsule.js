import "./Mycapsule.css";
import goalimg from "../img/goalcapsule.svg";
import memoryimg from "../img/memorycapsule.svg";
import letterimg from "../img/lettercapsule.svg";
import goback from "../img/goback.svg";
import smalllock from "../img/smalllock.svg";
import { useState } from "react";
import { capsuledata1, capsuledata2, capsuledata3, leftdays } from "./Capsuledata.js";
import Header from "../../../components/Layout/Header/Header";

function Mycapsule() {
  const [blur, setBlur] = useState("blurring");
  const [modal, setModal] = useState("notmodal");
  const [container, setContainer] = useState("mycapsule-container");

  return (
    <>
      <div
        className={container}
        onClick={() => {
          closemodal({ setModal, setContainer, container });
        }}>
        <div>
          <Header />
        </div>
        <div className="abc">
          <div>
            <div className="year">2024</div>
          </div>
          <div
            className={blur}
            onClick={() => {
              openmodal({ setModal, setContainer, blur });
            }}>
            <div className="nonpointer">
              <div>
                <div className="goalposition">
                  <Typeofcapsule type="GOALS" />
                </div>
                <div className="goalcapsule">{goalsrepeat(2)}</div>
              </div>
              <div>
                <div className="memoryposition">
                  <Typeofcapsule type="MEMORY" />
                </div>
                <div className="memorycapsule">{memoryrepeat(4)}</div>
              </div>
              <div>
                <div className="letterposition">
                  <Typeofcapsule type="LETTER" />
                </div>
                <div className="lettercapsule">{letterrepeat(4)}</div>
              </div>
            </div>
          </div>
          <Stillsealed modal={modal} setModal={setModal} setContainer={setContainer} blur={blur} />
          <Modal modal={modal} />
        </div>
      </div>
      <Blurbutton blur={blur} setBlur={setBlur} setModal={setModal} setContainer={setContainer} />
    </>
  );
}

function Typeofcapsule(props) {
  return (
    <div>
      <div className="capsuletype">{props.type}</div>
    </div>
  );
} // 캡슐 타입 3종류

function Capsuleimgs(props) {
  return (
    <div>
      <img src={props.imgtype} alt="" className="capsuleimg"></img>
      <div className="capsulename">{props.text}</div>
    </div>
  );
} // 캡슐 이미지 3종류

function Upside(props) {
  return (
    <div>
      <img src={goback} alt="goback" className="goback"></img>
      <div className="gugi">{props.name}</div>
    </div>
  );
} // 상단 <MY CAPSULE> 부분

const goalsrepeat = (num) => {
  let arr = [];

  for (let i = 0; i < Math.min(num, capsuledata1.length); i++) {
    arr.push(<Capsuleimgs imgtype={goalimg} text={capsuledata1[i].text} />);
  }
  return arr;
}; // GOALS에 캡슐을 몇개를 화면에 표시할 것인지를 나타내는 함수

const memoryrepeat = (num) => {
  let arr = [];

  for (let i = 0; i < Math.min(num, capsuledata2.length); i++) {
    arr.push(<Capsuleimgs imgtype={memoryimg} text={capsuledata2[i].text} />);
  }
  return arr;
}; // MEMORY에 캡슐을 몇개를 화면에 표시할 것인지를 나타내는 함수

const letterrepeat = (num) => {
  let arr = [];

  for (let i = 0; i < Math.min(num, capsuledata3.length); i++) {
    arr.push(<Capsuleimgs imgtype={letterimg} text={capsuledata3[i].text} />);
  }
  return arr;
}; // LETTER에 캡슐을 몇개를 화면에 표시할 것인지를 나타내는 함수

function Stillsealed({ modal, setModal, setContainer, blur }) {
  if (blur === "blurring") {
    return (
      <div
        onClick={() => {
          openmodal({ setModal, setContainer, blur });
        }}>
        <div>
          <img src={smalllock} alt="smalllock" className="smalllock"></img>
        </div>
        <div className="locked">아직 타임캡슐이 봉인되어 있어요!</div>
      </div>
    );
  }
} // 자물쇠 그림 및 <아직 타임캡슐이 봉인 ...> 문구를 클릭해서 모달창 열기

function Modal({ modal }) {
  if (modal === "modal2") {
    return (
      <>
        <div
          className={modal}
          onClick={(e) => {
            e.stopPropagation();
          }}>
          <div>
            <div className="text1">봉인된 타임캡슐</div>
            <div className="text2">봉인 해제까지 남은 시간</div>
            <div className="text3">D-{leftdays()}</div>
          </div>
        </div>
        <div>
          <button type="button" className="confirmbutton">
            확인
          </button>
        </div>
      </>
    );
  }
} // 모달창

function Blurbutton({ blur, setBlur, setModal, setContainer }) {
  return (
    <button
      type="button"
      className="blurbutton"
      onClick={() => {
        if (blur === "blurring") {
          setBlur("notblurring");
          setModal("notmodal");
          setContainer("mycapsule-container");
        } else {
          setBlur("blurring");
        }
      }}>
      블러처리 버튼
    </button>
  );
} // 임시로 만든 우측 하단 블러처리 버튼

const closemodal = ({ setModal, setContainer, container }) => {
  if (container === "mycapsule-container-modal") {
    setModal("notmodal");
    setContainer("mycapsule-container");
  }
}; // 모달창 외부(확인버튼 포함)를 클릭해서 모달창 닫기

const openmodal = ({ setModal, setContainer, blur }) => {
  if (blur === "blurring") {
    setModal("modal2");
    setContainer("mycapsule-container-modal");
  }
}; // 블러처리된 화면을 클릭해서 모달창 열기

export default Mycapsule;
