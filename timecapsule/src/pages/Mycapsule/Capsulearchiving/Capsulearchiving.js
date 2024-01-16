import "./Capsulearchiving.css";
import img15 from "../img/image15.svg";
import img12 from "../img/image12.svg";
import img13 from "../img/image13.svg";
import lock from "../img/lock.svg";
import whiteline from "../img/whiteline.svg";
import { leftdays } from "../Mycapsule/Capsuledata.js";
import Header from "../../../components/Layout/Header/Header";

function Capsulearchiving() {
  return (
    <>
      <div className="capsulearchiving-container">
        <div>
          <Header pageName="CAPSULE ARCHIVING" />
        </div>
        <div className="abc">
          <div>
            <img src={img15} alt="15" className="img15"></img>
            <img src={img12} alt="12" className="img12"></img>
            <img src={img13} alt="13" className="img13"></img>
          </div>

          <div className="ani1">
            <div>
              <img src={lock} alt="lock" className="lock"></img>
            </div>
            <div className="words1">아직 타임캡슐이 봉인되어 있어요!</div>
            <div>
              <img src={whiteline} alt="whiteline" className="whiteline"></img>
            </div>
          </div>
          <div>
            <div className="words2">봉인 해제까지 남은 시간</div>
            <div className="dday">D-{leftdays()}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Capsulearchiving;
