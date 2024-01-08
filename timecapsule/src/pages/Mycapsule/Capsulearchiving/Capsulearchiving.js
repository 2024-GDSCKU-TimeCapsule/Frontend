import "./Capsulearchiving.css";
import img15 from "../img/image15.svg";
import img12 from "../img/image12.svg";
import img13 from "../img/image13.svg";
import lock from "../img/lock.svg";
import tillunlock from "../img/tillunlock.svg";
import goback from "../img/goback.svg";
import { useState } from "react";

function Capsulearchiving() {
  const [day, setDay] = useState(235);

  return (
    <>
      <div>
        <img src={img15} alt="15" className="img15"></img>
        <img src={img12} alt="12" className="img12"></img>
        <img src={img13} alt="13" className="img13"></img>
      </div>
      <div>
        <Upside name="CAPSULE ARCHIVING"></Upside>
      </div>
      <div>
        <div>
          <img src={lock} alt="lock" className="lock"></img>
        </div>
        <div className="words">아직 타임캡슐이 봉인되어 있어요!</div>
      </div>
      <div>
        <div className="words2">봉인 해제까지 남은 시간</div>
        <div
          className="dday"
          onClick={() => {
            setDay(day - 1);
          }}
        >
          D-{day}
        </div>
        <img src={tillunlock} alt="tillunlock" className="tillunlock"></img>
      </div>
    </>
  );
}

function Upside(props) {
  return (
    <div>
      <img src={goback} alt="goback" className="goback"></img>
      <div className="gugi">{props.name}</div>
    </div>
  );
}

export default Capsulearchiving;
