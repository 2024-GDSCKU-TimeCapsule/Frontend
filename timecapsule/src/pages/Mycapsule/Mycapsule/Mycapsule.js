import "./Mycapsule.css";
import goalimg from "../img/goalcapsule.svg";
import memoryimg from "../img/memorycapsule.svg";
import letterimg from "../img/lettercapsule.svg";
import smalllock from "../img/smalllock.svg";
import { useState } from "react";
import { capsuledata1, capsuledata2, capsuledata3 } from "./Capsuledata.js";
import Header from "../../../components/Layout/Header/Header";
import Footer from "../../../components/Layout/Footer/Footer";
import { useParams, useNavigate } from "react-router-dom";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Modal, closemodal, openmodal, Buttonconfirm } from "./Modal";
import { motion, AnimatePresence } from "framer-motion";

function Mycapsule() {
  const [blur, setBlur] = useState("notblurring");
  const [modal, setModal] = useState(false);
  const [container, setContainer] = useState("mycapsule-container");


  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 360 }}
        exit={{ opacity: 0, rotate: 0 }}
        className={container}
        onClick={() => {
          closemodal({ setModal, setContainer, container });
        }}
      >
        <Header />
        <div className="abc">
          <div className="year">2024</div>
          <div
            className={blur}
            onClick={() => {
              openmodal({ setModal, setContainer, blur });
            }}
          >
            <div className="nonpointer">
              <div className="goalposition">
                <Typeofcapsule type="GOALS" />
              </div>
              <div
                className="goalcapsule"
                onClick={() => {
                  blurrrr({ setBlur, setModal, setContainer, blur });
                }}
              >
                {goalsrepeat(1)}
              </div>

              <div>
                <div className="memoryposition">
                  <Typeofcapsule type="MEMORY" />
                </div>
                <div
                  className="memorycapsule"
                  onClick={() => {
                    blurrrr({ setBlur, setModal, setContainer, blur });
                  }}
                >
                  {memoryrepeat(1)}
                </div>
              </div>
              <div>
                <div className="letterposition">
                  <Typeofcapsule type="LETTER" />
                </div>
                <div
                  className="lettercapsule"
                  onClick={() => {
                    blurrrr({ setBlur, setModal, setContainer, blur });
                  }}
                >
                  {letterrepeat(4)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Stillsealed
          modal={modal}
          setModal={setModal}
          setContainer={setContainer}
          blur={blur}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0",
            right: "0",

            width: "100%",
            marginBottom: "40vh",
          }}
        >
          <Modal modal={modal} />
          <Buttonconfirm modal={modal} />
        </div>

        <div className="qw">
          {modal ? (
            <Footer textColor="rgb(255,255,255,0.6)" />
          ) : (
            <Footer textColor="rgb(0,0,0,0.6)" />
          )}
        </div>
      </motion.div>
    </AnimatePresence>
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
        }}
      >
        <div className="lock-component">
          <img src={smalllock} alt="smalllock" />
          아직 타임캡슐이 봉인되어 있어요!
        </div>
      </div>
    );
  }
} // 자물쇠 그림 및 <아직 타임캡슐이 봉인 ...> 문구를 클릭해서 모달창 열기

function Blurbutton({ blur, setBlur, setModal, setContainer }) {
  return (
    <button
      type="button"
      className="blurbutton"
      onClick={() => {
        if (blur === "blurring") {
          setBlur("notblurring");
          setModal(false);
          setContainer("mycapsule-container");
        } else {
          setBlur("blurring");
        }
      }}
    >
      블러처리 버튼
    </button>
  );
} // 임시로 만든 우측 하단 블러처리 버튼

const blurrrr = ({ setBlur, setModal, setContainer, blur }) => {
  if (blur === "blurring") {
    setBlur("notblurring");
    setModal(false);
    setContainer("mycapsule-container");
  } else {
    setBlur("blurring");
  }
};

export default Mycapsule;
